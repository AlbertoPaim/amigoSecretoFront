"use client"

import { Button } from "@/components/admin/button";
import { InputField } from "@/components/admin/inputField";
import { useState } from "react";

export const Page = () => {
    const [passwordInput, serPasswordInput] = useState('');

    const handleLoginButton = () => {

    }

    return (
        <div>
            PAINEL ADM - login
            <InputField
                type="password"
                value={passwordInput}
                onChange={e => serPasswordInput(e.target.value)}
                placeholder="Digite a senha"
            />
            <Button
                value="Entrar"
                onClick={handleLoginButton} />
        </div>
    )
};

export default Page;