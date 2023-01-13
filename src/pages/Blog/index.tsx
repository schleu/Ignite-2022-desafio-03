import { iPost, Posts } from "./components/Posts"
import { Container } from "./style"

const data:iPost[] = [
    {
        id:"d406721e-8ba1-4445-ad8d-001531fffa96",
        title:"JavaScript data types and data structures",
        time: new Date("01/01/2023"),
        description:`
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean
        `,
    },
    {
        id:"7bf7b894-f502-4a39-9b74-29e688843254",
        title:"JavaScript data types and data structures",
        time: new Date("01/01/2023"),
        description:`
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean
        `,
    },
    {
        id:"d0a1c7f0-03a2-4ee0-b6b8-ac2c75a46003",
        title:"JavaScript data types and data structures",
        time: new Date("01/01/2023"),
        description:`
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean
        `,
    },
    {
        id:"22abd749-a20e-477a-bfa9-847773fda632",
        title:"JavaScript data types and data structures",
        time: new Date("01/01/2023"),
        description:`
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean
        `,
    },
    {
        id:"85495ec5-ec31-4dc3-b041-7f8d64540104",
        title:"JavaScript data types and data structures",
        time: new Date("01/01/2023"),
        description:`
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean
        `,
    },
]

export const Blog = () => {

    return <Container>
        <Posts posts={data} />
    </Container>
}