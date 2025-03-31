import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx as classes } from 'clsx';

export type { ClassArray, ClassDictionary, ClassValue } from 'clsx';

export function clsx(...inputs: ClassValue[]) {
  return twMerge(classes(inputs));
}
