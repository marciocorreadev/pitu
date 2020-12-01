import express from 'express';
import linksRoute from './routes/links'

const app = express();
app.use(express.json());
app.use(linksRoute);


export default app;