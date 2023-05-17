const { USERDB, PASSDB, NAMEDB, PORTDB, HOSTDB } = require('../utils/config')

const USER = encodeURIComponent(USERDB);
const PASSWORD = encodeURIComponent(PASSDB);
const URI = `postgres://${USER}:${PASSWORD}@${HOSTDB}:${PORTDB}/${NAMEDB}`;
console.log(URI)

module.exports = {
  url: URI,
  dialect: 'postgres',
};