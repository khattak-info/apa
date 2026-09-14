import { supabase } from "../lib/supabase";

export async function uploadMediaFile(file: File, folder: "events" | "council"): Promise<string> {
  const ext = file.name.split(".").pop();
  const safeName = `${crypto.randomUUID()}.${ext}`;
  const path = `${folder}/${safeName}`;
  const { error } = await supabase.storage.from("media").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;
  const { data } = supabase.storage.from("media").getPublicUrl(path);
  return data.publicUrl;
}
