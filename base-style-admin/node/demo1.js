const app = require('./http')
const dataCommon = require('./data-common')
const bodyParser = require('body-parser')
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

// 配置服务端口
const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Listen at http://%s:%s', host, port)
})