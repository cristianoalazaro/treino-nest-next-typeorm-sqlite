import { gql, useQuery } from '@apollo/client';

export const userQuery = gql`
    query getUsers {
        getUsers {
            id
            name
        }
    }
`;

export const getUsers = () => {
    return useQuery(userQuery);
}