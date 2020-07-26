import {counterParameter} from './01-parameterized-function';

describe('CounterParameter', () => {
    it('number should be zero if input is negative', () => {
    const counterParameter1=counterParameter(-1);
    expect(counterParameter1).toBe(0);
    expect(counterParameter1).toBeLessThanOrEqual(0);

    });

    xit("number should be a positive number",()=>{

        const cp=counterParameter(1);
        expect(cp).toBe(2);

    })

    // it('it shoo', () => {
    //     expect().toBe();
    // });
    
});
