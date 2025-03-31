import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export function twc(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default twc;
