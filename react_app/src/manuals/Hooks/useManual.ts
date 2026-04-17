import { useEffect, useState } from "react"
import { getManualById } from "../Api/manualService";
import type { ManualResponse } from "../Api/manual.interface";

export const useManual = (id: string | null) => {
    const [data, setData] = useState<ManualResponse | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await getManualById(id);
                setData(result);
            } catch (error) {
                
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return {
        data,
        loading
    };
}