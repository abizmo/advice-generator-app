import { useEffect, useState } from 'react';

import { getAdvice } from '../services/advices';
import { Advice } from '../types/advices';

const initialState: Advice = {};

function useAdvice() {
  const [advice, setAdvice] = useState(initialState);

  useEffect(() => {
    getAdvice()
      .then((data) => setAdvice(data));
  }, []);

  const refreshAdvice = () => getAdvice().then((data) => setAdvice(data));

  return [advice, refreshAdvice] as const;
}

export default useAdvice;
