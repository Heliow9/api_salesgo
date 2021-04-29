import Order from '../models/orderModel.js';
import Item from '../models/itemModel.js';
import Table from '../models/tableModel.js';
class OrderController {
  async create(req, res) {
    const { uid, table } = req.headers;
    const selectecItem = '60870004a6e33a4d24a28e6b';
    const result = await Item.find({ _id: selectecItem, user: uid });
    let data = [];
    result.map((item, key) => {
      data = ({ itemName: item.itemName, itemPrice: item.itemPrice })
    })
    if (data) {

      const newOrder = new Order({ itemName: data.itemName, itemPrice: data.itemPrice, table: table })
      Table.save().then(newOrder)
    }


  }

  async query(req, res) {

    Order.find({ table }).then((order) => {
      res.json(order)
    })

  }


}


export { OrderController }