import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.api.services";
import User from "../user/User";

export default function Users({elevate}) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]))
    }, []);

    return (
        <div>
            {users.map(user => <User item={user} key={user.id} elevate={elevate}/>)}
        </div>
    );
}