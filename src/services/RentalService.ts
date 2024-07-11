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

export const resetMovieStatus = async () => {
    try {
        const response = await axios.get(`${API_URL}/movies`);
        const movies = response.data;

        for (const movie of movies) {
            await axios.put(`${API_URL}/movies/${movie.id}`, { geliehen: false });
        }
    } catch (error) {
        console.error('Failed to reset movie status:', error);
        throw new Error('Failed to reset movie status');
    }
};

export const deleteRentalData = async (rentalTo: Date) => {
    try {
        const response = await axios.delete(`${API_URL}/verleihs`, {
            data: { rentalTo }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to delete rental data:', error);
        throw new Error('Failed to delete rental data');
    }
};
