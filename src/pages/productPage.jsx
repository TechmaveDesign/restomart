import InnerBanner from '../componant/inner-banner'
import Pramotion from '../componant/pramotion'
import SimilarProducts from '../componant/Similar-Products'
import ProductFilter from '../componant/ProductFilter'
const ProductPage = () =>{
    return (
        <>
        <InnerBanner heading="Product page" li1="Home" li2="Product page" />
          <ProductFilter />
          {/* <SimilarProducts /> */}
        </>
    )
}

export default ProductPage