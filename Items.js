function buyItems() {
    let responseProduct = prompt("We are selling,\n1.Bread\n2.Sugar\n3.Rice\n4.Milk\n.\Enter the number of the product you would like to buy", "");

    let amount = prompt("Enter the amount you have");

    if (responseProduct == "1") {
        if (amount == 15) {
            alert("Get the bread you have enough money");
        } else if (amount > 15) {
            alert("Get the bread you have enough money.Your change is R" + (parseInt(amount) - 15));
        } else {
            alert("You cant the bread.Your money is short with R" + (15 - parseInt(amount)));
        }
    } else if (responseProduct == "2") {
        if (amount == 30) {
            alert("Get the sugar you have enough money");
        } else if (amount > 30) {
            alert("Get the sugar you have enough money.Your change is R" + (parseInt(amount) - 30));
        } else {
            alert("You cant the sugar.Your money is short is R" + (15 - parseInt(amount)));
        }
    } else if (responseProduct == "3") {
        if (amount == 50) {
            alert("Get the Rice you have enough money");
        } else if (amount > 30) {
            alert("Get the Rice you have enough money.Your change is R" + (parseInt(amount) - 50));
        } else {
            alert("You cant buy the sugar.Your money is short is R" + (50 - parseInt(amount)));
        }
    } else if (responseProduct == "4") {
        if (amount == 40) {
            alert("Get the Milk you have enough money");
        } else if (amount > 40) {
            alert("Get the Milk you have enough money.Your change is R" + (parseInt(amount) - 50));
        } else {
            alert("You cant buy the sugar.Your money is short R" + (40 - parseInt(amount)));
        }

    } else {
        alert("Sorry you have selected invalid number!")
    }

}
buyItems();