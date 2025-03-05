"use client";
import styled from "styled-components";
import '@fortawesome/fontawesome-free/css/all.min.css';


const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: #fff;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
`;

const Botao = styled.a`
 color: #00a8ff;
 float: right;
 width: 40px;
 height: 40px;  
 border-radius: 50%;
 background: #353b48;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: 2s;
`;

const SearchBarContainer = styled.div`
    display: flex;
    padding: 10px;
    border-radius: 40px;
    height: 40px;
    background: #353b48;
    color: white;

    &:hover ${SearchInput} {
        width: 240px; /* Ajuste o valor conforme necessário */
        padding: 0 6px;
    }

    &:hover ${Botao} {
        background: white;

    }
`;



export default function BarraPesquisa() {
    return (
        <SearchBarContainer>
            <SearchInput placeholder="Digite sua busca!" />
            <Botao><i className="fas fa-search"></i></Botao>
            
        </SearchBarContainer>
    );
}