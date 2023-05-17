const server = require('../../server');
const request = require('supertest')
describe('valide routes all routes', () => {
    let idDriver;

    describe('test validate routes for rider', () => {
        test('should responde with a 201 -- create travel', async () => {
            const response = await request(server).post('/rider/requestTravel').send({
                idRider: 1,
                latitude: 1.8048702241204544,
                longitude: -75.90515639242895
            });
            idDriver = response.body.response.idDriver
            expect(response).toBeDefined()
            expect(response.statusCode).toBeDefined()
            expect(response.statusCode).toBe(201)
        })
    })
    describe('test validate routes for Driver', () => {
        test('should responde with a 201 --finish travel', async () => {
            const response = await request(server).post('/driver/travelFinish').send({
                idDriver,
                latitude: 1.6213911369721572,
                longitude: -75.62088897237872
            });
            expect(response).toBeDefined()
            expect(response.statusCode).toBeDefined()
            expect(response.statusCode).toBe(201)
        })
    })
})