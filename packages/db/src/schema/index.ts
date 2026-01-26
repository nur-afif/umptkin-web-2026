import { pgTable, serial, text, date, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  nisn: text("nisn").notNull().unique(),
  nama: text("nama").notNull(),
  tanggalLahir: date("tanggal_lahir").notNull(),
  telpon: text("telpon").notNull(),
  email: text("email").notNull(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
