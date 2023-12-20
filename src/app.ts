// const express = require('express')
import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './modules/student/student.route';
const app = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoute);

const appController = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', appController);

console.log(process.cwd());

export default app;
