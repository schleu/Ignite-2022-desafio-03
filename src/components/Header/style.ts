import styled from "styled-components";
import Background from '../../assets/header-background.png'

export const Header = styled.div`
    width: 100vw;
    height: 296px;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center top;
    position: relative;
`

export const Title = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,20%);

    width: 864px;
    height: 212px;
    background-color: ${props => props.theme["blue-800"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    padding: 32px 40px;

`