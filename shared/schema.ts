import { z } from "zod";

// Contact schema
export const insertContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export const contactSchema = insertContactSchema.extend({
  id: z.number(),
  createdAt: z.date(),
});

// Newsletter schema
export const insertNewsletterSchema = z.object({
  email: z.string().email(),
});

export const newsletterSchema = insertNewsletterSchema.extend({
  id: z.number(),
  subscribedAt: z.date(),
});

// Type exports
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = z.infer<typeof contactSchema>;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = z.infer<typeof newsletterSchema>;

// User schema (keeping for compatibility but not used without DB)
export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const userSchema = insertUserSchema.extend({
  id: z.number(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = z.infer<typeof userSchema>;