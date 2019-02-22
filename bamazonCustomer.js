var mysql = require('mysql');
var inquirer = require('inquirer');

const mysqlConfig = {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "1F5pn8A2",
    database: "bamazon"
};

const connection = mysql.createConnection(mysqlConfig);

//START APPLICATION
function start() {
    
    // Show a list of products
    showAllProducts();

    // Ask the customer for the id of the product they want to buy
    //whatItem();

}

function showAllProducts() {

    connection.query(
        'SELECT * FROM products',
        function (error,result) {
            if (error) {
                console.log(error);
            } else {
                //console.log(result);
                let dataArr = result;
                for (let i=0; i < dataArr.length; i++) {
                    console.log("ID: " + dataArr[i].item_id + "; Name: " + dataArr[i].product_name + "; Department: " + dataArr[i].department_name + "; Price: " + dataArr[i].price);
                }

            }
            
            connection.end();
        }
    )

}

function whatItem() {

    inquirer.prompt([
        {
            type: "input",
            message: "Type the item ID of the product would you like to buy?\r\n",
            name: "item"
        }
    ]).then(function(whatItemResponse) {

        // ask them how many they want to buy
        howManyItems(whatItemResponse.item);

    })

}

function howManyItems(item_id) {

    inquirer.prompt([
        {
            type: "input",
            message: "How many of "+ item_id + " would you like to buy?",
            name: "quantity"
        }
    ]).then(function(howManyResponse) {

        // do some things.
        console.log("Do some things.");

    })

}






start();