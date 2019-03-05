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

function connectToDB(continuation) {
  connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    continuation();
  });
}

/* function insertNewAuctionItem(auctionItem, continuation) {
  return connection.query(
    "INSERT INTO auctions SET ?",
    {
      item_name: auctionItem.item,
      category: auctionItem.category,
      starting_bid: auctionItem.startingBid || 0,
      highest_bid: auctionItem.startingBid || 0
    },
    continuation
  );
} */

/* function updateItemBid(answer, chosenItem, continuation) {
  return connection.query(
    "UPDATE auctions SET ? WHERE ?",
    [
      {
        highest_bid: answer.bid
      },
      {
        id: chosenItem.id
      }
    ],
    continuation
  );
} */

function getBamazonItems(continuation) {
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    continuation(err, results);
  });
}

module.exports = {
  connectToDB: connectToDB,
  endConnection: endConnection,
  getBamazonItems: getBamazonItems//,
  //insertNewAuctionItem: insertNewAuctionItem,
  //updateItemBid: updateItemBid
};
