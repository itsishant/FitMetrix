const { v4: uuidv4 } = require("uuid");

const emailLocks = new Map();

const lockEmail = (email) => {
    if( emailLocks.has(email)) return null;

    const secret = uuidv4();
    emailLocks.set(email, secret);
    return secret;
}

const unlockEmail = (email, secret) => {
    if( emailLocks.get(email) === secret){
        emailLocks.delete(email);
    }
}

module.exports = {
    lockEmail, unlockEmail
};
