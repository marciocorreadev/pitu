import app from '../app';
import database from '../db/database';

database.sync({ force: true });

console.log('DB wunning at 3306');

app.listen(3000);

console.log('Server running at 3000');