export const useDelay = () => {
  const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => resolve(), ms);
    });
  };

  return delay;
};
