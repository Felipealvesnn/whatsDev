// src/store/modules/messages/actions.js
export const addMessage = ({ commit }, message) => {
  commit('addMessage', message);
};

export const deleteMessage = ({ commit }, messageId) => {
  commit('deleteMessage', messageId);
};
