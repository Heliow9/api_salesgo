import Item from '../models/itemModel.js';
class ItemController {

  async create(req, res) {
    const { itemName, itemPrice, itemUrl } = req.body;
    const { uid } = req.headers;
    const newItem = new Item({ itemName, itemPrice, itemUrl, user: uid })
    newItem.save()
      .then((result) => {
        res.json({ result })
      }).catch((err) => {
        res.json(err)
      })


  }
  async query(req, res) {
    const { uid } = req.headers;
    console.log(uid)
    Item.find({ user: uid }).then((item) => {
      res.json({ item })
    }).catch((err) => {
      res.json({ err })
    })

  }

}

export { ItemController }