import express from "express";
import cors from "cors";
import { corsOptions } from "./config/cors.js";
import http from "node:http";
import { Server } from "socket.io";
import { registerSocketHandlers } from "./controllers/socketController.js";
import { TServer } from "./types/index.js";

const app = express();
const PORT = process.env.PORT;

//* MW
app.use(cors(corsOptions));
app.use(express.json());

//* Sunucu Oluşturma
const server = http.createServer(app);
const io: TServer = new Server(server, { cors: corsOptions });

//* Soket Bağlantısı Oluşturma
io.on("connection", (socket) => {
  registerSocketHandlers(io, socket);
});

server.listen(PORT, () => {
  console.log(`🟢 Server ${PORT} portunu dinlemeye başladı`);
});
