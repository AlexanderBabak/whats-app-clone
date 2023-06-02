import { useAppSelector } from '../redux/hooks';

export const findUserById = (userId: string | number) => {
  const { groups } = useAppSelector((state) => state.groups);
  const foundUser = groups.flatMap((group) => group.users).find((user) => user.userId === userId);

  return foundUser ? foundUser.name : null;
};
