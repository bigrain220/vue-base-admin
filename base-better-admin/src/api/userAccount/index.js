import API from "@/api/api"

// eg:API('post', '/login', params,{headers:{"Content-Type": "multipart/form-data" }})

export const loginAPI = params => API('post', '/login', params);
export const logoutAPI = params => API('post', '/logout', params);