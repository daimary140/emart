import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Emart</Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => console.log(hellow)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">2</span>
      </button>
    </div>
  )
}

export default Navbar