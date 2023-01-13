import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme["blue-600"]};
    padding: 32px;
    border-radius: 10px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme["gray-300"]};
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

`

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;

    h3{
        color: ${props => props.theme["gray-100"]};
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
        flex: 1;
    }

    span{
        color: ${props => props.theme["gray-400"]};
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        /* text-transform: capitalize; */
    }
`