import Mock from 'mockjs'

export default function () {
    Mock.mock('/user1', /post|get/i, {
        'mdg': '666'
    })
    Mock.mock('/login', /post|get/i, {
        'mdg': '666'
    })
}