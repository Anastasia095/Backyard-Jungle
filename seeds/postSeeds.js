const {Post} = require("../models/post");

const userPost = [
    {
        title:"My Orchids Bloomed!",
        body: "Today, my orchids that I have been carefully tending to, finally bloomed. They are worth every second of waiting."
    },
    {
        title:"Jasmine in the Air",
        body: "In order to get your jasmine flowers to  have a strong smell, spritz them with some water so simulate morning dew. They will stay fragrant through the day"
    },
    {
        title:"Go to Nana's Nursery Today!",
        body: "If you live in Orlando, run to Nana's Nursery this week. They are selling mid-to full grown palm trees for less than $100. These gorgeous trees bring that tropical feel to your home"
    }
]

const seedPost = () => Post.bulkCreate(userPost);
module.exports = seedPost;