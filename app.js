import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import './config/mongoose-connection.js'
import index from './routes/index.js'
import ownersRouter from './routes/ownersRouter.js'
import usersRouter from './routes/usersRouter.js'
import productsRouter from './routes/productsRouter.js'
import dotenv from 'dotenv'
dotenv.config();
import session from 'express-session';
import flash from 'connect-flash';



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(flash());


app.use('/',index);
app.use('/owner',ownersRouter);
app.use('/user',usersRouter);
app.use('/product',productsRouter);

app.listen(3000);