import { ReactNode } from "react"
import { Header, Title } from "./style"

interface iHeaderDefault{
    children:ReactNode
}

export const HeaderDefault = ({children}:iHeaderDefault) => {

    return <Header>
        <Title>
            {children}
        </Title>
    </Header>
}