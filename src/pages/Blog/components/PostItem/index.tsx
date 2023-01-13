import { Container, Title } from "./style"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from "date-fns/esm/locale";

interface iPostItem{
    title:string;
    time:Date;
    description:string;
}

export const PostItem = ({description, time, title}:iPostItem) => {

    const distaceToNow = formatDistanceToNow(time, {
        addSuffix:true,
        locale: ptBR,
    })

    const slicedDate = distaceToNow.slice(1,distaceToNow.length)

    

    return <Container>
        <Title>
            <h3>
                {title}
            </h3>
            <span>
                {distaceToNow.charAt(0).toUpperCase()+slicedDate}
            </span>
        </Title>
        {description.length>180 ? `${description.slice(0,194)}...` : description}
    </Container>
}