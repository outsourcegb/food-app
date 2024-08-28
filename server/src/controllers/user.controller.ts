import { Request, Response } from 'express';
import User, { IUser } from '../models/user.model';
import { createUser } from '../services/user.service';

export const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id, ...userData } = req.body;

    if (!auth0Id) {
      return res.status(400).json({ message: 'auth0Id is required' });
    }

    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = await createUser({ auth0Id, ...userData });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Failed to create user:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req;
    const { name, address, city, country } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.name = name;
    user.address = address;
    user.city = city;
    user.country = country;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ message: 'Failed to update user' });
  }
};
