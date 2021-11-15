function Pizza (size, toppings){
  this.toppings = toppings;
  this.size = size;
  this.cost = this.cost();
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
  $("form#selector").submit(function(event){  
    event.preventDefault();
    $("#display-cost").hide();
    let pizzaSize;
    let toppings = [];

    $("input").on("click", function(){
      $("#output").hide();
      $("#display-cost").hide();
    })
    
    if ($("input:checkbox[name=toppings]:checked").filter(':checked').length > 0){
      $("input:checkbox[name=toppings]:checked").each(function(){
        let checkboxValue = $(this).val();
        toppings.push(parseInt(checkboxValue));
      });
    } else {
      $("#output").text("Please make a selection!").show();
      $("form").trigger('reset');
    }
    
    if ($("input:radio[name=size]:checked").length > 0){  
      pizzaSize = (parseInt($("input:radio[name=size]:checked").val()));
    } else {
      $("#output").text("Please make a selection!").show();
      $("form").trigger('reset');
    }
    
    if (pizzaSize > 0 && toppings.length > 0) {
      let order1 = new Pizza(pizzaSize, toppings); 
      $("#display-cost").text("The total of your order is $" + order1.cost).show();
      $("form").trigger('reset');
    }
  });
})






  

