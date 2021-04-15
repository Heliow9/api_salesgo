import Router from 'express';
import { ItemController } from './src/controllers/ItemController.js';
import { UserController } from './src/controllers/UserController.js';


const userController = new UserController;
const itemController = new ItemController;
const router = Router();



router.get('/', userController.query);
router.post('/user/add', userController.create);
router.post('/item/add', itemController.create);


export { router }