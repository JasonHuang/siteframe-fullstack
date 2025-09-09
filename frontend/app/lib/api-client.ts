// 统一的API客户端
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// 获取存储的认证令牌
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
};

// 存储认证令牌
export const setAuthToken = (token: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('auth_token', token);
};

// 清除认证令牌
export const clearAuthToken = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('auth_token');
};

// 发送 API 请求的辅助函数
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}/api${endpoint}`;
  const token = getAuthToken();
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };
  
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  
  const config: RequestInit = {
    ...options,
    headers,
  };
  
  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Network error' }));
      // 对于认证相关的错误，不在控制台输出错误信息
      if (response.status === 401 && (endpoint.includes('/auth/') || endpoint === '/auth/user')) {
        throw new Error(errorData.error || '未提供认证令牌');
      }
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    // 对于认证相关的错误，不在控制台输出错误信息
    const isAuthOrTheme = endpoint.startsWith('/auth') || endpoint.startsWith('/themes');
    const isAuthTokenError = error instanceof Error && (error.message.includes('未提供认证令牌') || error.message.includes('无效的认证令牌'));

    if (!isAuthTokenError && !isAuthOrTheme) {
      console.error('API request failed:', error);
    } else if (process.env.NODE_ENV === 'development') {
      // 开发模式下，对认证与主题相关的网络错误降级为警告，避免打断本地预览
      console.warn('[dev] API request non-blocking failure:', endpoint);
    }
    throw error;
  }
};

// GET 请求
export const apiGet = async (endpoint: string) => {
  const response = await apiRequest(endpoint, { method: 'GET' });
  return response.json();
};

// POST 请求
export const apiPost = async (endpoint: string, data?: any) => {
  const response = await apiRequest(endpoint, {
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });
  return response.json();
};

// PUT 请求
export const apiPut = async (endpoint: string, data?: any) => {
  const response = await apiRequest(endpoint, {
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });
  return response.json();
};

// DELETE 请求
export const apiDelete = async (endpoint: string) => {
  const response = await apiRequest(endpoint, { method: 'DELETE' });
  return response.json();
};

// 认证相关API
export const authAPI = {
  signUp: (data: { email: string; password: string; name: string; isAdmin?: boolean }) => 
    apiPost('/auth/signup', data),
  
  signIn: (data: { email: string; password: string }) => 
    apiPost('/auth/signin', data),
  
  signOut: () => 
    apiPost('/auth/signout'),
  
  getCurrentUser: () => 
    apiGet('/auth/user'),
  
  resetPassword: (email: string) => 
    apiPost('/auth/reset-password', { email }),
  
  updatePassword: (newPassword: string) => 
    apiPost('/auth/update-password', { newPassword }),
  
  checkAdmin: () => 
    apiGet('/auth/check-admin'),
};

// 用户相关API
export const userAPI = {
  getProfile: (userId?: string) => 
    apiGet(`/user/profile${userId ? `/${userId}` : ''}`),
  
  updateProfile: (data: any) => 
    apiPut('/user/profile', data),
};

// 主题相关API
export const themeAPI = {
  getActive: () => 
    apiGet('/themes/active'),
  
  getAll: () => 
    apiGet('/themes'),
  
  getById: (id: string) => 
    apiGet(`/themes/${id}`),
  
  create: (data: any) => 
    apiPost('/themes', data),
  
  update: (id: string, data: any) => 
    apiPut(`/themes/${id}`, data),
  
  activate: (id: string) => 
    apiPost(`/themes/${id}/activate`),
  
  delete: (id: string) => 
    apiDelete(`/themes/${id}`),
};

// 健康检查
export const healthCheck = () => apiGet('/health');

export default {
  authAPI,
  userAPI,
  themeAPI,
  healthCheck,
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
  setAuthToken,
  clearAuthToken,
};