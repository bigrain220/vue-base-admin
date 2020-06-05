// CMD运行:   nodemon start.js
const app = require('./http')
const dataCommon = require('./data-common')
const bodyParser = require('body-parser')

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
//热更新
var debug = require('debug')('my-application'); // debug模块
app.set('port', process.env.PORT || 3000); // 设定监听端口

function request(methods, url, data) {
  const method = methods.toLowerCase();
  let options = {
    get() {
      return app.get(url, (req, res) => {
        //console.log(req.query)
        res.status(200)
        res.json(data)
      })
    },
    post() {
      return app.post(url, (req, res) => {
        //console.log(req.body)
        res.status(200)
        res.json(data)
      })
    }
  }
  try {
    return options[method]();
  } catch (error) {
    throw new Error(methods + " is not defined in methods!")
  }
}

Object.keys(dataCommon).map(item => {
  request(dataCommon[item].methods, item, dataCommon[item].data)
})


//启动监听
var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});