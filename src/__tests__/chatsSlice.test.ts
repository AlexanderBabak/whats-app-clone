import {
  addMessage,
  chatsSlice,
  createChat,
  getData,
} from "../redux/chatsSlice";

const firstUser = {
  userId: "1",
  name: "User 1",
  image: "user1.jpg",
  time: "12:00 PM",
  unreadMsg: 0,
  messages: [],
};

const secondUser = {
  userId: "2",
  name: "User 2",
  image: "user2.jpg",
  time: "1:00 PM",
  unreadMsg: 0,
  messages: [],
};

describe("chatsSlice", () => {
  describe("addMessage", () => {
    it("should add a message to the user", () => {
      const initialState = {
        users: [firstUser, secondUser],
      };

      const action = addMessage({
        userId: "1",
        text: "Hello",
        author: "2",
      });

      const nextState = chatsSlice.reducer(initialState, action);

      expect(nextState.users[0].messages.length).toBe(1);
      expect(nextState.users[0].messages[0].text).toBe("Hello");
      expect(nextState.users[0].messages[0].userId).toBe("2");
    });
  });

  describe("createChat", () => {
    it("should create a new chat", () => {
      const initialState = {
        users: [firstUser],
      };

      const action = createChat({
        contactId: "2",
        name: "User 2",
        image: "user2.jpg",
      });

      const nextState = chatsSlice.reducer(initialState, action);

      expect(nextState.users.length).toBe(2);
      expect(nextState.users[1].userId).toBe("2");
      expect(nextState.users[1].name).toBe("User 2");
    });
  });

  describe("getData", () => {
    it("should set the chat data", () => {
      const initialState = {
        users: [],
      };

      const chatData = [firstUser, secondUser];

      const action = getData(chatData);

      const nextState = chatsSlice.reducer(initialState, action);

      expect(nextState.users.length).toBe(2);
      expect(nextState.users[0].userId).toBe("1");
      expect(nextState.users[1].userId).toBe("2");
    });
  });
});
