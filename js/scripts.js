function Pizza (size, toppings){
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  let sum = 0;
  if(this.size === 1) {
    sum += 8;
  } else if(this.size === 2) {
    sum += 10;
  } else {
    sum += 12;
  }

  for(let i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === 1 || this.toppings[i] === 2 || this.toppings[i] === 3 || this.toppings[i] === 4) {
      sum += 3;
    } else if(this.toppings[i] === 11) {
      sum += 2;
    } else {
      sum += 1;
    }
  } 
  return sum;
}


$(document).ready(function(){
  let toppings = [];
  let pizzaSize = 0;

  $(".radio").click(function(event){
    event.preventDefault();
    pizzaSize = parseInt($("input:radio[name=size]:checked").val());
    console.log("size 2 : " + pizzaSize);
  });

  $("#toppings-selector").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=toppings]:checked").each(function(){
      let checkboxValue = $(this).val();
      toppings.push(checkboxValue);
    })
  })

  // Create a new order
  let order1 = new Pizza(pizzaSize, toppings);
  console.log(order1);
  console.log("from bottom: " + pizzaSize); 

})
  

