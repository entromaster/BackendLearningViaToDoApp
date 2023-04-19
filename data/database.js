import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
    .connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0", {
        dbName: "backendapi",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};

