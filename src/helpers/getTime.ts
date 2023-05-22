export const getTime = () =>
  `${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}`;
