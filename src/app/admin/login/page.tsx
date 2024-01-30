"use client"

import { Button } from "@/components/admin/button";
import { InputField } from "@/components/admin/inputField";
import { useState } from "react";
import * as api from "@/api/admin";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const Page = () => {

	const router = useRouter();
	const [passwordInput, serPasswordInput] = useState('');
	const [loading, setLoading] = useState(false);
	const [warning, setWarning] = useState('');

	const handleLoginButton = async () => {
		if (passwordInput) {
			setWarning('');
			setLoading(true);

			const token = await api.login(passwordInput);

			setLoading(false);

			if (!token) {
				setWarning("Acesso negado, tente novamente")
			} else {
				setCookie('token', token)
				router.push('/admin')
			}
		}
	}

	return (
		<div className="text-center py-4">
			<p className="text-center text-2xl">Qual a senha secreta?</p>
			<div className="mx-auto max-w-md ">

				<InputField
					type="password"
					value={passwordInput}
					onChange={e => serPasswordInput(e.target.value)}
					placeholder="Digite a senha"
					disabled={loading}
				/>

				<Button
					value={loading ? 'Carregando...' : 'Entrar'}
					onClick={handleLoginButton}
					disabled={loading}
				/>

				{warning &&
					<div className="border border-dashed border-gray-400 p-3 ">
						{warning}</div >}
			</div>

		</div>
	)
};

export default Page;