import {
  pgTable,
  text,
  pgEnum,
} from "drizzle-orm/pg-core"


export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email").notNull(),
  image: text("image").default("no-image"),
  password: text("password"),
})


