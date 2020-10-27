import React from 'react';
import styled from 'styled-components';

import { Wrapper, Card, Templates } from './styles'

import logo from '../../images/logo.svg';

export default function Home() {
    return (
    <Wrapper>
        <img src={logo} alt= "Mememaker" />

        <Card>
            <h2> Selcione um template </h2>
        <Templates>
            <button type="button">
                <img src="" alt= "Template 1" />
            </button>
            <button type="button">
                 <img src="" alt= "Template 1" />
                        </button>
            <button type="button">
                <img src="" alt= "Template 1" />
                        </button>
            <button type="button">
                <img src="" alt= "Template 1" />
                        </button>
        </Templates>
            <h2> Textos </h2>
        </Card>

    </Wrapper>

  
    );
}