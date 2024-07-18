import mongoose from "mongoose";

export const dbconnection = () =>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        dbName: "LEGAL EASE DEPLOYED"
    }).then(()=>{
        console.log("Connected To Database");
    }).catch(err=>{
        console.log(`Error connecting to MongoDB ${err}`);
    })
};