import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tableSchema = new Schema({
  tableNumber: {
    type: 'string',
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  consumption: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  }],

}, {
  timestamps: true,

})

const Item = mongoose.model('Table', tableSchema);
export default Item;