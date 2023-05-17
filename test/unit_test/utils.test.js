const utilities = require('../../src/utils/utilities')
describe('test unit for utilities', () => {

    test('test success calculateDistanceInKM', () => {
        const result = utilities.calculateDistanceInKM(1.623407714001804, -75.60675453778579, 8.75172391685034, -75.8795681503805);
        expect(result).toBe(793)
    });
    test('test bad parameters calculateDistanceInKM', () => {
        try {
            const result = utilities.calculateDistanceInKM();
            expect(result).toBeUndefined()
        } catch (error) {
            expect(error).toBeDefined()
            expect(error.typeOutput).toBeDefined()
            expect(error.typeOutput).toBe(500)
            expect(error.output).toBeDefined()
            expect(error.output).toBe('Bad Parameters')
        }
    });
    test('test success calculateMinutes', () => {
        const result = utilities.calculateMinutes('2023-05-16T08:19:00.668Z', '2023-05-16T19:51:32.772Z');
        expect(result).toBe(692)
    });
    test('test bad parameters calculateMinutes', () => {
        try {
            const result = utilities.calculateMinutes();
            expect(result).toBeUndefined()
        } catch (error) {
            expect(error).toBeDefined()
            expect(error.typeOutput).toBeDefined()
            expect(error.typeOutput).toBe(500)
            expect(error.output).toBeDefined()
            expect(error.output).toBe('Bad Parameters')
        }

    });
    test('test success calculeteTotalAmount', () => {
        const result = utilities.calculeteTotalAmount(34, 25);
        expect(result).toBe(42500)
    });
    test('test bad parameters calculeteTotalAmount', () => {
        try {

            const result = utilities.calculeteTotalAmount();
            expect(result).toBeUndefined()
        } catch (error) {
            expect(error).toBeDefined()
            expect(error.typeOutput).toBeDefined()
            expect(error.typeOutput).toBe(500)
            expect(error.output).toBeDefined()
            expect(error.output).toBe('Bad Parameters')
        }
    });
    test('test success buildOutput', () => {
        const result = utilities.buildOutput('buildOutput', 'test');
        expect(result).toBeDefined()
    });
})