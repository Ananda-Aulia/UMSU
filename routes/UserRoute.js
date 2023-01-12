import express from "express";
import { getUsers,
         getUserById,
         getUserByName,
         createUser,
         updateUser,
         deleteUserById,
         deleteUser
 } from "../controllers/UserControllers.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.get('/user', getUserByName);


router.post('/user', createUser);

router.patch('/user/:id', updateUser);

router.delete('/user/:id', deleteUserById);
router.delete('/user', deleteUser);

export default router;