
 class Pizza {
  constructor(){
    this.type = "Cheese Pizza";
    this.type = "orginal";
  }
  cook(){
    console.log(`Cooking Pizza Type: ${this.type}`);
  }
 }

 console.log("Hello how are you doing?");
 const myPizza1 = new Pizza();
myPizza1.cook();