import { LOGIN_INPUT_TYPE } from "../constants";

export type LoginFormInputType =
  (typeof LOGIN_INPUT_TYPE)[keyof typeof LOGIN_INPUT_TYPE];

export interface LoginFormData {
  id: string;
  password: string;
}

export interface JwtToken {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  success: boolean;
  jwt: JwtToken;
}
