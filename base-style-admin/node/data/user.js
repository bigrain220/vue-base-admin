const res = {
  '/getTest3': {
    methods: 'get',
    data: new Array(10).fill({
      name: 'xiaoming',
      value: "33"
    })
  },
  '/getTestUser': {
    methods: 'post',
    data: new Array(4).fill({
      name: 'getTestUser',
      value: "getTestUser"
    })
  },
}

module.exports = res