import { config } from 'dotenv';
import app from './app';
import { connectDB } from './config/db';

config(); // Load environment variables

const port = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
