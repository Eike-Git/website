<script>
import axios from 'axios';
import MovieVisuals from './MovieVisuals.vue';
import DropdownFilter from './DropdownFilter.vue';

export default {
  name: "DataComponent",
  components: {
    MovieVisuals,
    DropdownFilter
  },
  data() {
    return {
      dataFromApi: [],
      filteredData: [], // Initialisierte leere Liste für die gefilterten Daten
      selectedGenre: "" // Initial ausgewähltes Genre
    };
  },
  methods: {
    applyGenreFilter(genre) {
      this.selectedGenre = genre; // Setzen des ausgewählten Genres
      this.filterData(); // Filtermethode aufrufen
    },
    filterData() {
      if (this.selectedGenre === "") {
        this.filteredData = this.dataFromApi; // Wenn kein Genre ausgewählt ist, alle Daten anzeigen
      } else {
        this.filteredData = this.dataFromApi.filter(film => film.genre === this.selectedGenre); // Filtern nach Genre
      }
    },
    async fetchData() {
      try {
        const res = await axios.get('http://100.68.230.120:1337/movies');
        this.dataFromApi = res.data;
        this.filteredData = res.data; // Initial gefilterte Daten auf alle Daten setzen
      } catch (e) {
        console.error(e);
      }
    }
  },
  created() {
    this.fetchData(); // Beim Erstellen der Komponente Daten laden
  }
};
</script>
