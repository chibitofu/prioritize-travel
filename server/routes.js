var path = require('path');
module.exports = {

  //'/' : require('./controllers/MainCtrl'),
  '/calc' : require('./controllers/CalculatorCtrl'),
  '/user' : require('./controllers/UserCtrl'),
  '/auth' : require('./controllers/Auth'),
  '/api'  : require('./controllers/HomeCtrl'),

  '/' : function(req, res){
    res.sendFile(path.join(__dirname, '../client/index.html'));
  }
};