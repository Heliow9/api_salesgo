import Router from 'express';
import { ItemController } from './src/controllers/ItemController.js';
import { UserController } from './src/controllers/UserController.js';
import { TableController } from './src/controllers/TableController.js';
import { OrderController } from './src/controllers/orderController.js';
import multer from 'multer';



const userController = new UserController;
const itemController = new ItemController;
const tableController = new TableController;
const orderController = new OrderController;
const router = Router();



router.get('/', userController.query);
router.post('/user/add', userController.create);
router.post('/item/add', multer({ dest: 'public/uploads' }).single('file'), itemController.create);
router.get('/item', itemController.query);
router.post('/tables/add', tableController.create);
router.get('/tables/consumption', tableController.queryAll);
router.get('/tables', tableController.query);
router.put('/tables/setorder', tableController.update);


export { router }