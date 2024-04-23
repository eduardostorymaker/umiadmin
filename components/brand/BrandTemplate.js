'use client'
import { useState,useEffect } from "react"



export default function BrandTemplate () {
    const [refresh,setRefresh] = useState(0)
    const [brandList,setBrandList] = useState("")
    const brandFiltered = brandList

    useEffect(()=>{
        const api = "http://localhost:3030/api/brand"
        fetch("http://localhost:3030/api/brand", {cache: "no-store"})
        .then( res => res.json())
        .then( data => setBrandList(data.data) )
    },[refresh])

    const createNewBrand = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.target)
            console.log(formData.get('brand'))
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name:formData.get('brand') 
                })
            }
            const api = "http://localhost:3030/api/brand"
    
            const response = await fetch(api,requestOptions)
            const data = await response.json()
            console.log(data)
            setRefresh(refresh+1)
        } catch(e) {
            console.log('error al crear campos en la DB:')
            console.log(e)
        }
    }


    return(
        <div>
            <form onSubmit={createNewBrand}>
                <input 
                    type="text" 
                    className="border-2 border-primary p-2 mr-2"
                    name="brand"
                />
                <button type="submit"
                    className="bg-yellow-400 p-2 text-white rounded-sm"
                >
                    Nuevo
                </button>
            </form>
            <div>
                {
                    brandFiltered
                    &&
                    brandFiltered.map(item=>
                        <div>
                            {
                                item.name
                            }
                        </div>    
                    )
                }
            </div>
        </div>
    )
}