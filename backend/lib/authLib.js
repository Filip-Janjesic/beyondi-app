const crypto = require('crypto');
module.exports.encrypt = (text) => {
  const salt = process.env.SALT;
  let hash = crypto.pbkdf2Sync(text, salt, 1000, 64, 'sha256').toString('hex');
  hash = hash.substring(0, 16);
  return hash;
};
