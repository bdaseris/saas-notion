import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().describe("Email").email({ message: "Invalid email" }),
  password: z
    .string()
    .describe("Password")
    .min(3, { message: "Paswword is required." }),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;
