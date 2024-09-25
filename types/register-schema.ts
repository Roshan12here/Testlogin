import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  confirmPassword: z.string(),
});