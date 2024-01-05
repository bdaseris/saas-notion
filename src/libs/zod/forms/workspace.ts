import { z } from "zod";

export const WorkspaceFormSchema = z.object({
  workspaceName: z
    .string()
    .describe("Workspace Name")
    .min(1, "Workspace name must be min of 1 character"),
  logo: z.any(),
});

export type WorkspaceFormSchemaType = z.infer<typeof WorkspaceFormSchema>;
