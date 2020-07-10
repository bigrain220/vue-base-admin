//edit-add-dialog 配置项
export const editAddDialogConfig = {
    title: {
        name: "", //dialog标题
        value: '' //dialog类型值
    },
    className: "", //自定义class名称
    data: [{ //配置项
        label: "",
        prop: "",
        placeholder: "",
        type: "", //类型 ：input/select/date
        disabled: false, //是否禁用
        rules: [{ //自定义对应prop值的校验规则
            required: true,
            message: "",
            trigger: ""
        }],
        slot: false, //是否使用自定义插槽,用法：<template slot="prop值" slot-scope="scope"></template>使用scope.row获取数据
        options: [{ //type为select时的下拉数据
            value: '',
            label: ''
        }]
    }, ]
}