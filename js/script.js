var spoonsToCups = function(tablespoonsP) {
  return (tablespoonsP / 16);
};

var tablespoons = parseInt(prompt("How many tablespoons do you want to convert?"));

var result = spoonsToCups(tablespoons);
alert("Is " + result + " cups.");
