import React from 'react'
import styled from 'styled-components'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header(){
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 24px;
        margin-top: 20px;
    `
    const LogoText = styled.div`
        margin-left: 14px;
        font-size: 25px;
        cursor: pointer;
    `
    const ButtonGroup = styled.div`
        display: flex;
        cursor: pointer;
    
        @media(max-width: 768px) {
            margin-right: -37px;
        }
    `
    const LeftButton = styled.div`
        margin-right: 5px;
        color: black;
        border: 2px solid #4643C3;
        diplay: flex;
       
        padding: 3px 17px 5px 16px;
        border-radius: 60px;
        :hover {
            background-color: #4643C3;
            color: #fff;
        }
    `
    const RightButton = styled(LeftButton)`
        background-color: #4643C3;
        color: #fff;
        margin-right: 41px;
        :hover {
            background: none;
            color: black;
        }
    `
    const StyledLink = styled(Link)`
        text-decoration: none;
        color: black;
    `
    
    return (
        
        <Container>
            <StyledLink to='/'>
            <LogoText>
                Linkify
            </LogoText>
            </StyledLink>
            <ButtonGroup>
            <StyledLink to='/account'>
                <LeftButton>
                     Login
                </LeftButton>
            </StyledLink>
            <StyledLink to='/account'>
                <RightButton>
                  Sign Up
                </RightButton>
            </StyledLink>
            </ButtonGroup>
        </Container>
    )
}


