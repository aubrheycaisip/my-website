import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav`
    position: fixed;
    width: 100vw;
    z-index: 2;
    background-color: transparent;  
`;
export const NavLink = styled(Link)`
    margin-right: 25px;
    text-decoration: none;
    color: #2bae66ff;
    padding: 0.5rem 1rem;

    &.active{
        background-color: #2bae66ff;
        border-radius: 4px;
        color: whitesmoke;
    }
    &.hover{
        background-color: #2bae66ff;
        border-radius: 4px;
        transition: all 0.3s ease-out;
        color: whitesmoke;
    }
`;
export const NavMenu = styled.div`
    list-style-type: none;
    float: right;
    display: flex;
    margin-right: 50px;
    font-weight: bold;
    padding-top: 26px;
    padding-bottom: 26px;
`