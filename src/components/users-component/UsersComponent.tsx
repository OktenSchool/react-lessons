import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {IUsersResponse} from "../../models/IUsersResponse.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";
import {useSearchParams} from "react-router";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage).then(({users}: IUsersResponse) => {

            setUsers(users);
        });
    }, [searchParams]);
    return (
        <div>
            {users.map((user: IUser) => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};
