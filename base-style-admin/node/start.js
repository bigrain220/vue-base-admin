// CMD运行:   nodemon start.js
const app = require('./http')
const dataCommon = require('./data-common')
const bodyParser = require('body-parser')

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//热更新
var debug = require('debug')('my-application'); // debug模块
app.set('port', process.env.PORT || 3000); // 设定监听端口

//one
app.get('/getTest1', (req, res) => {
  //   console.log(req.query)
  res.status(200)
  res.json(dataCommon.one)
})
//two
app.get('/getTest2', (req, res) => {
  res.status(200)
  res.json(dataCommon.two)
})

app.post('/getTest3', (req, res) => {
  //   console.log(req.body)
  res.status(200)
  res.json(dataCommon.three)
})


//启动监听
var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});
