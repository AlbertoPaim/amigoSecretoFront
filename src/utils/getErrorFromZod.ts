import { ZodError } from "zod";

export type ErrorItem = {
	field: string
	message: string
}
export const getErrorFromZod = (error: ZodError) => {
	const errorList: ErrorItem[] = [];

	for (let item of error.errors) {
		errorList.push({
			field: item.path[0].toString(),
			message: item.message
		})
	}

	return errorList
}