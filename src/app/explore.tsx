import { ExploreScreen } from '@/features/explore';
import { useProfileQuery } from '@/features/profile';

export default function ExploreRoute() {
  const profileQuery = useProfileQuery();

  return <ExploreScreen profileJson={JSON.stringify(profileQuery.data)} />;
}
