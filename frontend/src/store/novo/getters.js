// src/store/modules/messages/getters.js
export const allMessages = (state) => state.messages;
export const messageById = (state) => (id) => state.messages.find(message => message.id === id);
