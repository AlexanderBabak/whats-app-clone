import { IContact } from '../interfaces/chatItem';

export const transformNewUsers = (arr: IContact[]) => {
  return arr.map((item) => {
    return {
      userId: item.contactId,
      image: item.image,
      name: item.name,
    };
  });
};
