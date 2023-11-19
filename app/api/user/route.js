import clientPromise from "../../../lib/mongodb";

export async function GET(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("eventler");
    
    const events = await db.collection("events").find({}).toArray();
    return Response.json(events);
  } catch(e) {
    console.error(e);
    throw new Error(e).message;
  }
}
