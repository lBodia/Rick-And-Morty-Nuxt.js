import VuexPersistence from 'vuex-persist';
import localforage from 'localforage';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      storage: localforage,
      modules: ['favorites'],
      asyncStorage: true,
    }).plugin(store);
  });
};
