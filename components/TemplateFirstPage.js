"use client"

import { useRouter } from "next/navigation"

export default function TemplateFirstPage (){
    const router = useRouter()

    return(
        <div className="w-full h-full grid grid-cols-3 gap-4 p-4 ">
            <div className="bg-yellow-400 text-white p-4" onClick={()=>router.push("/brand")}>
                Marcas
            </div>
            <div className="bg-yellow-400 text-white p-4" onClick={()=>router.push("/product")}>
                Productos
            </div>
            <div className="bg-yellow-400 text-white p-4" onClick={()=>router.push("/productimage")}>
                Imagenes
            </div>

        </div>
    )
}