import User, { IUser } from '../models/user.model';

export const createUser = async (userData: IUser) => {
  const newUser = new User(userData);
  await newUser.save();
  return newUser;
};
