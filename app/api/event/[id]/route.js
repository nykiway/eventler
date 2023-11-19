import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";

export async function GET(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("eventler");

    const UrlParams = req?.url.split("/");
    const ID = new ObjectId(UrlParams?.[UrlParams.length - 1]);


    console.log("REQUEST QUERY", ID)
    
    const event = await db.collection("events").find({"_id": ID}).toArray();
    return Response.json(event);
  } catch(e) {
    console.error(e);
    throw new Error(e).message;
  }
}
