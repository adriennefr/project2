'use strict'
const crypto = require('crypto');
​
export default {
  //
  // returns an object having keys 'hash' and 'salt'
  // store those with whatever other data you store
  // for a user
  //
  async create(password) {
    let salt = crypto.randomBytes(32).toString('hex');
​
    let rval = await this.hash(password, salt);
    return rval;
  },
  //
  // when the user gives you a password pass that password
  // as the first parameter and the hash and salt you
  // previously saved as the second and third parameters
  //
  // the function returns true of the user entered the
  // correct password
  //
  async verify(password, hashed, salt) {
    let hash = await this.hash(password, salt);
​
    return hashed === hash.hash;
  },
  async hash(password, salt) {
    return new Promise((resolve, reject) => {
      let hasher = crypto.createHmac('sha512', salt);
      let hash = hasher.update(password);
      let iterations = 25000;
​
      function doOne() {
        hash.update(password);
        if(iterations--) {
          process.nextTick(doOne);
        } else {
          resolve({
            salt: salt,
            hash: hash.digest('hex')
          });
        }
      }
      doOne();
    });
  }
}
