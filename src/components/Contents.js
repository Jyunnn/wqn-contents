import React from 'react';
import styled from 'styled-components';

import ContentCard from './ContentCard.js'
import contentsData from '../assets/issue.json'

function Contents() {
    const content = contentsData.map((v)=>{
        return (
            <ContentCard href={v.src} key={v.src} name={v.name}></ContentCard>
        )
    })

    console.log(content);

    return (
        <Wrapper>
            { content }
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 40px;
    margin: auto;
    max-width: 960px;
    @media(max-width: 768px) {
        grid-template-columns: auto auto auto;
    }
`;

export default Contents;