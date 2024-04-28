"use client"

import { useEffect, useState } from "react"

const filterProductByName = (list,filter) => {
    return list.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
}

const newProductImage = {
    id: 0,
    name: "",
    url: "https://static.vecteezy.com/system/resources/thumbnails/022/385/025/small/a-cute-surprised-black-haired-anime-girl-under-the-blooming-sakura-ai-generated-photo.jpg",
    product: "2",
    priority: 1
}
 
export default function ProductImageDynamicTemplate({id}) {

    const [dataProductImage,setDataProductImage] = useState(id==="new"?newProductImage:"")
    const [dataProduct,setDataProduct] = useState("")
    const [filterProduct,setFilterProduct] = useState("")
    const dataProductFiltered = dataProduct?filterProductByName(dataProduct,filterProduct):dataProduct
    
    useEffect(()=>{
        if (id !== "new") {
            const urlProductImage=`http://localhost:3030/api/productimage/${id}`
            fetch(urlProductImage,{cache:'no-cache'})
                .then(res => res.json())
                .then(data => setDataProductImage(data.data[0]))
        }

        const urlProduct=`http://localhost:3030/api/product`
        fetch(urlProduct,{cache:'no-cache'})
            .then(res => res.json())
            .then(data => setDataProduct(data.data))
    },[])

    const onSendChangeProductImage = async () => {
        const areYouSure = window.confirm("La información se actualizará en la base de datos. ¿Desea continuar?")
        if (areYouSure) {
            console.log("Actualizando...")
            const {
                id,
                name,
                url,
                product,
                priority
            } = dataProductImage

            try {
                const requestOptions = {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id,
                        name,
                        url,
                        product,
                        priority
                    })
                }
                const api = "http://localhost:3030/api/productimage"
        
                const response = await fetch(api,requestOptions)
                const dataInfo = await response.json()
                if (dataInfo.error) {
                    throw new Error("Error "+ dataInfo.status + ": " +dataInfo.error)
                }
                console.log(dataInfo) 
            } catch (error) {
                console.log("Error en el update")
                console.log(error)
            }
        }
    }

    const onSendNewProductImage = async () => {
        const areYouSure = window.confirm("La información se creará en la base de datos. ¿Desea continuar?")
        if (areYouSure) {
            console.log("Creando...")
            const {
                name,
                url,
                product,
                priority
            } = dataProductImage

            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({    
                        name,
                        url,
                        product,
                        priority
                    })
                }
                const api = "http://localhost:3030/api/productimage"
        
                const response = await fetch(api,requestOptions)
                const dataInfo = await response.json()
                if (dataInfo.error) {
                    throw new Error("Error "+ dataInfo.status + ": " +dataInfo.error)
                }
                console.log(dataInfo) 
            } catch (error) {
                console.log("Error en el update")
                console.log(error)
            }
        }
    }

    const onChangeProductImage = (e) => {
        const {name,value} = e.target
        setDataProductImage({
            ...dataProductImage,
            [name]: value       
        })
    }

    const onChangeProduct = (id) => {
        setDataProductImage({
            ...dataProductImage,
            product: id       
        })
    }

    console.log(dataProduct)
    return(
        <div>
            {
                dataProductImage && dataProduct
                ?
                <div className="flex flex-col">
                    <div>
                        <button className="p-2 bg-yellow-400 text-white" onClick={id==="new"?onSendNewProductImage:onSendChangeProductImage}>
                            {
                                id === "new"
                                ?
                                "Guardar Nuevo"
                                :
                                "Guardar Cambios"
                            }
                        </button>
                        <div>
                            <div>
                                nombre:
                            </div>
                            <input type="text" name="name" value={dataProductImage.name} className="border-[1px] border-primary w-full" onChange={onChangeProductImage} />
                        </div>
                        <div>
                            <div>
                                prioridad:
                            </div>
                            <input type="text" name="priority" value={dataProductImage.priority} className="border-[1px] border-primary w-full" onChange={onChangeProductImage}  />
                        </div>
                        <div>
                            <div>
                                url:
                            </div>
                            <input type="text" name="url" value={dataProductImage.url} className="border-[1px] border-primary w-full" onChange={onChangeProductImage}  />
                        </div>
                        <div>
                            <div>
                                producto:
                            </div>
                            <div>
                                {dataProduct.find(item => item.id === dataProductImage.product).name}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <input type="text" onChange={(e) => setFilterProduct(e.target.value)} className="w-full p-2 border-[1px] border-primary" />
                        </div>
                        {
                            dataProductFiltered.map(item =>
                                <div className="p-2 rounded-md border-[1px] border-primary" onClick={()=>onChangeProduct(item.id)} >
                                    {
                                        item.name
                                    }
                                </div>    
                            )
                        }
                    </div>

                    
                </div>

                :
                "Cargando"
            }
        </div>
    )
}