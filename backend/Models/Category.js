var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({

  namecategory: {
    type:String,
  
  }
});

module.exports = mongoose.model('Category', CategorySchema);
