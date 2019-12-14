<template>
  <div>
    <h1><span>Rick And Morty API</span> Nuxt.js App</h1>
    <div class="mb4">
      This is a tiny Nuxt.js application, which uses
      <a href="https://rickandmortyapi.com/">Rick & Morty API</a> to visualize
      characters and episodes from Rick & Morty TV show.
    </div>

    <h2 v-if="characters.length > 0" data-aos="fade-up">
      Alternate Versions of <span>{{ characterName }}</span>
    </h2>
    <characters-list :characters="characters"></characters-list>
  </div>
</template>

<script>
import CharactersList from '~/components/characters/List';
import { getCharacters } from '~/api';

export default {
  transition: 'fade',

  head() {
    return {
      title: 'Homepage',
    };
  },

  components: {
    CharactersList,
  },

  data() {
    return {
      totalCharacters: 5,
      totalEpisodes: 8,
      characters: [],
      episodes: [],
    };
  },

  async asyncData() {
    const characterNames = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];
    const randomIndex = Math.floor(Math.random() * characterNames.length);
    const characterName = characterNames[randomIndex];

    try {
      const characters = await getCharacters({ name: characterName });

      return {
        characters: characters.results,
        characterName,
      };
    } catch (e) {
      return {};
    }
  },
};
</script>
