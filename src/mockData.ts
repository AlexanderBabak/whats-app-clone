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
      {
        id: 12,
        userId: 'borodko',
        text: "If you're installing this in a bare React Native app, you should also follow these additional installation instructions.",
      },
      { id: 13, userId: 'babak', text: 'See full documentation at' },
      {
        id: 14,
        userId: 'borodko',
        text: 'An asynchronous, unencrypted, persistent, key-value storage API.',
      },
    ],
  },
  {
    userId: 'ivanov',
    name: 'Vova Ivanov',
    image: 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg',
    time: '6:30',
    unreadMsg: 0,
    messages: [
      { id: 12, userId: 'ivanov', text: 'The Expo Go app is a great tool to get started' },
      {
        id: 13,
        userId: 'babak',
        text: 'Whe tradeoff is that Expo Go does not allow you to add custom native code',
      },
      { id: 14, userId: 'ivanov', text: 'You can leverage these libraries with development' },
      { id: 15, userId: 'ivanov', text: 'To make use of third-party libraries with custom native' },
      {
        id: 16,
        userId: 'babak',
        text: 'Development builds are like your own personal version of Expo Go',
      },
      {
        id: 17,
        userId: 'ivanov',
        text: 'they include the native runtime that powers your app, and you control what is included in that native runtime by adding or removing',
      },
      {
        id: 18,
        userId: 'babak',
        text: 'Development builds allow you to continue to build your app in JavaScript',
      },
      {
        id: 20,
        userId: 'ivanov',
        text: 'Learn how to start using custom native code in your app by switching from Expo Go',
      },
      {
        id: 21,
        userId: 'ivanov',
        text: 'You can also use development builds in this context ',
      },
      { id: 22, userId: 'babak', text: 'You can leverage these libraries with development' },
    ],
  },
  {
    userId: 'sidorov',
    name: 'Dima Sidorov',
    image: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg',
    time: '01:02',
    unreadMsg: 222,
    messages: [
      { id: 12, userId: 'sidorov', text: 'Hello' },
      { id: 13, userId: 'babak', text: 'With suggested text and emoji replies' },
      { id: 14, userId: 'sidorov', text: 'Life is full of challenges, but with determination' },
    ],
  },
  {
    userId: 'smith',
    name: 'Tina Smith',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
    time: '09:02',
    unreadMsg: 0,
    messages: [
      { id: 12, userId: 'smith', text: 'Hello' },
      { id: 13, userId: 'babak', text: 'With suggested text and emoji replies' },
      { id: 14, userId: 'smith', text: 'Life is full of challenges, but with determination' },
    ],
  },
  {
    userId: 'doe',
    name: 'John Doe',
    image: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
    time: '12:02',
    unreadMsg: 0,
    messages: [
      { id: 12, userId: 'doe', text: 'Hello' },
      { id: 13, userId: 'babak', text: 'With suggested text and emoji replies' },
      { id: 14, userId: 'doe', text: 'Life is full of challenges, but with determination' },
    ],
  },
];

// хранится в файле на этом уровне и не меняется
export const CONTACTS: IContact[] = [
  {
    contactId: 'dutch',
    name: 'Alexander Dutch',
    image: 'https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973_1280.jpg',
  },
  {
    contactId: 'ivanov',
    name: 'Vova Ivanov',
    image: 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg',
  },
  {
    contactId: 'petrova',
    name: 'Sara Petrova',
    image: 'https://cdn.pixabay.com/photo/2017/02/06/10/54/sad-2042536_1280.jpg',
  },
  {
    contactId: 'doe',
    name: 'John Doe',
    image: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
  },
  {
    contactId: 'smith',
    name: 'Tina Smith',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
  },
  {
    contactId: 'borodko',
    name: 'Tatiana Borodko',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/06/46/adult-1867889_1280.jpg',
  },
  {
    contactId: 'beauty',
    name: 'Jessey Beauty',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/11/24/woman-1869158_1280.jpg',
  },
  {
    contactId: 'bay',
    name: 'Alla Bay',
    image: 'https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg',
  },
];
