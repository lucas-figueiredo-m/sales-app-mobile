import { createNavigationContainerRef } from '@react-navigation/native';
import { MainRoutes, MainStackParams } from '@salesapp/types';

export const rootNavigationRef =
  createNavigationContainerRef<MainStackParams>();

export const useRootNavigator = () => {
  const navigate = (
    screen: MainRoutes,
    params?: MainStackParams[typeof screen],
  ) => {
    if (rootNavigationRef.isReady()) {
      rootNavigationRef.navigate(screen);
    }
  };

  return { navigate };
};
