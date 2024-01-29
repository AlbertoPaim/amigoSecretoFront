import { req } from "@/api/axios";
import { Event } from "@/types/Events";
import { SearchResult } from "@/types/SearchResult";

export const getEvent = async (id: number): Promise<Event | false> => {
    try {
        const json = await req.get(`event/${id}`);
        return (json.data.iten as Event) || false;
    } catch (error) {
        console.error("Erro ao obter evento:", error);
        return false;
    }
};

export const searchCPF = async (id_event: number, cpf: string): Promise<SearchResult | false> => {
    try {
        const json = await req.get(`event/${id_event}/search?cpf=${cpf}`);

        if (!json.data.person && !json.data.personMatched) {
        }
        return json.data as SearchResult;

    } catch (error) {
        return false
    }
};

