import {DimensionCalculator} from './02-parameter-dimesion-function';

describe('DimensionCalculator', () => {
    it('it should equal to 100', () => {

        const dc=new DimensionCalculator();
        const area=dc.getArea(10,10);

        expect(area).toEqual(100)
        
    });
    
});