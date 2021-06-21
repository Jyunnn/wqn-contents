import React from 'react';
import styled from 'styled-components';
import '../css/ContentCard.css'

function ContentsCard(props) {
    return (
        <div>
            <ContentsBox>
                <ContentsLink href={ props.href } target="_blank" rel='noreferrer'> 
                    <ContentsLinkText> { props.name } </ContentsLinkText>
                </ContentsLink>
            </ContentsBox>
        </div>
    )
}

const ContentsBox = styled.div`
    display: flex;
    width: 160px;
    height: 160px;
    background-color: #f39800;
    &:hover  {
        background-color: #000000;
    }
`;

const ContentsLink = styled.a`
    display: flex;
    margin: auto;
    text-decoration: none;
    width: 100%;
    height: 100%;
    font-size: 30px;
    color: white;
`;

const ContentsLinkText = styled.span`
    margin: auto;
`;


export default ContentsCard;