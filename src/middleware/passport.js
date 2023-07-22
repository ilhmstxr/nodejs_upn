require("dotenv").config();
const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const Strategy = passportJwt.Strategy;
const dbPool = require("../config/database");

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },

    function (jwtPayload, done) {
      return dbPool
        .execute(`SELECT * FROM user WHERE id = ${jwtPayload.id}`)
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);
