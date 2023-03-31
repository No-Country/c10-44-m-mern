import Passport from "passport";
import { LocalStrategy } from "./strategies";
import { User, UserDocument } from "@/models/user";

// User serialization
Passport.serializeUser((user, done) => {
  done(null, user);
})

Passport.deserializeUser((id, done) => {
  User.findById(id, (err: NativeError, user: UserDocument) => {
    done(err, user);
  });
});

Passport.use(LocalStrategy);
// ...more strategies
