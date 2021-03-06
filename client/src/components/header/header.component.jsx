import React, {useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'

import { cartContex } from '../../providers/cart/cart.provider'

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const {hidden} = useContext(cartContex);
    const dispatch = useDispatch();

    return(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            {
                currentUser ? 
                    <OptionLink as='div'>Welcome back: <b>{currentUser.displayName}</b></OptionLink> 
                    : ''
            }
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ? 
                    <OptionLink as='div' onClick={ () => { dispatch(signOutStart()) } }>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? false : <CartDropdown />
        }        
    </HeaderContainer>
    )
}

export default Header;