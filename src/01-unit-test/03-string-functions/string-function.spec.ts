import {greeting} from './string-function';

xdescribe("Greeting Ejaz",()=>{
    it("it should contain Ejaz",()=>{
        expect(greeting('Ejaz')).toContain("Welcome Ejaz");
    })
});