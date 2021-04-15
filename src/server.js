import express from 'express';
import bodyParser from 'body-parser';
import { router } from '../routes.js'
import mongoose from 'mongoose';
const db = mongoose.connection;
const app = express();
app.use(bodyParser.json())


app.use(router);
mongoose.connect('mongodb+srv://heliow9:22021419h@cluster0.rea79.mongodb.net/salesgo?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

if (!db){
  db.once('open', () => {
    console.log('Nos estamos conectado!')
  })
}

  app.listen(3333, () => {
    console.log('Server is activi')
  })