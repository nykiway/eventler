import clientPromise from "../../../lib/mongodb";

export async function POST(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('eventler');

    console.log("REQUEST", req)
    // const venue = await db.collection('venues').insertOne({
    //   name: "Nyki's House",
    //   address: "5125 W Cromwell Ave",
    //   zipCode: 93722,
    //   state: 'CA',
    //   city: 'Fresno',
    //   phoneNumber: '(303) 981-9442'
    // })
    // return Response.json(venue);
  } catch(e) {
    console.error(e)
    throw new Error(e).message
  }
};


export async function GET(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('eventler');
    
    const venue = await db.collection('venues').find({}).toArray();
    return Response.json(venue);
  } catch (e) {
    console.error(e)
    throw new Error(e).message
  }
}