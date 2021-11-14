export const getProfile = async (req, res) => {
    // res.status(200).send(decoded);
    // Search the Info base on the ID
    // const user = await User.findById(decoded.id, { password: 0});
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
      return res.status(404).send("No user found.");
    }
    res.status(200).json(user);
  };
  