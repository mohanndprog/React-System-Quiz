import axios from 'axios';

const baseUrl = axios.create({baseURL:"https://quranquizwizard.com/api/admin/"})

export default baseUrl