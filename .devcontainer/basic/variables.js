const accountId = 1223344
let accountEmail = "hehe@gmail.com"
var accountPassword = "122345"
accountcity = "Butwal"

//accountId = 2//
accountEmail = "hc@hc.com"
accountPassword = "2233322"
accountcity = "Manigram"

console.log("accountId");
/*
Prefer not to use var 
because of issude in block scope and functional scope
*/

 console.table([accountEmail, accountId, accountPassword, accountcity]);