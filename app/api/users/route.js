import clientPromise from "../../../lib/mongodb";

export async function GET(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("eventler");
    
    const allUsers = await db.collection("users").find({}).toArray();
    return Response.json(allUsers);
  } catch(e) {
    console.error(e);
    throw new Error(e).message;
  }
}


// export default async function GET(req, res) {
//   const client = await clientPromise;
//   const db = client.db("eventler");
//   const allUsers = await db.collection("users").find({}).toArray();
//   return JSON.stringify({status: 200, data: allUsers})
//   // res.json({ status: 200, data: allUsers });
// }


    // case "POST":
    //   let bodyObject = JSON.parse(req.body);
    //   let myPost = await db.collection("users").insertOne(bodyObject);
    //   res.json(myPost.ops[0]);
    //   break;