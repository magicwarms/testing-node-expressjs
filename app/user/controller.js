const users = require("../data");

module.exports = {
  // get all users
  getAllUsers: async (req, res) => {
    try {
      res.status(200).json({
        message: "All the users",
        users,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // get single User
  findUser: async (req, res) => {
    const { id } = req.params;
    try {
      const findUser = users.find((user) => user.id === parseInt(id));
      if (findUser) {
        return res.status(200).json({
          message: "A single User",
          user: findUser,
        });
      }
      return res.status(404).json({
        message: "User not found",
        user: null,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
