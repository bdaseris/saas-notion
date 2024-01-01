"use server";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { LoginFormSchemaType } from "@/lib/zod/forms";

export async function actionLoginUser({
  email,
  password,
}: LoginFormSchemaType) {
  const supabase = createRouteHandlerClient({ cookies });
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return response;
}
