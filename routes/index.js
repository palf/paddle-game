exports.index = function(req, res){
  res.render('index', { title: 'Palf Paddle :: Index' });
};


exports.remote = function(req, res){
  res.render('remote', { title: 'Palf Paddle :: Remote' });
};


exports.world = function(req, res){
  res.render('world', { title: 'Palf Paddle :: World' });
};
