
//your code here
app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;