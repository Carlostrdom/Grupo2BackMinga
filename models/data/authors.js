import "dotenv/config.js"
import '../../config/database.js'
import '../User.js'
import Author from '../Author.js'

const authors = [
    {
      name: "John",
      last_name: "Doe",
      city: "New York",
      country: "United States",
      date: "2024-11-28",
      photo: "https://i.pravatar.cc/150?img=10",
      user_id: "674927a078ed0bf77016220a",
      active: true
    },
    {
      name: "Maria",
      last_name: "González",
      city: "Madrid",
      country: "Spain",
      date: "2024-11-28",
      photo: "https://i.pravatar.cc/150?img=1",
      user_id: "674927a078ed0bf77016220c",
      active: false
    },
    {
      name: "Akira",
      last_name: "Yamamoto",
      city: "Tokyo",
      country: "Japan",
      date: "2024-11-28",
      photo: "https://i.pravatar.cc/150?img=3",
      user_id: "674927a078ed0bf77016220e",
      active: true
    },
    {
      name: "Amina",
      last_name: "Hassan",
      city: "Cairo",
      country: "Egypt",
      date: "2024-11-28",
      photo: "https://i.pravatar.cc/150?img=6",
      user_id: "674927a078ed0bf77016220f",
      active: true
    },
    {
      name: "Liam",
      last_name: "O'Connor",
      city: "Dublin",
      country: "Ireland",
      date: "2024-11-28",
      photo: "https://i.pravatar.cc/150?img=7",
      user_id: "674927a078ed0bf770162211",
      active: false
    }
  ]

  Author.insertMany(authors)
  