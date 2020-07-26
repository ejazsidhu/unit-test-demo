export class  CounterComponent{
    public counter:number =0;

    public increaseCounter(){
        this.counter++;
        return this.counter;

    }
    public decreaseCounter(){
        this.counter--;
        return this.counter;

    }
}