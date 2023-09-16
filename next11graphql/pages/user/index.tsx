import { useLazyQuery, useQuery } from "@apollo/client";
import { userQuery } from "../../queries";
import Link from "next/link";
import { getUsers } from "../../queries";
import { useEffect } from "react";


export default function User() {
    //const { data, loading, error } = useQuery(userQuery);
    //const [getUsers, { data }] = useLazyQuery(userQuery);

    useEffect(() => {
        getUsers();
    },[]);

    const { data } = getUsers();

    return (
        <>
            <h1>USER PAGE</h1>
            <Link href="/">HOME</Link>

            {data &&
                <ul>
                    {data.getUsers.map((item, index) => (
                        <li key={index}>
                            {`${item.id} - ${item.name}`}
                        </li>
                    ))}
                </ul>
                //<p>{`${data.getUsers.id} - ${data.getUsers.name}`}</p>
            }
        </>
    )
}