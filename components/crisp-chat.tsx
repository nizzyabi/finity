"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("5aa43de9-deee-4508-b7d2-c11bea32676b")
    }, []);

    return null;
}