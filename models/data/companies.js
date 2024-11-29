import "dotenv/config.js"
import '../../config/database.js'
import '../User.js'
import Company from '../Company.js'

const mangaCompanies = [
    {
      name: "Shonen Jump",
      website: "https://www.shonenjump.com",
      description: "Una de las editoriales más icónicas de mangas Shonen, responsable de títulos como Dragon Ball, Naruto y One Piece.",
      photo: "https://i.pravatar.cc/150?img=22",
      user_id: "674927a078ed0bf770162211",
      active: true,
    },
    {
      name: "Kodansha Comics",
      website: "https://www.kodanshacomics.com",
      description: "Editorial japonesa conocida por publicar obras populares como Attack on Titan y Fairy Tail.",
      photo: "https://i.pravatar.cc/150?img=15",
      user_id: "674927a078ed0bf770162213",
      active: true,
    },
    {
      name: "VIZ Media",
      website: "https://www.viz.com",
      description: "Una de las principales distribuidoras de manga y anime en inglés, con títulos como My Hero Academia y Death Note.",
      photo: "https://i.pravatar.cc/150?img=12",
      user_id: "674927a078ed0bf77016220b",
      active: true,
    },
    {
      name: "Square Enix Manga",
      website: "https://www.square-enix-manga.com",
      description: "Editorial especializada en mangas como Fullmetal Alchemist y Soul Eater.",
      photo: "https://i.pravatar.cc/150?img=10",
      user_id: "674927a078ed0bf77016220d",
      active: true,
    },
    {
      name: "Dark Horse Comics",
      website: "https://www.darkhorse.com",
      description: "Conocida por traer mangas como Berserk y Hellsing al mercado occidental.",
      photo: "https://i.pravatar.cc/150?img=1",
      user_id: "674927a078ed0bf770162210",
      active: true,
    },
  ];

  Company.insertMany(mangaCompanies)
  

  