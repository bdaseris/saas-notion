import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";

export const workspaces = pgTable("workspaces", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  ownerId: uuid("owner_id").notNull(),
  title: text("title").notNull(),
  iconId: text("icon_id"),
  content: text("content"),
  inTrash: text("in_trash"),
  logo: text("logo"),
  bannerUrl: text("banner_url"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }),
});