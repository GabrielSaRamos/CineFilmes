"use client";

import BarraPesquisa from '../BarraPesquisa';
import './index.scss';
import styled from 'styled-components';

const Links = styled.div`
    display: flex;
    gap: 20px;  
    a {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        transition: 0.6s;
    }

    a:hover {
        color: #cccccc;
        
    }
`


export default function Navbar() {
    return (
        <nav className="navbar">
            <div className='nav-title'>
                <h1 className="page-title"><a href="">Cinemack</a></h1> 
            </div>
            <Links>
                <a href='/movies'>Movies</a>
                <a href='/series'>Series</a>
                <a href='/favorites'>Favorites</a>
            </Links>

            <BarraPesquisa />

        </nav>
    )
}