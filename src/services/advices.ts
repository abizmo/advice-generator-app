import { Advice } from '../types/advices';

// eslint-disable-next-line import/prefer-default-export
export function getAdvice(): Promise<Advice> {
  return fetch('https://api.adviceslip.com/advice')
    .then((data) => data.json())
    .then(({ slip }) => ({ ...slip }))
    .catch(() => ({}));
}
