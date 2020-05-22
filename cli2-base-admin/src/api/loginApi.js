import API from "./api"

export const loginAPI =params=>API('post','/login',params);

export const logoutAPI =params=>API('post','/logout',params);