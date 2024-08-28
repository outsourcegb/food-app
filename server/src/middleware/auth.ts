import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';
import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      userId: string;
      auth0Id: string;
    }
  }
}

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256',
});

export const jwtDecode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized access!' });
  }

  const token = authorization.split(' ')[1];

  try {
    const decoded = jwt.decode(token) as jwt.JwtPayload;

    if (!decoded) {
      return res.status(401).json({ message: 'Unauthorized access!' });
    }

    const auth0Id = decoded.sub;
    const user = await User.findOne({ auth0Id });

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized access!' });
    }

    req.auth0Id = auth0Id as string;
    req.userId = user._id?.toString() as string;

    next();
  } catch (error) {
    console.error('Failed to decode token:', error);
    res.status(500).json({ message: 'Failed to decode token' });
  }
};
