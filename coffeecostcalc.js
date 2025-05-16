let alternatives = [];
let coffees = 0;
let days = 0;
let price = 0;
let coffeeSpend = 0;

fetch('alternatives.json')
 .then(response => response.json())
 .then(data => {
     alternatives = data;
     console.log("Spending Alternatives Loaded ", alternatives);
 })
 .catch(error => console.error("Could not load spending alternatives ", error)); 

function calculateCoffeeCost()
{
  console.log("Calculating Coffee Habit Cost");
  coffees = document.getElementById("coffees").value;
  console.log("Coffees "+coffees);
  days = document.getElementById("days").value;
  console.log("days "+days);
  price = document.getElementById("price").value;
  coffeeSpend = (price * days * coffees).toFixed(2);
  console.log("Coffee Spend "+coffeeSpend);
  let result = `You Spend <strong> £${coffeeSpend} </strong> on coffee per week`;
  document.getElementById("results").innerHTML = result;
    //savingEstimates(coffeeSpend);

 //create a results card
 const results = document.getElementById("results");
 const resultCard = document.createElement("div");
 resultCard.className = "resultCard";
 const calc = document.createElement("p");
 calc.textContent = result;
 resultCard.appendChild(calc);
 results.appendChild(resultCard);
 calcAlternatives();
}

functional calcAlternatives()
{
   const alternatives = document.getElementById("alternatives");
   if (coffees > 1)
   {
    console.log("More than 1 coffee per day");
    const altCards = document.createElement("div");
    altCards.className = "resultCard";
    const output = document.createElement("p");
    output.textContent = "You can save...";
    altCards.appendChild(output);
    alternatives.appendChild(altCards);
   }
   else
   {
    console.log("One or fewer coffees per day");
    alternatives.innerHTML = "Your coffee spending isn't so bad...enjoy your cup of joe.";
   }
}

