import API from "@/api/api"

export const getTagsAPI =params=>API('get','/api/theme/tags',params)
export const getTest1API =params=>API('get','/getTest1',params)
export const getTest2API =params=>API('get','/getTest2',params)
export const getTest3API =params=>API('post','/getTest3',params)