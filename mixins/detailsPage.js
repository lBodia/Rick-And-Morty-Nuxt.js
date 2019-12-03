export default {
  methods: {
    getIdsFromEndpoints(endpoints) {
      return endpoints.map(endpoint => endpoint.split('/').pop());
    },
  },
};
