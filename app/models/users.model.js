module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.STRING
    }
  });

  return Users;
};
