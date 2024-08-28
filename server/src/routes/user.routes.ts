import express from 'express';
import {
  createCurrentUser,
  updateCurrentUser,
} from '../controllers/user.controller';
import { jwtCheck, jwtDecode } from '../middleware/auth';
import { validateUserRequest } from '../middleware/user.validation';

const router = express.Router();

router.post('/', jwtCheck, createCurrentUser);
router.put('/:id', jwtCheck, jwtDecode, validateUserRequest, updateCurrentUser);

export default router;
