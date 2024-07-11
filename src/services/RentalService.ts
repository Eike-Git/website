import axios from 'axios';

const API_URL = 'http://100.68.230.120:1337'; // URL Strapi-API

interface RentalData {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    plz: string;
    rentalFrom: Date;
    rentalTo: Date;
    movieId: string;
}

export const setMoviesAsRented = async () => {
    try {
        const response = await axios.get(`${API_URL}/movies`);
        const movies = response.data;

        for (const movie of movies) {
            await axios.put(`${API_URL}/movies/${movie.id}`, { geliehen: true });
        }
    } catch (error) {
        console.error('Failed to set movies as rented:', error);
        throw new Error('Failed to set movies as rented');
    }
};

export const saveRentalData = async (rentalData: RentalData) => {
    try {
        const response = await axios.post(`${API_URL}/verleihs`, rentalData);
        return response.data;
    } catch (error) {
        console.error('Failed to save rental data:', error);
        throw new Error('Failed to save rental data');
    }
};
