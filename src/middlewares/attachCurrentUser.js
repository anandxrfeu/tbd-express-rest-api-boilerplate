import User from '../models/User.model.js'

const attachCurrentUser = async (req, res, next) => {
  try {
    const loggedInUser = req.auth;
    const user = await User.findOne(
      { _id: loggedInUser._id },
      { password: 0, __v: 0 } 
    );
    if (!user) {
      return res.status(400).json({ msg: "User does not exist." });
    }
    req.currentUser = user;
    return next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
};

export default attachCurrentUser