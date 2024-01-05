"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface UploadLogoProps {
  workspaceId: string;
  file: File;
}

export const uploadLogo = async ({ workspaceId, file }: UploadLogoProps) => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.storage
    .from("workspace-logos")
    .upload(`workspaceLogo.${workspaceId}`, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    console.log("Error", error);
    throw new Error();
  }

  return data;
};
