import { Strategy as PassportLocalStrategy } from "passport-local";
import { User } from "@/models/user";

/**
 * To authenticate users using a username and password
 */
export const LocalStrategy = new PassportLocalStrategy({
  usernameField: "email",
}, async (email, candidatePassword, done) => {
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return done(null, false, { message: "No existe usuario con ese email" });
    }

    if (!existingUser.validatePassword(candidatePassword)) {
      return done(null, false, { message: "Contraseña incorrecta" });
    }
  } catch (error) {
    done(error);
  }
})
