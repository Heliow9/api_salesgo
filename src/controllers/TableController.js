import Table from '../models/tableModel.js';
import Order from '../models/orderModel.js';
import Item from '../models/itemModel.js';
class TableController {

  async create(req, res) {
    const { tableNumber } = req.body;
    const { uid } = req.headers;
    await Table.find().then((table) => {
      if (table.length >= 10) {
        res.json({ 'error': 'Você já possui o numero maximo de mesas cadastrada' })

      } else {
        Table.find({ tableNumber, user: uid }).then((table) => {
          if (table.length === 1) {
            res.json({ 'error': 'Mesa já cadastrada!' });
          }
          else {

            const newTable = new Table({ tableNumber, user: uid })
            newTable.save().then((result) => {
              res.json({ 'sucess': result })
            }).catch((error) => {
              res.json({ 'error': error })
            })

          }
        });

      }
    }).catch((error) => {
      res.status(400).json({ 'error': error })
    })

  }
  async query(req, res) {
    const { uid } = req.headers;
    console.log(uid)
    Table.find({ user: uid }).then((item) => {
      res.json({ item })
    }).catch((err) => {
      res.json({ err })
    })

  }

  async queryAll(req, res) {
    const { uid } = req.headers;
    console.log(uid)
    Table.find({ user: uid, consumption: { '$not': { '$size': 0 } } }).then((item) => {
      res.json({ item })
    }).catch((err) => {
      res.json({ err })
    })

  }



  async update(req, res) {
    const { uid, table } = req.headers;
    const selectecItem = '608afc44df440c304c6831bf';
    const result = await Item.find({ _id: selectecItem, user: uid });
    let data = [];
    result.map((item, key) => {
      data = ({ itemName: item.itemName, itemPrice: item.itemPrice, ref: selectecItem })
    })
    if (data) {
      console.log(table)
      const createdDate = new Date();
      Table.findOneAndUpdate({ _id: table }, {
        $push: {
          consumption: { itemName: data.itemName, itemPrice: data.itemPrice, createdDate }
        }
      }).then((result) => res.json(result))

    }

  }

}

export { TableController }