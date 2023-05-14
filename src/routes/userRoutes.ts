import { Router } from 'express';
import { UserController } from '../controllers/UserController';

export const userRouter: Router = Router();

// Create
userRouter.post("/create", UserController.create);

// FindAll
userRouter.get("/create", UserController.findAll);

// Delete
userRouter.post("/create", UserController.delete);

// Edit
userRouter.put("/create", UserController.edit);

// FindOne
userRouter.get("/create", UserController.findOne);

module.exports = userRouter;