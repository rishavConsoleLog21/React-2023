import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://consolelog21:ziHpmgA3tNriGNYL@novereact-app.3fehbac.mongodb.net/?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
      res.status(201).json({ message: "Meetup inserted!" });

      client.close();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to insert meetup." });
    }
  }
}

export default handler;
