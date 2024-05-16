import { JsonFile } from '@/model/JsonFile';
import { create } from 'zustand';

type Store = {
    data: JsonFile | null;
    setData: () => void;
};

export const useDescription = create<Store>()((set) => ({
    data: null,
    setData: async () => {
        try {
            const response = await fetch('/myData.json');

            if (!response.ok) {
                console.error('Failed to fetch data:', response.statusText);
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();

            set({ data: jsonData }); // Set the fetched data in the store
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
}));
