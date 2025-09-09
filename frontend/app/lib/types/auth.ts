// 认证相关类型定义

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  website?: string;
  social_links?: Record<string, string>;
  is_admin?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Session {
  access_token: string;
  refresh_token?: string;
  expires_at?: number;
  user: User;
}

export interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user?: User;
  session?: Session;
  error?: string;
}

export interface UpdateProfileData {
  name?: string;
  avatar?: string;
  bio?: string;
  website?: string;
  social_links?: Record<string, string>;
}

export interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
}