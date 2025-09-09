// API工具函数 - 为组件提供认证的API请求方法
import { apiGet, apiPost, apiPut, apiDelete } from '../api-client';

// 认证的GET请求
export const authenticatedGet = async (endpoint: string) => {
  return await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`
    }
  });
};

// 认证的POST请求
export const authenticatedPost = async (endpoint: string, data?: any) => {
  return await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`
    },
    body: data ? JSON.stringify(data) : undefined
  });
};

// 认证的PUT请求
export const authenticatedPut = async (endpoint: string, data?: any) => {
  return await fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`
    },
    body: data ? JSON.stringify(data) : undefined
  });
};

// 认证的DELETE请求
export const authenticatedDelete = async (endpoint: string) => {
  return await fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`
    }
  });
};

// 获取认证令牌
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
};

// 导出所有API函数以便使用
export { apiGet, apiPost, apiPut, apiDelete } from '../api-client';