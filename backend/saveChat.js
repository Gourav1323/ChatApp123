const mongoose = require("mongoose");
const Chat = require("./models/chatModals"); // Adjust the path as necessary
const MONGO_URL = "mongodb://127.0.0.1:27017/ChatApp123";

//  async function data() {
//   try {
//     await mongoose.connect(MONGO_URL);
//     console.log("CONNECTION OPEN to mongoose");
//   }
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("MongoDB connected");
    const chats = [
      {
        isGroupChat: false,
        users: [
          {
            name: "John Doe",
            email: "john@example.com",
          },
          {
            name: "Piyush",
            email: "piyush@example.com",
          },
        ],
        _id: "617a077e18c25468bc7c4dd4",
        chatName: "John Doe",
      },
      {
        isGroupChat: false,
        users: [
          {
            name: "Guest User",
            email: "guest@example.com",
          },
          {
            name: "Piyush",
            email: "piyush@example.com",
          },
        ],
        _id: "617a077e18c25468b27c4dd4",
        chatName: "Guest User",
      },
      {
        isGroupChat: false,
        users: [
          {
            name: "Anthony",
            email: "anthony@example.com",
          },
          {
            name: "Piyush",
            email: "piyush@example.com",
          },
        ],
        _id: "617a077e18c2d468bc7c4dd4",
        chatName: "Anthony",
      },
      {
        isGroupChat: true,
        users: [
          {
            name: "John Doe",
            email: "jon@example.com",
          },
          {
            name: "Piyush",
            email: "piyush@example.com",
          },
          {
            name: "Guest User",
            email: "guest@example.com",
          },
        ],
        _id: "617a518c4081150716472c78",
        chatName: "Friends",
        groupAdmin: {
          name: "Guest User",
          email: "guest@example.com",
        },
      },
      {
        isGroupChat: false,
        users: [
          {
            name: "Jane Doe",
            email: "jane@example.com",
          },
          {
            name: "Piyush",
            email: "piyush@example.com",
          },
        ],
        _id: "617a077e18c25468bc7cfdd4",
        chatName: "Jane Doe",
      },
      {
        isGroupChat: true,
        users: [
          {
            name: "John Doe",
            email: "jon@example.com",
          },
          {
            name: "Piyush",
            email: "piyush@example.com",
          },
          {
            name: "Guest User",
            email: "guest@example.com",
          },
        ],
        _id: "617a518c4081150016472c78",
        chatName: "Chill Zone",
        groupAdmin: {
          name: "Guest User",
          email: "guest@example.com",
        },
      },
    ];

    try {
      await Chat.insertMany(chats);
      console.log("Chats saved to database");
    } catch (error) {
      console.error("Error saving chats:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
