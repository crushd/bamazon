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

    connection.query('SELECT * FROM products',function (err,results) {
            if (err) throw err;
            
            // once you have the items, prompt the user for which they'd like to bid on
            inquirer
            .prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function() {
                var choiceArray = [];
                for (var i = 0; i < results.length; i++) {
                    choiceArray.push(results[i].item_name);
                }
                return choiceArray;
                },
                message: "What product ID would you like to buy?"
            }])
            .then(function(answer) {
                console.log(answer);
            });

        });
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