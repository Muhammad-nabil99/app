import { supabase } from "./supabase";
export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
export async function loginAPI({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log(error.message);
    throw error;
  }
  return data;
}
export async function signUpAPI(dataUser) {
  const { email, password, role, nomor, username } = dataUser;

  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role,
        nomor,
        username,
      },
    },
  });

  if (error) {
    console.log(error.message);
    throw new Error(error);
  }

  return data;
}
export async function updateUserAPI({ email, password, updateData }) {
  const { data, error } = await supabase.auth.updateUser({
    email,
    password,
    data: updateData,
  });

  if (error) {
    console.log(error.message);
    throw new Error(error);
  }

  return data;
}
export async function logoutUserAPI() {
  let { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error.message);
    throw new Error(error);
  }
}
