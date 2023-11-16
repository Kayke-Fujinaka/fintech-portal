export const isEmail = (email: string): boolean => {
  const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return EMAIL_REGEX.test(email);
};
