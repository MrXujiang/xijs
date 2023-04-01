/**
 *
 * @param email
 * @returns
 */
const isEmail = (email: string): boolean => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

export default isEmail;
