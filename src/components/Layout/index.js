import React from 'react'
import { Header } from '../Header'
import { Hero } from '../Hero'
import { Product } from '../Product'
import { Wrapper, Container } from "./styles";

export const Layout = () => {
    return (
        <Container>
            <Header />
            <Wrapper>
                <Product />
                <Hero />
            </Wrapper>
        </Container>

    )
}
