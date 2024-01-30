import * as api from "@/api/server"
import { redirect } from "next/navigation";

export const Page = async () => {
    const logged = await api.pingAdmin();

    if (!logged) return redirect('/admin/login');

    return (
        <div>
            PAINEL ADM
        </div>
    )
};

export default Page;