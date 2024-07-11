import axios from 'axios';

const API_URL = 'http://100.68.230.120:1337';

export const setMoviesAsRented = async (): Promise<void> => {
    try {
        const response = await axios.get(`${API_URL}/movies`);
        const movies = response.data;

        await Promise.all(movies.map((movie: any) => {
            if (!movie.geliehen) {
                return axios.put(`${API_URL}/movies/${movie.id}`, { geliehen: true });
            }
            return Promise.resolve();
        }));
    } catch (error) {
        console.error('Failed to set movies as rented:', error);
        throw new Error('Failed to set movies as rented');
    }
};

export const saveRentalData = async (rentalData: any): Promise<void> => {
    try {
        await axios.post(`${API_URL}/verleih`, rentalData);
    } catch (error) {
        console.error('Failed to save rental data:', error);
        throw new Error('Failed to save rental data');
    }
};

export const resetMovieStatus = async (): Promise<void> => {
    try {
        const response = await axios.get(`${API_URL}/movies`);
        const movies = response.data;

        await Promise.all(movies.map((movie: any) => {
            if (movie.geliehen) {
                return axios.put(`${API_URL}/movies/${movie.id}`, { geliehen: false });
            }
            return Promise.resolve();
        }));
    } catch (error) {
        console.error('Failed to reset movie status:', error);
        throw new Error('Failed to reset movie status');
    }
};

export const deleteRentalData = async (rentalTo: string): Promise<void> => {
    try {
        const response = await axios.get(`${API_URL}/verleih`);
        const verleihData = response.data;
        const currentDate = new Date().toISOString().split('T')[0];

        await Promise.all(verleihData.map((entry: any) => {
            const entryRentalTo = new Date(entry.rentalTo).toISOString().split('T')[0];
            if (entryRentalTo === currentDate) {
                return axios.delete(`${API_URL}/verleih/${entry.id}`);
            }
            return Promise.resolve();
        }));
    } catch (error) {
        console.error('Failed to delete rental data:', error);
        throw new Error('Failed to delete rental data');
    }
};
