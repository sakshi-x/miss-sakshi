import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

// Load environment variables from .env
dotenv.config();

// Route imports
import authRouter from './routes/auth.js';
import studentsRouter from './routes/students.js';
import coursesRouter from './routes/courses.js';
import blogRouter from './routes/blog.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/students', studentsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/blog', blogRouter);

// Serve static assets for the admin panel (CSS, JS inside public/) without serving index.html
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// Admin Panel Routes
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/admin/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Vite middleware handles the portfolio SPA on "/" and other frontend routes
const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'spa'
});
app.use(vite.middlewares);

// Start Express server on 0.0.0.0 so it binds properly in all environments
app.listen(PORT, '0.0.0.0', () => {
  console.log(`===============================================`);
  console.log(` Server is running on port ${PORT}`);
  console.log(` Portfolio Website:    http://localhost:${PORT}/`);
  console.log(` Admin Login Page:     http://localhost:${PORT}/admin`);
  console.log(` Admin Dashboard:      http://localhost:${PORT}/admin/dashboard`);
  console.log(`===============================================`);
});

export default app;
