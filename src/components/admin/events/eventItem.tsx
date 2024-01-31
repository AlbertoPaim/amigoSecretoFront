import { Event } from "@/types/Events"
import { ItemButton } from "../itemButton";
import { FaLink, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import * as api from "@/api/admin"
type Props = {
	item: Event;
	refreshAction: () => void;
	openModal: (event: Event) => void
}

export const EventItem = ({ item, refreshAction, openModal }: Props) => {

	const handleEditButton = () => openModal(item)

	const handleDeleteButton = async () => {
		if (confirm(`Tem certeza que deseja deletar o evento: ${item.title}`))
			await api.deleteEvents(item.id)
	}

	return (
		<div className="border border-gray-900  rounded mb-3 p-3  justify-center items-center flex  flex-col md:flex-row ">
			<div className="flex-1 text-xl md:text-base">	{item.title}</div>
			<div className="flex items-center gap-1 mt-2 md:mt-0">

				{item.status &&
					<div>
						<ItemButton
							IconElement={FaLink}
							label="Link do evento"
							href={`event/${item.id}`}
							target="_blank"
						/>
					</div>
				}

				<ItemButton
					IconElement={FaRegEdit}
					label="Editar"
					onClick={handleEditButton}
				/>
				<ItemButton
					IconElement={FaRegTrashAlt}
					label="Deletar"
					onClick={handleDeleteButton}
				/>
			</div>

		</div>
	)
}


export const EventItemPlaceHolder = () => {
	return (
		<div className="w-full h-16 border border-gray-700 rounded-md mb-3
		 bg-gradient-to-r from-gray-900 to-gray-950
		 animate-pulse
		">Carregando...</div>
	)
}

export const EventItemNotFound = () => {
	return (
		<div className="text-center py-4">Não há eventos cadastrados</div>
	)
}