const users = require("../data");

module.exports = {
  // get all users
  getAllUsers: async (req, res) => {
    try {
      res.status(200).json({
        success: true,
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
      if (!findUser) {
        return res.status(404).json({
          success: true,
          message: "User not found",
          user: null,
        });
      }
      return res.status(200).json({
        success: true,
        message: "A single User",
        user: findUser,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
