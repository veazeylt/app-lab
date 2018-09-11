//CoffeeTawk - by Louis Veazey - applab, lab 1, 2018

//Challenge 1
//The lines are long
//can take up to a minute or more to order
//takes another 5 minutes for them to leave with the beverage
//payment is quick
//most people use Alipay or WeChat pay
//order-taking process is slow
//baristas are fast
//they struggle to keep up with making drinks and answering questions
//most people know what they want before they walk in
//still a lot of people just stand at the register asking questions

//Challenge 2
//1. during peak hours, count number of people in line every minute
//2. track every fifth customer on how long they take to order and leave with their beverage
//3. track each barista on how long they are occupied with customers who take more than 30 seconds to order
//4. count how many customers take longer than 30 seconds to order

//Challenge 3
/*1.
IF time of day is between 0800 and 1000
    IF 60 seconds have past
        THEN count number of people in line
ELSE do nothing
*/

/*2.
FOR customer x+5
    IF at counter start counting seconds
    ELSE IF still in store waiting keep counting seconds
    ELSE stop counting
*/

/*3.
IF barista is at counter taking orders
    IF barista is at counter >30 seconds
    THEN count seconds until done with customer
ELSE do nothing
*/

/*4.
IF customer is at counter longer than 30 seconds
    THEN +1 to var "long customer"
ELSE do nothing