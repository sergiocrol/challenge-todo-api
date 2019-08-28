const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  type: {
    type: String,
    enum: ['job', 'studies', 'home', 'misc'],
    default: 'misc'
  }
}, { timestamps: true }
);

module.exports = mongoose.model('Todo', Todo);