"use client"

import { useState } from "react"
import { InputField } from "../inputField"
import { Button } from "../button"
import { z } from "zod"
import { ErrorItem, getErrorFromZod } from "@/utils/getErrorFromZod"
import * as api from "@/api/admin"

type Props = {
	refreshAction: () => void
}

export const EventAdd = ({ refreshAction }: Props) => {
	const [titleField, setTitleField] = useState('');
	const [descriptionField, setDescriptionField] = useState('');
	const [groupedField, setgroupedField] = useState(false);
	const [errors, setErros] = useState<ErrorItem[]>([])
	const [loading, setLoading] = useState(false)

	const eventSchema = z.object({
		titleField: z.string().min(1, "Preencha o titulo"),
		descriptionField: z.string().min(1, "Preencha a descrição"),
		groupedField: z.boolean()
	})


	const handleAddButton = async () => {
		setErros([]);
		const data = eventSchema.safeParse({ titleField, descriptionField, groupedField })
		if (!data.success) return setErros(getErrorFromZod(data.error))
		setLoading(true)

		const eventItem = await api.createEvent({
			title: data.data.titleField,
			description: data.data.descriptionField,
			grouped: data.data.groupedField,
		})

		setLoading(false)
		refreshAction()

	}

	return (
		<div>

			<div className="mb-5">
				<label>Titulo</label>
				<InputField
					value={titleField}
					onChange={e => setTitleField(e.target.value)}
					placeholder="Digite o titulo do evento"
					errorMessage={errors.find(item => item.field === 'titleField')?.message}
					disabled={loading}
				/>
			</div>

			<div className="mb-5">
				<label>Descrição</label>
				<InputField
					value={descriptionField}
					onChange={e => setDescriptionField(e.target.value)}
					placeholder="Qual a descrição do evento?"
					errorMessage={errors.find(item => item.field === 'descriptionField')?.message}
					disabled={loading}

				/>
			</div>

			<div className="mb-5">
				<label>Agrupar evento?</label>
				<input
					type="checkbox"
					value={titleField}
					onChange={e => setgroupedField(!groupedField)}
					placeholder="Digite o titulo do evento"
					className="block w-5 h-5 mt-3"
				/>
			</div>

			<div>
				<Button
					value={loading ? 'Adicionando...' : 'Adicionar Evento'}
					onClick={handleAddButton}
					disabled={loading}

				/>
			</div>
		</div>
	)
}