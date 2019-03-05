var inquirer = require("inquirer");
const mysql = require('mysql');

// create the connection information for the sql database
const mysqlConfiguration = {
  host: "127.0.0.1",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "1F5pn8A2",
  database: "bamazon"
};
 
const connection = mysql.createConnection(mysqlConfiguration);

function endConnection() {
  connection.end();
}

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });
  
  // function which prompts the user for what action they should take
  /* function start() {
    buyItem();
  } */

function start() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
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
                choiceArray.push(results[i].product_name);
              }
              return choiceArray;
            },
            message: "What item would you like to place a bid in?"
          },
          {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
          }
        ])
        .then(function(answer) {
          // get the information of the chosen item
          var chosenItem;
          for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === answer.choice) {
              chosenItem = results[i];
            }
          }
  
           // determine if bid was high enough
          if (chosenItem.stock_quantity >= parseInt(answer.quantity)) {
            // bid was high enough, so update db, let the user know, and start over
            
            var newStockQty = chosenItem.stock_quantity - answer.quantity;
            
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: newStockQty
                },
                {
                  item_id: chosenItem.item_id
                }
              ],
              function(error) {
                if (error) throw err;
                //console.log("Item Price: " + chosenItem.price);
                //console.log("QTY: " + answer.quantity);
                var orderTotal = answer.quantity * chosenItem.price;
                console.log("");
                console.log("Purchase successful!. Order total: " + orderTotal);
                console.log("");
                start();
              }
            );
          }
          else {
            // bid wasn't high enough, so apologize and start over
            console.log("");
            console.log("Insufficient quantity!");
            console.log("");
            start();
          }
        });
    });
  }