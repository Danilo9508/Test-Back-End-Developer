require("dotenv").config();
const { USERDB, PASSDB, NAMEDB, PORTDB, HOSTDB } = process.env

const USER = encodeURIComponent(USERDB);
const PASSWORD = encodeURIComponent(PASSDB);
const URI = `postgres://${USER}:${PASSWORD}@${HOSTDB}:${PORTDB}/${NAMEDB}`;
console.log(URI)

module.exports = {
  url: URI,
  dialect: 'postgres',
};