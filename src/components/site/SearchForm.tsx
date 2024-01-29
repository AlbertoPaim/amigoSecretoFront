"use client"

import { escapeCpf } from "@/utils/escapeCpf";
import { useState } from "react";

type Props = {
    onSearchButton: (cpf: string) => void;
    loading: boolean;
}
export const SearchForm = ({ onSearchButton, loading }: Props) => {
    const [inputCpf, setinputCpf] = useState('')

    return (
        <section>
            <p className="mb-3 text-xl">Qual seu CPF?</p>

            <input type="text" inputMode="numeric" placeholder="Digite  seu Cpf"
                className="w-full p-3 bg-white text-black text-center text-4xl"
                autoFocus
                value={inputCpf}
                onChange={e => setinputCpf(escapeCpf(e.target.value))}
                disabled={loading}
            />

            <button className="w-full p-3 mt-3 rounded-lg bg-blue-800 text-white text-4xl border-b-4 border-blue-600 hover:opacity-80 active:border-blue-800"
                onClick={() => onSearchButton(inputCpf)}
                disabled={loading}
            >
                {loading ? 'Carregando' : 'Entrar'}</button>
        </section>
    );
}