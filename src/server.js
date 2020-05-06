import 'dotenv/config';
import express from 'express';

import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

import routes from './app/routes';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use('/admin/queues', BullBoard.UI);

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Server running on port 3333'));