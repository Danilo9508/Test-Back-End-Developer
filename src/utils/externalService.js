const axios = require('axios').default;
const { uid } = require('uid');
const { buildOutput } = require('./utilities')
const { statusCode } = require('./const')
require('dotenv').config();
/**
 * make a POST request to a service
 * @param {Object} data 
 * @param {Object} config 
 * @returns
 * @example
 */
const postPayment = async (amount) => {
    amount = parseInt(amount.toString().concat('00'))
    try {
        data = {
            acceptance_token: process.env.ACCEPTENCE_TOKEN,
            amount_in_cents: amount, // Monto current centavos
            currency: "COP", // Moneda
            customer_email: process.env.CUSTOMER_EMAIL, // Email del usuario
            payment_method: {
                type: 'CARD',
                token: process.env.TOKEN_WOMPI,
                installments: 2 // Número de cuotas si la fuente de pago representa una tarjeta de lo contrario el campo payment_method puede ser ignorado.
            },
            reference: uid(16), // Referencia única de pago
            payment_source_id: process.env.PAYMENT_ID // ID de la fuente de pago
        }
        const headers = {
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`
        };

        const response= await axios.post(`${process.env.API_WOMPI_URI}/transactions`, data, { headers });
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'postPayment-ExternalService', error });
    }
};
module.exports = { postPayment }