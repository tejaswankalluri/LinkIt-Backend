import 'dotenv/config';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
const app = express();
import morgan from 'morgan';
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(morgan('dev'));

// db connection
import connectDB from './config/db';
connectDB();
mongoose.connection.once('open', () => {
    console.log('Connected to DB');
});
// routes
import routes from './routes/routes';
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('hello from typescript node');
});

app.listen(PORT, () => console.log(`server is started on port ${PORT}`));
