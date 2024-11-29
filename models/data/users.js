import 'dotenv/config.js'
import '../../config/database.js'   
import User from '../../models/User.js'
import bcryptjs from "bcryptjs"

const dataUsers = [
    {
      email: "user1@example.com",
      password: "Password123", 
      photo: "https://example.com/photos/user1.jpg",
      role: 0,
      online: true,
      time_stamps: new Date("2024-01-01T10:00:00Z"),
    },
    {
      email: "user2@example.com",
      password: "Password123",
      photo: "https://example.com/photos/user2.png",
      role: 2,
      online: false,
      time_stamps: new Date("2024-01-02T15:30:00Z"),
    },
    {
      email: "user3@example.com",
      password: "Password123",
      photo: null,
      role: 1,
      online: false,
      time_stamps: new Date(),
    },
    {
      email: "admin@example.com",
      password: "Password123",
      photo: "https://example.com/photos/admin.png",
      role: 0,
      online: true,
      time_stamps: new Date(),
    },
    {
      email: "guest@example.com",
      password: "Password123",
      photo: null,
      role: 2,
      online: false,
      time_stamps: new Date("2024-02-01T08:45:00Z"),
    },
    {
      email: "user4@example.com",
      password: "Password123",
      photo: "https://example.com/photos/user4.jpg",
      role: 2,
      online: true,
      time_stamps: new Date("2024-02-02T11:20:00Z"),
    },
    {
      email: "user5@example.com",
      password: "Password123",
      photo: null,
      role: 1,
      online: false,
      time_stamps: new Date(),
    },
    {
      email: "user6@example.com",
      password: "Password123",
      photo: "https://example.com/photos/user6.png",
      role: 1,
      online: true,
      time_stamps: new Date(),
    },
    {
      email: "user7@example.com",
      password: "Password123",
      photo: "https://example.com/photos/user7.jpg",
      role: 2,
      online: false,
      time_stamps: new Date("2024-02-03T10:00:00Z"),
    },
    {
      email: "Grupo2@example.com",
      password: "Password123",
      photo: "https://example.com/photos/user8.jpg",
      role: 3,
      online: true,
      time_stamps: new Date("2024-02-04T14:00:00Z"),
    },
  ];
  
  const encryptPassword = (password) => {
    let hashPassword = bcryptjs.hashSync(password,10)
    return hashPassword

}
    
let passwordUsers = dataUsers.map(newPassUser => ({...newPassUser, password: encryptPassword(newPassUser.password)}))

User.insertMany(passwordUsers)