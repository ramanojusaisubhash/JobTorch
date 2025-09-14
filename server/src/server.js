import dotenv from "dotenv";
dotenv.config(); // automatically loads from server/.env

import app from "./app.js";
import connectDB from "./config/db.js";

console.log("MONGO_URI from env:", process.env.MONGO_URI);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
