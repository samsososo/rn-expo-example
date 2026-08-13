import { httpClient } from '@/shared/api/http-client';

import type { Profile } from '../types';

export async function getProfile(): Promise<Profile> {
  const response = await httpClient.get<Profile>('/profile');

  return response.data;
}
