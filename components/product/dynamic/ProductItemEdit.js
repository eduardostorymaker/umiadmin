import { useState } from "react"

export default function ProductItem({dataProduct,dataBrand, onChangeInput,id}) {

    const onSendChangeProduct = async () => {
        const areYouSure = window.confirm("La información se actualizará en la base de datos. ¿Desea continuar?")
        if (areYouSure) {
            console.log("Actualizando...")
            const {
                id,
                name,
                largename,
                sku,
                description,
                originalprice,
                published,
                finalprice,
                tags,
                brand
            } = dataProduct

            try {
                const requestOptions = {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id,
                        name,
                        largename,
                        sku,
                        description,
                        originalprice,
                        published,
                        finalprice,
                        tags,
                        brand
                    })
                }
                const api = "http://localhost:3030/api/product"
        
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

    const onSendNewProduct = async () => {
        const areYouSure = window.confirm("La información se actualizará en la base de datos. ¿Desea continuar?")
        if (areYouSure) {
            console.log("Creando...")
            const {

                name,
                largename,
                sku,
                description,
                originalprice,
                published,
                finalprice,
                tags,
                brand
            } = dataProduct

            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
        
                        name,
                        largename,
                        sku,
                        description,
                        originalprice,
                        published,
                        finalprice,
                        tags,
                        brand
                    })
                }
                const api = "http://localhost:3030/api/product"
        
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

    const moneyToNumber = (money) =>{
        return money?money.replace('$','').trim():0
    }


    return(
        <div>
            <button onClick={id==="new"?onSendNewProduct:onSendChangeProduct} className="p-2 bg-yellow-400 text-white">
                {
                    id==="new"
                    ?
                    "Guardar Nuevo"
                    :
                    "Guardar Cambios"
                }
            </button>

            <div className="flex w-full flex-wrap">
                <div className="w-[40px]">
                    <div>
                        id:
                    </div>
                    <input type="text" name={"id"} value={dataProduct.id } className="border-[1px] border-primary w-full" />
                </div>
                <div className="w-[600px]">
                    <div>
                        name:
                    </div>
                    <input type="text" name={"name"} value={dataProduct.name} onChange={onChangeInput} className="border-[1px] border-primary w-full" />
                </div>
                <div className="w-[1000px]">
                    <div>
                        largename:
                    </div>
                    <input type="text" name={"largename"} value={dataProduct.largename} onChange={onChangeInput} className="border-[1px] border-primary w-full" />
                </div>
                <div>
                    <div>
                        sku:
                    </div>
                    <input type="text" name={"sku"} value={dataProduct.sku} onChange={onChangeInput} className="border-[1px] border-primary w-full" />
                </div>
                <div className="w-[1000px]">
                    <div>
                        description:
                    </div>
                    <input type="text" name={"description"} value={dataProduct.description} onChange={onChangeInput} className="border-[1px] border-primary w-full" />
                </div>
                <div>
                    <div>
                        originalprice:
                    </div>
                    <input type="text" name={"originalprice"} value={moneyToNumber(dataProduct.originalprice)} onChange={onChangeInput} className="border-[1px] border-primary w-full" />
                </div>
                <div>
                    <div>
                        finalprice:
                    </div>
                    <input type="text" name={"finalprice"} value={moneyToNumber(dataProduct.finalprice)} onChange={onChangeInput} className="border-[1px] border-primary w-full" />
                </div>
                <div>
                    <div>
                        published:
                    </div>
                    <input type="checkbox" name={"published"} value={dataProduct.published} onChange={onChangeInput} checked={dataProduct.published} className="border-[1px] border-primary w-full" />
                </div>
                <div>
                    <div>
                        brand:
                    </div>
                    <select name={"brand"} onChange={onChangeInput} className="border-[1px] border-primary w-full" >
                        {
                            dataBrand.map(item => 
                                <option value={item.id} selected={parseInt(dataProduct.brand) === parseInt(item.id)} >
                                    {
                                        item.name
                                    }
                                </option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <div>
                        tags:
                    </div>
                    <input type="text" name={"tags"} value={dataProduct.tags} onChange={onChangeInput} className="border-[1px] border-primary w-full" />
                </div>

            </div>
        </div>
    )
}