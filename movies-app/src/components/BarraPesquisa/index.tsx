"use client";
import styled from "styled-components";

const SearchBar = styled.div`
    display: flex;
    gap: 30px;
    input {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        
    }
    button {
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #f5f5f5;
        cursor: pointer;
        
    }
`
export default function BarraPesquisa() {

    return (
        <SearchBar>
            <input type="text" placeholder="Pesquise seu filme" />
            <button>Pesquisar</button>
         </SearchBar>
    )
}