"use-client"

import * as api from "@/api/server"
import { AdminPage } from "@/components/admin/adminPage";
import { redirect } from "next/navigation";

export const Page = async () => {
	const logged = await api.pingAdmin();

	if (!logged) return redirect('/admin/login');

	return (
		<div>
			<AdminPage />
		</div>
	)
};

export default Page;