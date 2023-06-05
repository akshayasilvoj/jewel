import './wishList.css'
import { NavLink } from 'react-router-dom'
import { useWish } from '../..'


import ProductCard from '../../components/ProductCard'
export default function WishList() {
  const { wishList } = useWish()
  return <div className="wishLish">
    <h1>Your Wish List</h1>
    <div className="productsContainer">

      {
         
        wishList?.backendWishList.length === 0 ? <p>Wishlist is empty... <NavLink to='/browse'><button>Browse shop</button></NavLink></p> :
          wishList?.backendWishList.map((item) => (
            <ProductCard item={item} inWishlist={true} />
          ))}
    </div>
  </div>

}