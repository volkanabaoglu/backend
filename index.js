import express from 'express';
import env from 'dotenv';
import connectDB from "./database/index.js";
import routes from './routes/index.js';  // Rota dosyanızı ekleyin
import cors from 'cors';

env.config();
connectDB();

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);  // Rota dosyanızı kullanın

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
