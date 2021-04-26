import Table from '../models/tableModel.js';
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

}

export { TableController }