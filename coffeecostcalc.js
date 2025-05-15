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
  document.getElementById("result").innerHTML = result;
    //savingEstimates(coffeeSpend);
}
