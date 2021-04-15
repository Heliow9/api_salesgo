import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: {
    type: 'string',
    required: true,

  }
}, {
  timestamps: true,

})

const User = mongoose.model('User', userSchema);
export default User;