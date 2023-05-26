import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ehab Reda",
    email: "ehab@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Johny",
    email: "johny@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
