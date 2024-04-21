import axios from 'axios';


export default {
  data() {
    return {
      filme: []
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:32804/api/filme')
      .then(response => {
        this.filme = response.data;
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Filmliste:', error);
      });
  }
}
