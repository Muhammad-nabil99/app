import { supabase } from "./supabase";

export const getCurrentUser = async () => {
  let { data: users, error } = await supabase.from("users").select("*");
  if (error) {
    console.log(error.message);
    throw error;
  }
  return users;
};
