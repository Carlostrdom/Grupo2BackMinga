import "dotenv/config.js"
import '../../config/database.js'
import '../User.js'
import Company from '../Company.js'

const mangaCompanies = [
    {
      name: "Shonen Jump",
      website: "https://www.shonenjump.com",
      description: "One of the most iconic Shonen manga publishers, responsible for titles such as Dragon Ball, Naruto and One Piece.",
      photo: "https://i.pravatar.cc/150?img=22",
      user_id: "674927a078ed0bf770162211",
      active: true,
    },
    {
      name: "Kodansha Comics",
      website: "https://www.kodanshacomics.com",
      description: "Japanese publisher known for publishing popular works such as Attack on Titan and Fairy Tail.s",
      photo: "https://i.pravatar.cc/150?img=15",
      user_id: "674927a078ed0bf770162213",
      active: true,
    },
    {
      name: "VIZ Media",
      website: "https://www.viz.com",
      description: "One of the main distributors of manga and anime in English, with titles such as My Hero Academia and Death Note.",
      photo: "https://i.pravatar.cc/150?img=12",
      user_id: "674927a078ed0bf77016220b",
      active: true,
    },
    {
      name: "Square Enix Manga",
      website: "https://www.square-enix-manga.com",
      description: "Publisher specialized in mangas such as Fullmetal Alchemist and Soul Eater.",
      photo: "https://i.pravatar.cc/150?img=10",
      user_id: "674927a078ed0bf77016220d",
      active: true,
    },
    {
      name: "Dark Horse Comics",
      website: "https://www.darkhorse.com",
      description: "Known for bringing mangas like Berserk and Hellsing to the Western market.",
      photo: "https://i.pravatar.cc/150?img=1",
      user_id: "674927a078ed0bf770162210",
      active: true,
    },
  ];

  Company.insertMany(mangaCompanies)
  

  