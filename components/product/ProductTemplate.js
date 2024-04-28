'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import ProductItemList from "./ProductItemList"

const filterProducts = (list,filter) => {
    return list.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
}

export default function ProductTemplate (){

    const [productList,setProductList] = useState('')
    const [filter, setFilter] = useState('')
    const dataFiltered = productList?filterProducts(productList,filter):productList

    useEffect(()=>{
        const productApi = "http://localhost:3030/api/productweb"
        fetch(productApi, {cache: "no-store"})
            .then( res => res.json())
            .then( data => setProductList(data.data) )

    },[])

    const router = useRouter()

    const onSelectProduct = (id) => {
        router.push(`/product/${id}`)
    }

    return(
        <div>
            {           
                dataFiltered
                ?
                <div className="w-full h-full">
                    <div className="p-2 bg-yellow-400 text-white" onClick={()=>router.push("/product/new")}>
                        Nuevo Producto
                    </div>
                    
                    <div className="w-full h-full">
                        <div className="p-2 m-2 border-[1px] border-primary">
                            <div>Filtrar:</div>
                            <input type="text" value={filter} onChange={(e)=>setFilter(e.target.value)} className="w-full"/>
                        </div>
                        
                        <div className="w-full h-full grid grid-cols-4">
                            {
                                dataFiltered.map( item => 
                                    <ProductItemList dataProduct={item} onSelectProduct={onSelectProduct} />
                                )
                            }
                            </div>

                    </div>
                </div>
                :
                'Cargando...'
            }

        </div>
    )
} 