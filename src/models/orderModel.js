import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({

  itemName: {
    type: 'string'

  },
  itemPrice: {
    type: 'string'
  },


  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Table',
    required: true
  },
  date: {
    type: Date,
    default: new Date().toLocaleDateString('pt-br',),
  }

}, {
  timestamps: true,

})

const Order = mongoose.model('Order', orderSchema);
export default Order;