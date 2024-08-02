// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "Restaurants",
//     })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log(`Some error occured while connecing to database: ${err}`);
//     });
// };


import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://mayuresh:0iRYDX6BMsqkCwe8@mayuresh.rwd0qwr.mongodb.net/Restaurants?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to database: ${err}`);
    });
};