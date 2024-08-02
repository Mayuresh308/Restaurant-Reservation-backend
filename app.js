import express from "express";
// import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
// dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: true,
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);

export default app;








// // app.js
// import express from 'express';
// import cors from 'cors';

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // CORS configuration
// app.use(cors({
//     origin: process.env.FRONTEND_URL, 
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//     credentials: true,
// }));

// app.post('/api/v1/reservation/send', (req, res) => {
//     const { firstName, lastName, email, phone, date, time } = req.body;
//     // Here will be your MongoDB interaction to save the reservation
//     res.json({ message: 'Reservation received!', data: req.body });
// });

// export default app;
