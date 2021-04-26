import Router from 'express';
import { ItemController } from './src/controllers/ItemController.js';
import { UserController } from './src/controllers/UserController.js';
import multer from 'multer';



const userController = new UserController;
const itemController = new ItemController;
const router = Router();



router.get('/', userController.query);
router.post('/user/add', userController.create);
router.post('/item/add', multer({dest:'public/uploads'}).single('file'), itemController.create);
router.get('/item', itemController.query);


export { router }