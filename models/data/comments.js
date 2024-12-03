import 'dotenv/config.js';
import '../../config/database.js'
import '../../models/Chapter.js'
import '../../models/Author.js'
import '../../models/Company.js'
import Comment from '../../models/Comment.js'  



const comments = [
    {
      chapter_id: "674d194042af858e12949cc5",
      author_id:"67492e87dae0b012dfb7e4d5",
      company_id:"674938b0531bbe4712875bac",
      message: "Amazing chapter! Can't wait for the next one.",
    },
    {
      chapter_id: "674d194042af858e12949cc5",
      author_id:"67492e87dae0b012dfb7e4d5",
      company_id:"674938b0531bbe4712875bac",
      message: "The artwork in this chapter was stunning!",
    },
    {
      chapter_id: "674d194042af858e12949cc1",
      author_id: "67492e87dae0b012dfb7e4d4",
      company_id:"674938b0531bbe4712875bac",
      message: "Great collaboration! This chapter truly stands out.",
    },
    {
      chapter_id: "674d194042af858e12949cc1",
      author_id: "67492e87dae0b012dfb7e4d4",
      company_id:"674938b0531bbe4712875bac",
      message: "Loved the storyline in this chapter!",
    },
    {
      chapter_id: "674d194042af858e12949cc3",
      author_id: "67492e87dae0b012dfb7e4d3",
      company_id:"674938b0531bbe4712875bac",
      message: "This chapter had everything—action, drama, and suspense!",
    },
  ];
  
  Comment.insertMany(comments)
    .then(() => {
      console.log("Comments seeded successfully.");
    })
    .catch((error) => {
      console.error("Error seeding comments:", error);
    });