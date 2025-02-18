import { MongoClient } from "mongodb";

const URI =
"mongodb+srv://luhemt:aUEsO56d13ZSYgVm@cluster0.8t2tr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(URI);

export const db = client.db("spotify");

