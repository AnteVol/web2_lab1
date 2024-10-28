import express from 'express';
import { authProps } from './middlewares/Auth';
import routes from './routes/Router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(authProps);
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Working on port ${PORT}`);
});
