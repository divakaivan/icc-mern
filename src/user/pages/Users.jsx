import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ivan Ivan',
            image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            places: 3
        }
    ];

    return (
        <UsersList items={USERS}/>
    )
};

export default Users;