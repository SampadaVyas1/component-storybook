import { useRef, useState } from 'react';

export default <DataType, Args extends unknown[]>(
  fn: (...args: Args) => Promise<DataType>,
  extraParams?: {
    onSuccess?: (data?: any) => void;
    onError?: (error?: any) => void;
  },
) => {
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState(false);
  const [silentLoading, setSilentLoading] = useState(false);
  const [error, setError] = useState<any>();
  const params = useRef<Args>();
  const execute = (isSilent = false) => {
    return async (...args: Args) => {
      if (!isSilent) {
        setError(undefined);
        setData(undefined);
      }
      try {
        if (isSilent) {
          setSilentLoading(true);
        } else {
          setLoading(true);
        }
        params.current = args;
        const responseData = await fn(...args);
        setData(responseData);
        extraParams?.onSuccess?.(responseData);
      } catch (error: any) {
        const errorResponse = error?.response?.data ? error?.response?.data : error;
        setError(errorResponse);
        extraParams?.onError?.(errorResponse);
      } finally {
        setLoading(false);
        setSilentLoading(false);
      }
    };
  };
  const reload = () => {
    execute()(...params.current!);
  };

  const silentReload = () => {
    execute(true)(...params.current!);
  };

  return {
    loading,
    silentLoading,
    data,
    error,
    execute: execute(),
    reload,
    silentReload,
  };
};
