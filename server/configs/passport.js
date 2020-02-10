// Import passport json web token for api authentication
const { Strategy, ExtractJwt } = require('passport-jwt');

// Include additional required modules
const { AppConfig } = require('.');
const Constants = require('../helpers/Constants');
const { UserCredential } = require('../models');

module.exports = (passport) => {
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = AppConfig.tokenSecret;
    passport.use(new Strategy(opts, async (payload, done) => {
            // Check if the user is active before you grant the authorization
            const credentials = await UserCredential.findOne({
                where: {
                    username: payload.username,
                    status: true
                }
            });

            // If no user return invalid credentials
            if (!credentials) {
                return done(null, false, Constants.INVALID_CREDENTIALS);
            }

            // return the payload
            return done(null, payload);
        })
    );
};
