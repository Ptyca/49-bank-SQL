const Account = require('./Account');

const User = {};

User.create = async (connection, userFirstname, userLastname) => {
    //pridedam vartotoja
    const sql = 'INSERT INTO `users`\
                    (`id`, `firstname`, `lastname`)\
                VALUES\
                    (NULL, "' + userFirstname + '", "' + userLastname + '")';

    const [rows] = await connection.execute(sql);
    return `${userFirstname} ${userLastname} sekmingai sukurtas!`



}
module.exports = User;