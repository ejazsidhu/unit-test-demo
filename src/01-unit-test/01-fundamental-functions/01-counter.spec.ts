import {CounterComponent  } from "./01-counter";

describe('CounterComponent', () => {

    it('number should be greater than zero', () => {
    let counterComponent:CounterComponent=new CounterComponent();

        const currentCounterValue=counterComponent.increaseCounter();
        expect(currentCounterValue).toBeGreaterThan(0);
    });
    it('number should be equal to zero', () => {
    let counterComponent:CounterComponent=new CounterComponent();

    const counterValueDecrease=counterComponent.decreaseCounter();

        expect(counterValueDecrease).toEqual(-1);
        
    });
    
    

});
