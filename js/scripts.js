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

let order1 = new Pizza(2, [1, 4, 7, 8, 9, 11]);

$(document).ready(function(){

  $("#size-selector").submit(function(event){
    event.preventDefault();
    let pizzaSize = parseInt($("input:radio[name=size]:checked").val());
  });

  $("#toppings-selector").submit(function(event){
    event.preventDefault();
    let toppings = [];
    $("input:[name='toppings']:checked").each(function(){
      toppings.push(parseInt(this.value));
    });

    // toppings.push(parseInt(checkbox.value));

    console.log(checkbox.value);
  })
  

})

  
  