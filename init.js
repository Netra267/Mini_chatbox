const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
    console.log("Connection successful");
    })
    .catch(err => console.log(err));

async function main() { //copied from mongoosejs.com- quick ctart
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
      
let allChats = [
    {
        from: "neha",
        to: "preeti",
        msg: "Hi there, I am preeti",
        create_at: new Date(),
    },
    {
        from: "sneha",
        to: "priya",
        msg: "Send me your exam sheets",
        create_at: new Date(),   
    },
    {
        from: "anu",
        to: "aishu",
        msg: "Collect my exam paper",
        create_at: new Date(),   
    },
    {
        from: "peetu",
        to: "menu",
        msg: "I have to do m work yet..",
        create_at: new Date(),   
    },
    {
        from: "kajol",
        to: "alia",
        msg: "I am ok this this time for interview",
        create_at: new Date(),   
    },
    {
        from: "nayana",
        to: "tejal",
        msg: "My marks are out and I have scored pretty good",
        create_at: new Date(),   
    },
]

Chat.insertMany(allChats);