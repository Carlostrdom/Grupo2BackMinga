import 'dotenv/config.js'
import '../../config/database.js'
import '../../models/Autor.js'
import '../../models/Company.js'
import '../../models/Category.js' 
import Manga from '../../models/Manga.js'

const mangasData = [
    {
      author_id: "67492e87dae0b012dfb7e4d2", 
      company_id: "6482f42bcd9a8c0012e5f850",
      title: "Gantz",
      cover_photo: "https://i.postimg.cc/26z0Z0yQ/YHEVOBAXLFF4-FC55-L2-HJ2-JPS4-E.jpg",
      description:
        "This is a sci-fi action story that follows a group of people who have been brought back to life by a mysterious sphere called Gantz and forced to participate in dangerous missions against strange and dangerous creatures. It all starts when the protagonist, Kei Kurono, is killed in an accident and is revived by Gantz along with other people who have recently died. As they fight to survive and complete Gantz´s missions, Kei and his companions discover that there is much more at stake than just their own lives.",
      category_id: "67494d5d6d4c289c18a0fddf", // category Seinen
    },
    {
      author_id: "67492e87dae0b012dfb7e4d3",
      company_id: "674938b0531bbe4712875ba8",
      title: "Alice in Borderland",
      cover_photo: "https://i.postimg.cc/PqQHYqrL/main-alice-in-borderland.jpg",
      description:
        "Arisu Ryouhei will be leaving high school soon, but he tries to avoid thinking about his future. One night, when he is with his partner Karube and his friend Chouta, they see some fireworks. After a blinding explosion, they wake up in another world, called Borderland. Here people are forced to participate in violent games, where the participants must fight to survive. Will Arisu, Karube and Chouta be able to survive in this dangerous new world and find their way back to their true world?",
        
      category_id: "67494d5d6d4c289c18a0fde0",// Shōnen
    },
    {
      author_id: "67492e87dae0b012dfb7e4d4",
      company_id: "674938b0531bbe4712875baa", 
      title: "Ao Haru Ride",
      cover_photo: "https://i.postimg.cc/ydWYPLCC/ao-haru-ride-752359695-large.jpg",
      description:
        "Futaba Yoshioka, a high school girl, tries to reinvent herself after a bad experience in her past. When she meets Kou Mabuchi, her first love, she discovers that they have both changed, but her feelings remain.",
      category_id: "67494d5d6d4c289c18a0fde1", //Shōjo
    },
    {
      author_id: "67492e87dae0b012dfb7e4d5",
      company_id: "674938b0531bbe4712875bab",
      title: "Pokemon",
      cover_photo: "https://i.postimg.cc/3xPP69GH/201-2011893-pokmon-adventures-special-pokemon-adventures-book-volume-3.jpg",
      description:
        "Ash Ketchum, a young trainer, travels the world with his Pikachu and friends to become a Pokémon Master, facing challenges and capturing incredible creatures called Pokémon.",
      category_id: "67494d5d6d4c289c18a0fde2",//Kodomo
    },
  ];
  

Manga.insertMany(mangasData)