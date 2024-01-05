"use server";

import { eq } from "drizzle-orm";

import { workspaces } from "@/providers/supabase/migrations/schema";
import db from "@/providers/supabase";

export const deleteWorkspace = async (workspaceId: string) => {
  if (!workspaceId) return;
  await db.delete(workspaces).where(eq(workspaces.id, workspaceId));
};
