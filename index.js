//set-up variables and calculate remainder of denominations 

var button = document.getElementById('calculateChange');
button.onclick = function() {
    var due = document.getElementById('amountDueForSale').value;
    var given = document.getElementById('customerPaid').value;
    var change = given - due;
    var output = document.getElementById('change');
    output.innerHTML = "$" + change.toFixed(2);

    //inserting new variables to output and calculate amounts
    var dollars = parseInt(change / 1);
    var answerDollars = change % 1;

    var quarters = parseInt(answerDollars / .25);
    var answerQuarters = Math.round((answerDollars * 100) % 25) / 100;

    var dimes = parseInt(answerQuarters / 0.10);
    var answerDimes = Math.round((answerQuarters * 100) % 10) / 100;

    var nickels = parseInt(answerDimes / 0.05);
    var answerNickels = Math.round((answerDimes * 100) % 5) / 100;

    var pennies = Math.round(answerNickels / .01);

    var ansDollars = document.getElementById('dollarsRemain');
    ansDollars.innerHTML = dollars;
    var ansQuarters = document.getElementById('quartersRemain');
    ansQuarters.innerHTML = quarters;
    var ansDimes = document.getElementById('dimesRemain');
    ansDimes.innerHTML = dimes;
    var ansNickels = document.getElementById('nickelsRemain');
    ansNickels.innerHTML = nickels;
    var ansPennies = document.getElementById('penniesRemain');
    ansPennies.innerHTML = pennies;


}
