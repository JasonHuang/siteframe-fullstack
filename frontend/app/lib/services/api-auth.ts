// 前端认证服务 - 使用统一的API客户端
import { authAPI, setAuthToken, clearAuthToken, userAPI, themeAPI } from '../api-client';
import { SignUpData, SignInData, AuthResponse, UpdateProfileData, User } from '../types/auth';

// 用户注册
export const signUp = async (data: SignUpData, isAdmin: boolean = false): Promise<AuthResponse> => {
  try {
    const result = await authAPI.signUp({ ...data, isAdmin });
    
    if (result.session?.access_token) {
      setAuthToken(result.session.access_token);
    }
    
    return result;
  } catch (error) {
    return { error: error instanceof Error ? error.message : '注册失败' };
  }
};

// 用户登录
export const signIn = async (data: SignInData): Promise<AuthResponse> => {
  try {
    const result = await authAPI.signIn(data);
    
    if (result.session?.access_token) {
      setAuthToken(result.session.access_token);
    }
    
    return result;
  } catch (error) {
    return { error: error instanceof Error ? error.message : '登录失败' };
  }
};

// 用户登出
export const signOut = async (): Promise<{ error?: string }> => {
  try {
    await authAPI.signOut();
    clearAuthToken();
    notifyAuthStateChange(null);
    return {};
  } catch (error) {
    return { error: error instanceof Error ? error.message : '登出失败' };
  }
};

// 获取当前用户
export const getCurrentUser = async () => {
  try {
    const result = await authAPI.getCurrentUser();
    return result;
  } catch (error) {
    // 静默处理认证错误，用户未登录是正常状态
    return null;
  }
};

// 重置密码
export const resetPassword = async (email: string): Promise<{ error?: string }> => {
  try {
    await authAPI.resetPassword(email);
    return {};
  } catch (error) {
    return { error: error instanceof Error ? error.message : '重置密码失败' };
  }
};

// 更新密码
export const updatePassword = async (newPassword: string): Promise<{ error?: string }> => {
  try {
    await authAPI.updatePassword(newPassword);
    return {};
  } catch (error) {
    return { error: error instanceof Error ? error.message : '更新密码失败' };
  }
};

// 检查是否存在管理员
export const checkAdminExists = async (): Promise<boolean> => {
  try {
    const result = await authAPI.checkAdmin();
    return result.exists || false;
  } catch (error) {
    return false;
  }
};

// 获取活跃主题
export const getActiveTheme = async () => {
  try {
    return await themeAPI.getActive();
  } catch (error) {
    return null;
  }
};

// 获取所有主题
export const getAllThemes = async () => {
  try {
    return await themeAPI.getAll();
  } catch (error) {
    return [];
  }
};

// 激活主题
export const activateTheme = async (themeId: string) => {
  try {
    return await themeAPI.activate(themeId);
  } catch (error) {
    throw error;
  }
};

// 认证状态监听器
let authStateListeners: ((user: any) => void)[] = [];

export const onAuthStateChange = (callback: (user: any) => void) => {
  authStateListeners.push(callback);
  
  // 立即检查当前用户状态
  getCurrentUser().then(user => {
    callback(user);
  });
  
  // 返回取消订阅函数
  return () => {
    authStateListeners = authStateListeners.filter(listener => listener !== callback);
  };
};

// 通知认证状态变化
const notifyAuthStateChange = (user: any) => {
  authStateListeners.forEach(listener => listener(user));
};

// 获取会话信息
export const getSession = async () => {
  try {
    const user = await getCurrentUser();
    if (user) {
      return { user, session: { access_token: localStorage.getItem('auth_token') } };
    }
    return null;
  } catch (error) {
    return null;
  }
};

// 获取用户资料
export const getUserProfile = async (userId?: string) => {
  try {
    return await userAPI.getProfile(userId);
  } catch (error) {
    return null;
  }
};

// 更新用户资料
export const updateProfile = async (data: UpdateProfileData): Promise<{ error?: string }> => {
  try {
    await userAPI.updateProfile(data);
    return {};
  } catch (error) {
    return { error: error instanceof Error ? error.message : '更新资料失败' };
  }
};

// 检查权限
export const checkPermission = async (permission: string): Promise<boolean> => {
  try {
    const user = await getCurrentUser();
    if (!user) return false;
    
    // 管理员拥有所有权限
    if (user.is_admin) return true;
    
    // 根据权限类型检查
    switch (permission) {
      case 'admin':
        return user.is_admin || false;
      case 'theme:create':
      case 'theme:edit':
      case 'theme:delete':
        return user.is_admin || false;
      case 'profile:edit':
        return true; // 所有登录用户都可以编辑自己的资料
      default:
        return false;
    }
  } catch (error) {
    return false;
  }
};