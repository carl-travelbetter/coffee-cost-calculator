let alternatives = [];

fetch('alternatives.json')
 .then(response => response.json())
 .then(data => {
     alternatives = data;
     console.log("Spending Alternatives Loaded ", alternatives);
 })
 .catch(error => console.error("Could not load spending alternatives ", error); 

function calculateCoffeeCost()
{
  console.log("Calculating Coffee Habit Cost");
  let coffees = document.getElementById("coffees").value;
  console.log("Coffees "+coffees);
  let days = document.getElementById("days").value;
  console.log("days "+days);
  let price = document.getElementById("price").value;
  let coffeeSpend = (price * days * coffees).toFixed(2);
  console.log("Coffee Spend "+coffeeSpend);
  let result = `You Spend £${coffeeSpend} on coffee per week`;
  document.getElementById("results").innerHTML = result;
    //savingEstimates(coffeeSpend);
}
