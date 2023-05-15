import {useCallback} from 'react';
import {useTranslation as usei18nTranslation} from 'react-i18next';
import {Translation} from '@salesapp/types';

export const useTranslation = () => {
  const translation = usei18nTranslation();

  const t = useCallback((key: Translation) => {
    if (typeof key === 'string') {
      return translation.t(key);
    }

    return translation.t(key.key, key.options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return t;
};
