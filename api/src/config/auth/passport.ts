import Passport from 'passport';
import { LocalStrategy } from './strategies';

Passport.use(LocalStrategy);
// ...more strategies