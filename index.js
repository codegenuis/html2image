import express from 'express';
import bodyParser from 'body-parser';
import imageRoute from './routes/imageRoute';
import dotenv from 'dotenv';
import cors from 'cors';
import * as Sentry from '@sentry/node';

const app = express();
const port = 5052;
app.use(cors());
dotenv.config();

app.use(Sentry.Handlers.requestHandler());

app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1/htmlconversion', imageRoute);



app.listen(5000, function () {
  console.log("Server is running..");
});

app.use(Sentry.Handlers.errorHandler());

export default app
