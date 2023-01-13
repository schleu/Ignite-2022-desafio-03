import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 32px;
    img{
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }    
`

export const Bio = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: ${props=>props.theme["blue-400"]};
`
export const BioTitle = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    
    a{
        display: flex;
        justify-content:center;
        align-items: center;
        font-size: 12px;
        color: ${props=>props.theme["blue-300"]} !important;
        gap: 8px;
        text-decoration: none;
        
        path{
            color: ${props=>props.theme["blue-300"]} !important;        
        }
        
    }
`
export const SocialMedias = styled.div`
    display: flex;
    gap:24px;
`
export const SocialMedia = styled.div`
    display: flex;
    gap:8px;
    align-items: center;
    justify-content: center;

    path{
        color: ${props=>props.theme["blue-400"]};
    }    
`