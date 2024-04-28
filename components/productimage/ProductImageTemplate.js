"use client"
import { useRouter } from "next/navigation"

export default function ProductImageTemplate () {
    const router = useRouter()
    return(
        <div>
            <div className="p-2 bg-yellow-400 text-white" onClick={()=>router.push("/productimage/new")}>
                Nueva Imagen
            </div>
        </div>
    )
}