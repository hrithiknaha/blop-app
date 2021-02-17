import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(() => console.log(`Server is listening on port ${PORT}`))