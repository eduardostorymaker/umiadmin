"use client"

import { useEffect, useState } from "react"

import ProductItemEdit from './ProductItemEdit'

const newProduct = {
    id: "2",
    name: "Producto Modelo",
    largename: "",
    sku: "abc",
    description: "",
    originalprice: "$20.00",
    finalprice: "$15.00",
    published: false,
    brand: 1,
    tags: ""
}

export default function ProductDynamicTemplate ({id}) {
    
    const [productData,setProductData] = useState(id==="new"?newProduct:"")
    const [brandData,setBrandData] = useState("")

    useEffect(() => {
        if (id!=="new") {
            const url = `http://localhost:3030/api/product/${id}`
            fetch(url, {cache: 'no-cache'})
                .then(res => res.json())
                .then(data => setProductData(data.data[0]))
        }

        const brandApi = "http://localhost:3030/api/brand"
        fetch(brandApi, {cache: "no-store"})
            .then( res => res.json())
            .then( data => setBrandData(data.data) )
    },[])

    const onChangeInput = (e) => {
        const {name} = e.target
        console.log(e.target)
        
        if (name === "published") {
            setProductData({
                ...productData,
                [name]:e.target.checked
            })

        } else if (name === "originalprice" || name === "finalprice") {
            if (/^\d+(\.\d{0,2})?$/.test(e.target.value)||e.target.value==="") {
                setProductData({
                    ...productData,
                    [name]:e.target.value
                })
            }
        }
        else {
            setProductData({
                ...productData,
                [name]:e.target.value
            })
        }
    }
    
    console.log(productData)


    return(
        <div>
            {
                productData && brandData
                ?
                <ProductItemEdit dataProduct={productData} dataBrand={brandData} onChangeInput={onChangeInput} id={id} />
                :
                "Cargando..."
            }
        </div>
    )
}