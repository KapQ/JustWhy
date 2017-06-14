// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';
  var user = require('user');
  api.database = {
    id: random.special(),
    name:  user.name.findName(),
    phone: user.phone.phoneNumber("(###) ###-####"),
    email: user.email.findEmail(),
    address: {
        street: user.address.streetAddress(),
        city: user.address.city(),
        state: user.address.state(),
      }
  }
};
fetch("https://randomuser.me/api/")
.then(function(response){
  return response.json();
})
for (let i = 0; i < json.length)
.then(function(JSON){
  const street = user.address;
  const city = user.city;
  const state = user.state;
  const name = user.name;
  const phone = user.phone;
  const email = user.email;
  console.log(name);
  console.log(email);
  console.log(street);
  console.log(city);
  console.log(state);
  console.log(phone);
}
  // Your Code Goes Here

})();
