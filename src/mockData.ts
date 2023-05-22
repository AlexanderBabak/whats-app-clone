import { IChatData, IContact } from './interfaces/chatItem';

export const CHATSDATA: IChatData[] = [
  {
    userId: 'smirnova',
    name: 'Sara Smirnova',
    image: 'https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg',
    time: '23:30',
    unreadMsg: 0,
    messages: [
      { id: 12, userId: 'smirnova', text: 'Hello' },
      { id: 13, userId: 'babak', text: 'With suggested text and emoji replies' },
      { id: 14, userId: 'smirnova', text: 'Life is full of challenges, but with determination' },
    ],
  },
  {
    userId: 'borodko',
    name: 'Tatiana Borodko',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/06/46/adult-1867889_1280.jpg',
    time: '13:30',
    unreadMsg: 1,
    messages: [
      { id: 12, userId: 'borodko', text: 'Hello' },
      { id: 13, userId: 'babak', text: 'With suggested text and emoji replies' },
      { id: 14, userId: 'borodko', text: 'Life is full of challenges, but with determination' },
    ],
  },
  {
    userId: 'ivanov',
    name: 'Vova Ivanov',
    image: 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg',
    time: '6:30',
    unreadMsg: 0,
    messages: [
      { id: 12, userId: 'ivanov', text: 'Hello' },
      { id: 13, userId: 'babak', text: 'With suggested text and emoji replies' },
      { id: 14, userId: 'ivanov', text: 'Life is full of challenges, but with determination' },
    ],
  },
];

// хранится в файле на этом уровне и не меняется
export const CONTACTS: IContact[] = [
  {
    contactId: 'smith',
    name: 'Alexander Smith',
    image: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
  },
  {
    contactId: 'ivanov',
    name: 'Vova Ivanov',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/06/46/adult-1867889_1280.jpg',
  },
  {
    contactId: 'petrova',
    name: 'Sara Petrova',
    image: 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg',
  },
];
