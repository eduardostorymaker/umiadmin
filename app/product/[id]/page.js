import ProductDynamicTemplate from "../../../components/product/dynamic/ProductDynamicTemplate"

export default function productById ({params}) {
    console.log(params)
    return(
        <div>
            <ProductDynamicTemplate id={params.id} />
        </div>
    )
}