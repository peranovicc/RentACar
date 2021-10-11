import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { black, cyan, gray, NAV_LINKS } from "../constants"
import logo from '../favicon.png'

const Header = ({ userId }) => {
    const [openState,setOpenState] = useState(false)
    const navLinks = NAV_LINKS(userId)
    const open = openState ? 'open' : ''

    const menuToggle = () => setOpenState(!openState)

    return (
        <StyledHeader>
            <div class={`menu-btn ${open}`}>
                <span class={`menu-btn_burger ${open}`} onClick={menuToggle}></span>
            </div>
            
            <nav class={`nav ${open}`}>
                <ul class={`nav ${open}`}>
                    <div class="header_logo" style={{position: "absolute",top:"10px"}}>
                        <img src={logo} alt="" width="100px"/>
                    </div>
                    {navLinks.map(x => {
                        return (
                            <li class={`nav_item ${open}`} onClick={menuToggle}>
                                <StyledLink to={x.link}>{x.text}</StyledLink>
                            </li>
                        )
                    })}
                    {/* <li class="nav_item">
                        <StyledLink to="/cars">Аутомобили</StyledLink>
                    </li>
                    <li class="nav_item">
                        <StyledLink to="/my-profile">Профил</StyledLink>
                    </li>
                    <li class="nav_item">
                        <StyledLink to="/logout" onClick={() => {
                            setUserId(null)
                            localStorage.removeItem('userId')
                        }}>Одјави се</StyledLink>
                    </li> */}
                </ul>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    z-index: 2;
    width: 100vw;
    padding: 1rem;
    transition: all 0.5s ease-in-out;
    height: 10vh;


    .menu-btn{
        position: absolute;
        z-index: 4;
        left: 2rem;
        top: 2rem;
        height: 20px;
        width: 28px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        &_burger{
            position: absolute;
            right: 0;
            top: 0.5rem;
            width: 20px;
            height: 3px;
            background: ${cyan};
            transition: all 0.5s ease-in-out;

            &::before{
                content: '';
                position: absolute;
                top: -8px;
                right: -4px;
                width: 28px;
                height: 3px;
                background: ${cyan};
                transition: all 0.5s ease-in-out;
            }
            &::after{
                content: '';
                position: absolute;
                top: 8px;
                right: -4px;
                width: 28px;
                height: 3px;
                background: ${cyan};
                transition: all 0.5s ease-in-out;
            }

            &.open{
                transform: rotate(720deg);
                background: transparent;
                &::before{
                    width: 20px;
                    transform: rotate(45deg) translate(5px, 8px);
                }
                &::after{
                    width: 20px;
                    transform: rotate(-45deg) translate(3px, -7px);
                }
            }
        }
        .nav {
            position: fixed;
            background: ${cyan};
            top: 0;
            left: 0;
            width: 100vw;
            opacity: 0.95;
            visibility: hidden;

            &.open {
                visibility: visible;
            }

            .nav{
                display: flex;
                flex-flow: column wrap;
                align-items: center;
                justify-content: center;
                height: 100vh;

                list-style: none;
                padding-right: 1rem;
                transform: translateX(-100%);
                transition: all 0.5s ease-in-out;

                &.open {
                    transform: translateX(0);
                }

                &_item {
                    transform: translateY(100vh);
                    border-bottom: 1px solid ${cyan};
                    transition: all 0.5s ease-in-out;

                    &.open{
                        transform: translateY(0);
                    }

                    &.active > .a {
                        display: inline-block;
                        color: ${cyan};
                        
                    }

                    .a {
                        display: inline-block;
                        padding: 1rem;
                        &:hover{
                            background-color: ${cyan};
                        }
                    }
                }
            }
}
    }

    .nav {
        position: fixed;
        background: ${black};
        top: 0;
        left: 0;
        width: 100vw;
        opacity: 0.95;
        visibility: hidden;

        &.open {
            visibility: visible;
        }

        .nav{
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            justify-content: center;
            height: 100vh;

            list-style: none;
            padding-right: 1rem;
            transform: translateX(-100%);
            transition: all 0.5s ease-in-out;

            &.open {
                transform: translateX(0);
            }

            &_item {
                transform: translateY(100vh);
                border-bottom: 1px solid ${gray};
                margin-bottom: 1rem;

                transition: all 0.5s ease-in-out;

                &.open{
                    transform: translateY(0);
                }

                &.active > a {
                    display: inline-block;
                    color: ${cyan}; 
                }

                a {
                    display: inline-block;
                    padding: 1rem;
                    color: ${cyan};
                    text-decoration: none;
                    &:hover{
                        background-color: ${cyan};
                        color: ${gray};
                    }
                }
            }
        }
    }
    
    @media screen and (min-width: 768px) {
        .menu-btn{
            display: none;
        }
        .nav{
            position: fixed;
            visibility: visible;
            width: 20%;
            opacity: 1;
            .nav{
                transform: none;
                &_item{
                    transform: none;
                    font-size: 2rem;
                }
            }
        }
    }
    @media screen and (min-width: 900px) {
        .nav{
            width: 30%;
        }
    }
    @media screen and (min-width: 1300px) {
        .nav{
            width: 20%;
        }
    }
`

const StyledLink = styled(Link)`
    /* margin-left: 10px;
    height: 50%;
    text-decoration: none;
    color: ${cyan};
    padding: 5px;
    border: 1px ${cyan} solid;
    display:flex;
    align-items:center;
    justify-content:center;
    align-self: center;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);

    :active{
        text-decoration: none;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
    }

    :hover{
        background-color: ${cyan};
        color: ${black};
    } 
    */
`



export default Header