'use strict';
const axios = require('axios').default;
const { uid } = require('uid');
const { buildOutput } = require('./utilities')
const { statusCode } = require('./const')
const { ACCEPTENCE_TOKEN, CUSTOMER_EMAIL, TOKEN_WOMPI, PAYMENT_ID, BEARER_TOKEN } = require('./config');
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
       const data = {
            acceptance_token: ACCEPTENCE_TOKEN,
            amount_in_cents: amount, // Monto current centavos
            currency: "COP", // Moneda
            customer_email: CUSTOMER_EMAIL, // Email del usuario
            payment_method: {
                type: 'CARD',
                token: TOKEN_WOMPI,
                installments: 2 // Número de cuotas si la fuente de pago representa una tarjeta de lo contrario el campo payment_method puede ser ignorado.
            },
            reference: uid(16), // Referencia única de pago
            payment_source_id: PAYMENT_ID // ID de la fuente de pago
        }
        const headers = {
            Authorization: `Bearer ${BEARER_TOKEN}`
        };

        const response = await axios.post(`${process.env.API_WOMPI_URI}/transactions`, data, { headers });
        return response.data;
    } catch (error) {
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'postPayment-ExternalService', error });
    }
};
module.exports = { postPayment }