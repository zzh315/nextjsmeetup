require("dotenv").config();
import { MongoClient } from "mongodb";

async function handler(req, res) {
  try {
    if (req.method === " POST") {
      const data = req.body;

      // const { title, image, address, description } = data;

      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log(result);

      res.status(201).json({ message: "Meetup Inserted" });
    }
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export default handler;
