import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: {
    type: 'string',
    required: true,
  },
  itemPrice: {
    type: 'number',
    required: true,
  },
  itemUrl: {
    type: 'string',
    required: true,
  },
  _uid: {
    type: 'string',
    required: true,
  }
}, {
  timestamps: true,

})

const Item = mongoose.model('Item', itemSchema);
export default Item;