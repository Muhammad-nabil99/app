import { supabase } from "./supabase";

export async function getLaporan() {
  let { data: laporan, error } = await supabase.from("laporan").select("*");

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return laporan;
}
export async function getLaporanByUserId(userId) {
  
  
  let { data: laporan, error } = await supabase
    .from("laporan")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return laporan;
}
export async function getLaporanById(id) {
  let { data: laporan, error } = await supabase
    .from("laporan")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return laporan;
}
export async function getLaporanByStatus() {
  let { data: laporan1, error1 } = await supabase
    .from("laporan")
    .select("*")
    .eq("status", "proses");

  if (error1) {
    console.log(error1);
    throw new Error(error1.message);
  }
  let { data: laporan2, error: error2 } = await supabase
    .from("laporan")
    .select("*")
    .neq("status", "proses");

  if (error2) {
    console.log(error2);
    throw new Error(error2.message);
  }

  const data = { laporan1, laporan2 };

  return data;
}
export async function createLaporanAPI({ id, newLaporan }) {
  const hasImagePath = `${newLaporan?.bukti}`.startsWith?.(
    import.meta.env.VITE_SUPABASE_URL
  );

  const imageName = `${Date.now()}-${newLaporan?.bukti?.[0]?.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newLaporan.bukti
    : `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/image/${imageName}`;

  // define variabel
  let query;

  // edit query

  if (id) {
    query = supabase
      .from("laporan")
      .update([{ ...newLaporan, bukti: imagePath }])
      .eq("id", id);
  }

  // createQuery query
  if (!id) {
    query = supabase
      .from("laporan")
      .insert([{ ...newLaporan, bukti: imagePath }]);
  }

  const { data, error } = await query.select();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  if (hasImagePath) return data;

  const { storageError } = await supabase.storage
    .from("image")
    .upload(imageName, newLaporan?.bukti?.[0]);

  if (storageError) {
    await supabase.from("image").delete().eq("id", newLaporan.id);
    console.log(storageError);
    throw new Error(storageError.message);
  }
  return data;
}
export async function deleteLaporanAPI(id) {
  const { error } = await supabase.from("laporan").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
