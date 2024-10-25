import { useState, useEffect } from 'react';

type UseArrayBufferResult = {
  arrayBuffer: ArrayBuffer | null;
  error: Error | null;
  loading: boolean;
};

export const useArrayBuffer = (file: File | null): UseArrayBufferResult => {
  const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!file) {
      setArrayBuffer(null);
      setError(null);
      setLoading(false);
      return;
    }

    const reader = new FileReader();

    const onLoad = (event: ProgressEvent<FileReader>) => {
      setArrayBuffer(event.target?.result as ArrayBuffer);
      setLoading(false);
    };

    const onError = (error: ProgressEvent<FileReader>) => {
      setError(error.target?.error || new Error('Failed to load file'));
      setLoading(false);
    };

    setLoading(true);
    reader.addEventListener('load', onLoad);
    reader.addEventListener('error', onError);
    reader.readAsArrayBuffer(file);

    // Cleanup function
    return () => {
      reader.removeEventListener('load', onLoad);
      reader.removeEventListener('error', onError);
      // Abort reading if necessary
      if (reader.readyState === reader.LOADING) {
        reader.abort();
      }
    };
  }, [file]);

  return { arrayBuffer, error, loading };
};
