"use client"

import * as api from "@/api/admin"
import { Event } from "@/types/Events"
import { useEffect, useState } from "react"
import { EventItemNotFound, EventItemPlaceHolder } from "./events/eventItem"
import { ItemButton } from "./itemButton"
import { FaPlus } from "react-icons/fa"

export const AdminPage = () => {
	const [events, setEvents] = useState<Event[]>([])
	const [loading, setLoading] = useState(true);

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
						onClick={() => { }}
					/>
				</button>
			</div>
			<div className="my-3">
				{!loading && events.length > 0 && events.map(item => (
					<div key={item.id}>{item.title}</div>
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
		</div>
	)

}