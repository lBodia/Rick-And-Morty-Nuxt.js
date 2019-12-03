export default {
  data() {
    return {
      page: 0,
      hasNextPage: false,
      loading: false,
      fetch: () => {
        throw new Error('fetch method should be implemented');
      },
    };
  },

  computed: {
    canLoad() {
      return this.hasNextPage && !this.loading;
    },
  },

  created() {
    this.showNextPage();
  },

  methods: {
    loadNextPage() {
      return this.fetch({
        page: ++this.page,
      });
    },

    async infiniteHandler($state) {
      this.loading = true;
      const data = await this.loadNextPage();
      this.handleResponseData(data);
      this.hasNextPage ? $state.loaded() : $state.complete();
      this.loading = false;
    },

    handleResponseData(data) {
      this.concatResults(data);
      this.hasNextPage = data.info.next !== '';
    },

    concatResults() {
      throw new Error('concatResults method should be implemented');
    },

    async showNextPage() {
      this.loading = true;
      const data = await this.loadNextPage();
      this.handleResponseData(data);
      this.loading = false;
    },
  },
};
