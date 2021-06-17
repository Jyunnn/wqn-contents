import React, { useState } from 'react';
import styled from 'styled-components';


function Contents() {
    return (
        <Wrapper>
            <ContentsBox>
                <ContentsLink href="https://e.issuu.com/anonymous-embed.html?u=tel5430196&d=stationery_4d9f2dbce6f55c" target="_blank" rel='noreferrer'> 書寫筆類</ContentsLink>
            </ContentsBox>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    margin: auto;
    max-width: 960px;
`;

const ContentsLink = styled.a`
    text-decoration: none;
    font-size: 36px;
    color: white;
`;

const ContentsBox = styled.div`
    width: 200px;
    height: 200px;
    background-color: #fdac42;
`;

export default Contents;