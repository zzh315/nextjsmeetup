import { MongoClient } from "mongodb";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;

      // const { title, image, address, description } = data;

      const client = await MongoClient.connect(process.env.MONGO_URL);

      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      // console.log("api result", result);

      res.status(201).json({ message: "Meetup Inserted" });
      await client.close();
    }
  } catch (error) {
    console.log(error);
  }
}

export default handler;
