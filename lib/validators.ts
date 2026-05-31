import { z } from "zod";

export const EmailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email("อีเมลไม่ถูกต้อง")
  .refine((v) => v.endsWith("@spu.ac.th"), "กรุณาใช้อีเมล @spu.ac.th");

export const PasswordSchema = z.string().min(8, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร");

export const RegisterSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema
});

export const LoginSchema = z.object({
  emailOrUsername: z.string().trim().min(1, "กรุณากรอกชื่อผู้ใช้หรืออีเมล"),
  password: PasswordSchema
});

