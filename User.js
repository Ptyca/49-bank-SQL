const Account = require('./Account');

const User = {};

User.create = async (connection, userFirstname, userLastname) => {
    //pridedam vartotoja
    const sql = 'INSERT INTO `users`\
                    (`firstname`, `lastname`)\
                VALUES\
                    ("' + userFirstname + '", "' + userLastname + '")';

    const [rows] = await connection.execute(sql);
    console.log(rows)
    let createAccount = await Account.create(connection, rows.insertId)
    return `${userFirstname} ${userLastname} sekmingai sukurtas!`



}
module.exports = User;