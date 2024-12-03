import 'dotenv/config.js'
import '../../config/database.js'
import '../../models/Manga.js';
import '../../models/Author.js';
import '../../models/Company.js';
import Reaction from '../../models/Reacction.js';

const reactionsData = [
    {
      manga_id: "674d194042af858e12949cbf",
      author_id: "67492e87dae0b012dfb7e4d6",
      company_id: "674938b0531bbe4712875bac",
      reaction: 'like',
    },
    {
      manga_id: "674d194142af858e12949cd9",
      author_id: "67492e87dae0b012dfb7e4d6",
      company_id: "674938b0531bbe4712875bac",
      reaction: 'love',
    },
    {
      manga_id: "674d194242af858e12949cef",
      author_id: "67492e87dae0b012dfb7e4d5",
      reaction: 'wow',
    },
    {
      manga_id: "674d194442af858e12949d07",
      reaction: 'dislike',
    },
  ];

  Reaction.insertMany(reactionsData)
  .then(() => {
    console.log('reacctions seeded successfully');
  })
  .catch((error) => {
    console.error('Error seeding reacctions:', error);
  });