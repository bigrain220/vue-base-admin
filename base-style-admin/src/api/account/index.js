import API from "@/api/api"

export const getTagsAPI =params=>API('get','/theme/tags',params)