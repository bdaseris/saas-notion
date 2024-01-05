"use server";

import { workspaces } from "@/providers/supabase/migrations/schema";
import { Workspace } from "@/providers/supabase/types";
import db from "@/providers/supabase";

interface ResultDataProps {
  data: Workspace | null;
  error: string | null;
}

export const createWorkspace = async (workspace: Workspace) => {
  const result: ResultDataProps = { data: null, error: null };

  try {
    await db.insert(workspaces).values(workspace);
    return result;
  } catch (error) {
    console.log(error);
    result.error = "Error";
    return result;
  }
};
