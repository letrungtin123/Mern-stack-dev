import * as dotenv from 'dotenv';

import apiDocumentation from './docs/api.doc.js'
import connectDB from './configs/connect-db.config.js';
import cors from 'cors';
import express from 'express';
import rootRoutes from './routes/index.js';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(
    cors({
        origin: 'https://localhost:3000',
        methods: 'GET, HEAD, PUT, POST, PATCH, DELETE',
    }),
);

app.get('/', (_,res) => {
    res.send('Hello World');
});

// connect to MongoDB
connectDB();

//doc swagger
app.use('/documents', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

//routes
app.use(`/api/v1`,rootRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});