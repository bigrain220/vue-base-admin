import API from "./api"

export const getSession =params=>API('post','/sessions',params);
export const getTags =params=>API('get','/theme/tags',params)