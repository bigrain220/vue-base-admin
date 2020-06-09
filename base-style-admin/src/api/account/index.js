import API from "@/api/api"

export const getTagsAPI =params=>API('get','/api/theme/tags',params)
