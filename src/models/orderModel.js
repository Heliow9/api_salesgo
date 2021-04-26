import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  
  itemName:{
    type:'string'

  },
  itemPrice:{
    type:'string'
  },
  

  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Table',
    required: true
  },

}, {
  timestamps: true,

})

const Order = mongoose.model('Order', orderSchema);
export default Order;