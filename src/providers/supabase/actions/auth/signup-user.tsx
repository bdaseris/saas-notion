"use server";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { SignUpFormSchemaType } from "@/libs/zod/forms";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function actionSignUpUser({
  email,
  password,
}: SignUpFormSchemaType) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data } = await supabase
    .from("profiles")
    .select("email")
    .eq("email", email);

  if (data?.length) return { error: { message: "User already exists", data } };
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${SITE_URL}/api/auth/callback`,
    },
  });
  return response;
}
