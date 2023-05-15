import { createNavigationContainerRef } from '@react-navigation/native';
import { MainRoutes, MainStackParams } from '@salesapp/types';

export const rootNavigationRef =
  createNavigationContainerRef<MainStackParams>();

export const useRootNavigator = () => {
  const navigate = (screen: MainRoutes) => {
    if (rootNavigationRef.isReady()) {
      rootNavigationRef.navigate(screen); // TODO: fix this typo
    }
  };

  return { navigate };
};
