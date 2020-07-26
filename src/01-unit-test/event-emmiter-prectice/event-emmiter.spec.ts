import { EventCounterComponent } from "./event-emmiter";

describe("EvenCounterComponent", () => {
  let eventCounterComponent: EventCounterComponent;

  beforeEach(function () {
    eventCounterComponent = new EventCounterComponent();
  });

  it("it should increment counter when event is fired", () => {
    let totalCounter = 0;
  
    eventCounterComponent.counterChanged.subscribe((counter) => {
        debugger
      totalCounter = counter;
      eventCounterComponent.incrementCounter();

      console.log(totalCounter)
      expect(totalCounter).toBe(0);

    });


  });
});
