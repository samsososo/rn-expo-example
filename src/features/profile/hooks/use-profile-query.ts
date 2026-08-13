import { useQuery } from '@tanstack/react-query';

import { getProfile } from '../api/get-profile';

export const profileQueryKey = ['profile'] as const;

export function useProfileQuery() {
  return useQuery({
    queryKey: profileQueryKey,
    queryFn: getProfile,
  });
}
