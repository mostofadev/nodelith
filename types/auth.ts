// types/auth.ts
// Domain types shared between endpoint files and components.
// Keeping types separate from endpoint files means UI components can
// import types WITHOUT pulling in axios or API logic.

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}