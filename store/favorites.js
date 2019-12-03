export const state = () => ({
  characters: [],
});

export const mutations = {
  toggleCharacter(state, id) {
    const index = state.characters.indexOf(id);

    if (index === -1) {
      state.characters.push(id);
      return;
    }

    state.characters.splice(index, 1);
  },
};

export const getters = {
  isCharacterLiked: state => id => state.characters.includes(id),
};
