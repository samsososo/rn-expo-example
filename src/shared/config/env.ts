const DEFAULT_API_BASE_URL = 'http://localhost:8082/api/mobile/v1';

export const env = {
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL,
} as const;
