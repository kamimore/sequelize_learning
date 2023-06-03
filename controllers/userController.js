var { user:User } = require('../models/index')

var addUser = async (req, res) => {
  const jane = User.build({ firstName: "Jane" });
  console.log(jane instanceof User); // true
  console.log(jane.name); // "Jane"
  await jane.save();
  console.log(jane.toJSON());
  res.status(200).json(jane.toJSON());
};

module.exports = {
  addUser,
};
