import Order from '../models/orderModel.js';
import Item from '../models/itemModel.js';
class OrderController {
  async create(req, res) {
    const { uid, table } = req.headers;
    const selectecItem = '60870004a6e33a4d24a28e6b';
    await Item.find({ _id: selectecItem, user: uid }).then((item) => {
      if (item) {
        const { itemName } = item;
        res.json(item.itemName)
        // const newOrder = new Order(item, table);
        // Order.create(newOrder).then((order) => {
        //   res.json(order)
        // })
      }

    })
  }


}


export { OrderController }