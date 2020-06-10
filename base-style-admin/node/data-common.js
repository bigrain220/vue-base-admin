const res = {
  '/getTest1': {
    methods: 'get',
    data: new Array(10).fill({
      name: 'xiaoming',
      value: "1"
    })
  },
  '/getTest2': {
    methods: 'get',
    data: new Array(10).fill({
      name: 'xiaoming',
      value: "2"
    })
  },
  '/getTest3': {
    methods: 'post',
    data: new Array(10).fill({
      name: 'xiaoming',
      value: "3"
    })
  },
}

module.exports = res