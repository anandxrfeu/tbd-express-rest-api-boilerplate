import jwt from 'jsonwebtoken'

function generateToken(user) {
  const { _id, name, email, role } = user;
  const signature = process.env.JWT_SECRET;
  const expiration = "6h";

  return jwt.sign({ _id, email }, signature, {
    expiresIn: expiration,
  });
};

export default generateToken