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

    //



}

app.init();

module.exports = app;