exports.index = function(req, res){
  res.render('index', { title: 'Palf Paddle :: Index' });
};


exports.remote = function(req, res){
  var paddle = req.query['paddle'];
    res.render('remote', { title: 'Palf Paddle :: Remote (' + paddle + ')' , paddle: paddle});
};


exports.world = function(req, res){
  res.render('world', { title: 'Palf Paddle :: World' });
};
