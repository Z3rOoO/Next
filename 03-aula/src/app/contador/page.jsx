"use client"

import { useEffect, useState } from "react"

export default function Contador(){
    
    const [contador, setContador] = useState(0)

   function handleAddContador(){
    if (contador==100) return
    setContador(contador+1)
   }

   function handleMinusContador(){
    if (contador==0)return
    setContador(contador-1)
   }

    return(
        <>
        <h2>Contador usando useState</h2>
        <p>{contador}</p>
        <button type="button" onClick={handleAddContador}>
            adicionar
        </button>
        <button type="button" onClick={handleMinusContador}>
            subtrair
        </button>
        </>
    )
}