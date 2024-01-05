import { validate } from "uuid";
import { eq } from "drizzle-orm";

import db from "@/providers/supabase";
import { files } from "@/providers/supabase/migrations/schema";

export const findOneByFileId = async (folderId: string) => {
  const isValid = validate(folderId);

  if (!isValid) return { data: null, error: "Error" };
  try {
    const results = (await db
      .select()
      .from(files)
      .orderBy(files.createdAt)
      .where(eq(files.folderId, folderId))) as File[] | [];
    return { data: results, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "Error" };
  }
};
