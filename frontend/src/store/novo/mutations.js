// src/store/modules/messages/mutations.js
export const addMessage = (state, message) => {
  state.messages.push(message);
};

export const deleteMessage = (state, messageId) => {
  state.messages = state.messages.filter(message => message.id !== messageId);
};
