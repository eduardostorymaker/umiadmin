import ProductImageDynamicTemplate from "../../../components/productimage/dynamic/ProductImageDynamicTemplate";

export default function ProductImageUnit({params}) {

    return(
        <div>
            <ProductImageDynamicTemplate id={params.id} />
        </div>
    )
}