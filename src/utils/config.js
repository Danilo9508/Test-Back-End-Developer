const dotenv = require('dotenv');
const path = require('path');

const environment = process.env.NODE_ENV;

switch (environment) {
  case 'production':
    dotenv.config({
      path: path.resolve('.production.env'),
    });
    break;
  case 'development':
    dotenv.config({
      path: path.resolve('.development.env'),
    });
    break;
  case 'test':
    dotenv.config({
      path: path.resolve('.test.env'),
    });
    break;
  default:
    dotenv.config({
      path: path.resolve('.development.env'),
    });
}


module.exports = {
  NODE_ENV: environment,
  USERDB: process.env.USERDB,
  PASSDB: process.env.PASSDB,
  NAMEDB: process.env.NAMEDB,
  HOSTDB: process.env.HOSTDB,
  PORTDB: process.env.PORTDB,
  VALUE_FOR_KM: process.env.VALUE_FOR_KM,
  VALUE_FOR_MINUTE: process.env.VALUE_FOR_MINUTE,
  VALUE_BASE: process.env.VALUE_BASE,
  API_WOMPI_URI: process.env.API_WOMPI_URI,
  TOKEN_WOMPI: process.env.TOKEN_WOMPI,
  CUSTOMER_EMAIL: process.env.CUSTOMER_EMAIL,
  PAYMENT_ID: process.env.PAYMENT_ID,
  BEARER_TOKEN: process.env.BEARER_TOKEN,
  ACCEPTENCE_TOKEN: process.env.ACCEPTENCE_TOKEN,
  PORT: process.env.PORT || 4000,
}