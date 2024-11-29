import 'dotenv/config.js'
import '../../config/database.js'   
import User from '../../models/User.js'
import bcryptjs from "bcryptjs"

const dataUsers = [
    {
      email: "user1@example.com",
      password: "Password123", 
      photo:"https://i.pravatar.cc/150?img=10",
      role: 0,
      online: false,
      
    },
    {
      email: "user2@example.com",
      password: "Password123",
      photo:"https://i.pravatar.cc/150?img=9",
      role: 2,
      online: false,
      
    },
    {
      email: "user3@example.com",
      password: "Password123",
      photo:"https://i.pravatar.cc/150?img=8",
      role: 1,
      online: false,
      
    },
    {
      email: "admin@example.com",
      password: "Password123",
      photo:"https://i.pravatar.cc/150?img=7",
      role: 0,
      online: false,
      
    },
    {
      email: "guest@example.com",
      password: "Password123",
      photo:"https://i.pravatar.cc/150?img=6",
      role: 2,
      online: false,
      
    },
    {
      email: "user4@example.com",
      password: "Password123",
      photo:"https://i.pravatar.cc/150?img=5",
      role: 2,
      online: false,
      
    },
    {
      email: "user5@example.com",
      password: "Password123",
      photo:"https://i.pravatar.cc/150?img=4",
      role: 1,
      online: false,
      
    },
    {
      email: "user6@example.com",
      password: "Password123",
      photo:"https://i.pravatar.cc/150?img=3",
      role: 1,
      online: false,
      
    },
    {
      email: "user7@example.com",
      password: "Password123",
      photo:"https://i.pravatar.cc/150?img=2",
      role: 2,
      online: false,
      
    },
    {
      email: "Grupo2@example.com",
      password: "Password123",
      photo:"https://i.pravatar.cc/150?img=1",
      role: 3,
      online: false,
      
    },
  ];

  const encryptPassword = (password) => {
    let hashPassword = bcryptjs.hashSync(password,10)
    return hashPassword

}
    
let passwordUsers = dataUsers.map(newPassUser => ({...newPassUser, password: encryptPassword(newPassUser.password)}))

User.insertMany(passwordUsers)