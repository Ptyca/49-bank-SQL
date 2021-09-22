const Account = require('./Account');
const User = require('./User');
const db = require('./db');


const app = {}

app.init = async () => {
    // prisijungti prie duomenu bazes
    const conn = await db.init({
        host: 'localhost',
        user: 'root',
        database: 'bank',
    });


    // LOGIC BELOW
    //kuriam vartotoja:
    let createUser = await User.create(conn, 'Samuelis', 'Varle');
    console.log(createUser);
    console.log('');
    let createUser2 = await User.create(conn, 'Kevinas', 'Lasinys');
    console.log(createUser2);
    console.log('');
    let createUser3 = await User.create(conn, 'Samana', 'Krutine');
    console.log(createUser3);
    console.log('');
    let createUser4 = await User.create(conn, 'Bestija', 'Lauk');
    console.log(createUser4);
    console.log('');

    //kuriam saskaita:
    let createAccount = await Account.create(conn, 1);
    console.log(createAccount);
    console.log('');
    let createAccount2 = await Account.create(conn, 2);
    console.log(createAccount2);
    console.log('');
    let createAccount3 = await Account.create(conn, 2);
    console.log(createAccount3);
    console.log('');


    //depozitinam PINIGUUU
    let accountDeposit = await Account.deposit(conn, 1, 50);
    console.log(accountDeposit);
    console.log('');

    let accountDeposit1 = await Account.deposit(conn, 3, 84);
    console.log(accountDeposit1);
    console.log('');

    let accountDeposit2 = await Account.deposit(conn, 3, 16.25);
    console.log(accountDeposit2);
    console.log('');

    //Isimam pinigelius is saskaitytes
    let accountWithdraw1 = await Account.withdraw(conn, 3, 16.25);
    console.log(accountWithdraw1);
    console.log('');

    let accountWithdraw2 = await Account.withdraw(conn, 3, 110);
    console.log(accountWithdraw2);
    console.log('');

    let accountbalance1 = await Account.balance(conn, 3);
    console.log(accountbalance1);
    console.log('');
}

app.init();

module.exports = app;