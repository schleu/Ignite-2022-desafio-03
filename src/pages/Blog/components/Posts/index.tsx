import { PostItem } from "../PostItem"
import { Container } from "./style"

export interface iPost{
    id:string;
    title:string;
    description:string;
    time:Date; 
}

interface iPosts{
    posts: iPost[]
}

export const Posts =({posts}:iPosts) => {

    return <Container>
        {posts.map(e=> 
            <PostItem key={e.id} title={e.title} description={e.description} time={new Date(e.time)} />
        )}
    </Container>
}