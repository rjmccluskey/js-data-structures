const LinkedList = require('./linked-list');

describe('LinkedList', () => {
    it('can peak at the last value added', () => {
        const list = new LinkedList(1, 2, 3);
        expect(list.peak()).toBe(3);
    });

    it('can get the index of a value', () => {
        const list = new LinkedList('oh', 'hello', 'there');
        expect(list.indexOf('hello')).toBe(1);
    });

    it('returns -1 when getting the index of a value not in the list', () => {
        const list = new LinkedList(1, 2, 3);
        expect(list.indexOf('hello')).toBe(-1);
    });

    it('can add a new item to the list', () => {
        const list = new LinkedList(1, 2, 3);
        list.add(':)');
        expect(list.peak()).toBe(':)');
    });

    it('can pop the last value out of the list', () => {
        const list = new LinkedList(1, 2, 3);
        const lastValue = list.pop();
        expect(lastValue).toBe(3);
        expect(list.peak()).toBe(2);
    });

    it('can iterate through the list', () => {
        const list = new LinkedList('there', 'hello ', 'oh ');
        let message = '';
        list.forEach(item => {
            message += item;
        });
        expect(message).toBe('oh hello there');
    });
});