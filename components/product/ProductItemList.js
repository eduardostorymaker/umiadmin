import { useState } from "react"
import Image from "next/image"

export default function ProductItemList({dataProduct,onSelectProduct}) {

    const images = dataProduct.images?dataProduct.images.split(","):[""]

    return(
        <div className="flex flex-col p-2 border-[1px] border-primary ">
            <div>
                <div
                    onClick={()=>onSelectProduct(dataProduct.id)}
                    className="p-2 bg-yellow-400 text-white"
                >
                    Editar
                </div>
            </div>
            <div>
                {
                    images.map(item =>
                        <div>
                            <Image src={images[0]} width={100} height={100} />
                        </div>
                        
                    )
                }
            </div>

            <div>
                <div className="text-sm text-blue-400">
                    id:
                </div>
                <div>
                    {dataProduct.id}
                </div>
            </div>
            <div>
                <div className="text-sm text-blue-400">
                    name:
                </div>
                <div>
                    {dataProduct.name} 
                </div>
           </div>
            <div>
                <div className="text-sm text-blue-400">
                    largename:
                </div>
                <div>
                    {dataProduct.largename} 
                </div>
           </div>
            <div>
                <div className="text-sm text-blue-400">
                    sku:
                </div>
                <div>
                    {dataProduct.sku} 
                </div>
           </div>
            <div>
                <div className="text-sm text-blue-400">
                    description:
                </div>
                <div>
                    {dataProduct.description} 
                </div>
           </div>
            <div>
                <div className="text-sm text-blue-400">
                    originalprice:
                </div>
                <div>
                    {dataProduct.originalprice} 
                </div>
           </div>
            <div>
                <div className="text-sm text-blue-400">
                    finalprice:
                </div>
                <div>
                    {dataProduct.finalprice} 
                </div>
           </div>
            <div>
                <div className="text-sm text-blue-400">
                    published:
                </div>
                <div>
                    {dataProduct.published} 
                </div>
           </div>
            <div>
                <div className="text-sm text-blue-400">
                    brand:
                </div>
                <div>
                    {dataProduct.brand} 
                </div>
           </div>
            <div>
                <div className="text-sm text-blue-400">
                    tags:
                </div>
                <div>
                    {dataProduct.tags} 
                </div>
           </div>

        </div>
    )
}