
const Account = {};

Account.create = async (connection, user_id) => {
    //pridedam saskaita
    const sql = 'INSERT INTO `accounts`\
                    (`user_id`)\
                VALUES\
                    ("' + user_id + '")';

    const [rows] = await connection.execute(sql);
    return `Saskaita sekmingai sukurta!`



}
module.exports = Account;