import 'dotenv/config';
import express, { Request, Response } from 'express';
const app = express();
import morgan from 'morgan';
import passport from 'passport';
import cors from 'cors';
import helmet from 'helmet';
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(passport.initialize());
import './middleware/passport';

// routes
import routes from './routes/routes';
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('hello from typescript node');
});

app.listen(PORT, () => console.log(`server is started on port ${PORT}`));
