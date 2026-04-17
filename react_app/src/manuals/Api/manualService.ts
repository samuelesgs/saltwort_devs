import { api } from "./manual.api"
import type { ManualResponse } from "./manual.interface";

export const getManualById = async (idManual: string): Promise<ManualResponse> => {
    try {
        const response = await api.get(`manuals/${idManual}`);
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.log({ error });
        throw error;
    }
}