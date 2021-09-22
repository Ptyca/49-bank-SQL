
const Account = {};

/**
 * Saskaitos vartotojui sukurimas
 * @param {Object} connection Objektas, su kuriuo kvieciame duombazes mainpuliavimo metodus.
 * @param {number} user_id Vartotojui priskirtas ID
 * @returns {Promise<string>} pranesima apie saskaitos statusa
 */
Account.create = async (connection, user_id) => {
    //pridedam saskaita
    const sql = 'INSERT INTO `accounts`\
                    (`user_id`)\
                VALUES\
                    ("' + user_id + '")';

    const [rows] = await connection.execute(sql);
    return `Saskaita sekmingai sukurta!`
}

/**
 * Inesa pinigus i nurodyta saskaita
 * @param {Object} connection Objektas, su kuriuo kvieciame duombazes mainpuliavimo metodus.
 * @param {number} account_id Vartotojo saskaitos ID
 * @param {number} amount pinigeliu sumele
 * @returns {Promise<string>} pranesimas apie inesta pinigeliu sumele
 */
Account.deposit = async (connection, account_id, amount) => {
    //pridedam pinigeliu i saskaitele
    const sql = 'UPDATE `accounts` SET balance = balance + ' + amount + '\
    WHERE id = ' + account_id;
    const [rows] = await connection.execute(sql);
    return `Saskaita sekmingai papildyta ${amount} pinigu!`
}


Account.withdraw = async (connection, account_id, amount) => {
    //isimam pinigelius is saskaiteles
    let balance = await Account.balance(connection, account_id);
    if (amount > balance) {
        return "atleisk, bet negalima i minusa"
    }
    const sql = 'UPDATE `accounts` SET balance = balance - ' + amount + '\
    WHERE id = ' + account_id;

    const [rows] = await connection.execute(sql);
    return `Saskaita palengvinta  ${amount} pinigu!`
}

/**
 * Supazindina su saskaitos balansu
 * @param {Object} connection Objektas, su kuriuo kvieciame duombazes mainpuliavimo metodus.
 * @param {number} account_id Vartotojo saskaitos ID
 * @returns {Promise<number>} Informacija apie saskaitos likuti
 */
Account.balance = async (connection, account_id) => {
    const sql = 'SELECT * FROM `accounts` \
    WHERE id = ' + account_id;
    const [rows] = await connection.execute(sql);
    return rows[0].balance;
}



module.exports = Account;