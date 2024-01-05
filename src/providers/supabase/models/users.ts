import { pgTable, uuid, jsonb, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().notNull(),
  fullName: text("full_name"),
  avatarUrl: text("avatar_url"),
  billingAddress: jsonb("billing_address"),
  paymentMethod: jsonb("payment_method"),
  email: text("email"),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});
