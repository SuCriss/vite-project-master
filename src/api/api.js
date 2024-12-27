// api.js
import { createAlova } from 'alova';
import axiosAdapter from 'alova/axiosAdapter';
import { Loading } from 'element-ui';

// 创建 Alova 实例
const alovaInstance = createAlova({
  baseURL: 'https://api.example.com', // 设置基础 URL
  adapter: axiosAdapter(), // 使用 axios 适配器
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 定义一个全局的 loading 实例
let loadingInstance = null;

// 更新 loading 状态的函数
const setLoading = (state) => {
  if (state) {
    loadingInstance = Loading.service({ fullscreen: true });
  } else if (loadingInstance) {
    loadingInstance.close();
  }
};

// 封装请求方法，添加 loading 状态
const requestWithLoading = async (requestFunc, ...args) => {
  try {
    setLoading(true);
    const response = await requestFunc(...args);
    return response;
  } finally {
    setLoading(false);
  }
};

// 封装 GET 请求
export const getData = (endpoint, params) => {
  return requestWithLoading(alovaInstance.get, endpoint, { params });
};

// 封装 POST 请求
export const postData = (endpoint, data) => {
  return requestWithLoading(alovaInstance.post, endpoint, data);
};

// 封装 PUT 请求
export const putData = (endpoint, data) => {
  return requestWithLoading(alovaInstance.put, endpoint, data);
};

// 封装 DELETE 请求
export const deleteData = (endpoint) => {
  return requestWithLoading(alovaInstance.delete, endpoint);
};

// 封装文件上传
export const uploadFile = (endpoint, file, additionalData = {}) => {
  const formData = new FormData();
  formData.append('file', file);

  Object.keys(additionalData).forEach(key => {
    formData.append(key, additionalData[key]);
  });

  return requestWithLoading(alovaInstance.post, endpoint, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 封装文件下载
export const downloadFile = (endpoint, params) => {
  return requestWithLoading(alovaInstance.get, endpoint, {
    params,
    responseType: 'blob',
  }).then(response => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'filename');
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
};