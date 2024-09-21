import bcrypt from 'bcrypt';

export const comparePassword = async (password, hash) => {
  const compPassword = await bcrypt.compare(password, hash);

  return compPassword;
}