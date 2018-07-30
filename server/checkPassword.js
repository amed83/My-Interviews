const bcrypt = require('bcryptjs');


const checkPassword = (loginPassword,hashedPasswordFromDb) => {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(loginPassword, hashedPasswordFromDb, function(err, doesMatch) {
            if (err) {
                reject(err);
            } else {
                resolve(doesMatch);
            }
        });
    });
}


module.exports = checkPassword