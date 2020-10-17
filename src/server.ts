import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/health', (req, res) => res.status(200).json({ status: 'ONLINE' }));
app.listen(port, () => console.log(`Server started on ${port}`));
