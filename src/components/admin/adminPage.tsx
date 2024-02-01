"use client"

import * as api from "@/api/admin"
import { Event } from "@/types/Events"
import { Children, useEffect, useState } from "react"
import { EventItem, EventItemNotFound, EventItemPlaceHolder } from "./events/eventItem"
import { ItemButton } from "./itemButton"
import { FaPlus } from "react-icons/fa"
import { ModalScreens } from "@/types/ModalScreens"
import { Modal } from "./modal"

export const AdminPage = () => {
	const [events, setEvents] = useState<Event[]>([])
	const [loading, setLoading] = useState(true);
	const [modalScreem, setModalScreem] = useState<ModalScreens>(null);

	const loadEvents = async () => {
		setLoading(true)
		const eventList = await api.getEvents()
		setLoading(false)
		setEvents(eventList)
	}

	useEffect(() => {
		loadEvents();
	}, [])



	return (
		<div>
			<div className="p-3 items-center flex">
				<h1 className=" text-2xl flex-1">Eventos</h1>
				<button>
					<ItemButton
						IconElement={FaPlus}
						onClick={() => setModalScreem('add')}
					/>
				</button>
			</div>
			<div className="my-3">
				{!loading && events.length > 0 && events.map(item => (
					<EventItem
						item={item}
						refreshAction={loadEvents}
						openModal={() => { }}
					/>
				))}

				{!loading && events.length === 0 && <EventItemNotFound />}
				{loading &&
					<>
						<EventItemPlaceHolder />
						<EventItemPlaceHolder />
						<EventItemPlaceHolder />
					</>
				}

			</div>

			{modalScreem && (
				<Modal onClose={() => setModalScreem(null)}>
					<p>tipo: {modalScreem}</p>
				</Modal>
			)}

		</div>
	)

}