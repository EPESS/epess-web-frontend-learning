import { gql, useQuery } from "@apollo/client";

type TUsersResponse = {
    users: TUsers[]
}
type TUsers = {
    avatarUrl: string
    email: string
    id: string
    name: string
}

const USERS = gql`
query Users ($name:String) {
    users(filter: { banned: { equals: false }, email: { contains: $name } }) {
        avatarUrl
        email
        id
        name
    }
}

`

export const useGetUsers = (name: string) => {
    return useQuery<TUsersResponse>(USERS, {
        variables: { name },
        skip: !name
    })
}