var path = require('path');
module.exports = {

  '/example' : require('./controllers/delete-this'),

  '/' : function(req, res){
  res.sendFile(path.join(__dirname, '../client/index.html'));
}
};