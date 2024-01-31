
import { getCookie } from "cookies-next";
import { req } from "./axios";
import { Event } from "@/types/Events";

export const login = async (password: string): Promise<string | false> => {
	try {
		const json = await req.post('/admin/login', { password })

		return json.data.token as string ?? false;

	} catch (error) {
		console.log(error);
		return false
	}
}

export const getEvents = async () => {
	try {
		const token = getCookie('token');

		const json = await req.get('/admin/event', {
			headers: { 'Authorization': `Token ${token}` }
		})

		return json.data.itens as Event[] ?? [];



	} catch (error) { return [] }
};

export const deleteEvents = async (id: number) => {

	const token = getCookie('token');

	const json = await req.delete(`/admin/event/${id}`, {
		headers: { 'Authorization': `Token ${token}` }
	})

	return !json.data.error;
};

