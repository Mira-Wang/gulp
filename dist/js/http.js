"use strict";var server=axios.create({baseURL:"http://192.168.1.169:8190",timeout:3e3,withCredentials:!1});server.interceptors.request.use(function(e){return e.headers["Content-Type"]="application/x-www-form-urlencoded",e},function(e){Promise.reject(e)}),service.interceptors.response.use(function(e){var r=e.data;return 0!==r.code?(100005002===r.code||10001===r.code||(40002===r.code?Notify(r.msg):40001===r.code||41504===r.code||r.code),Promise.reject(r)):e.data},function(e){var r=e.response&&e.response.data;return Promise.reject(r)});