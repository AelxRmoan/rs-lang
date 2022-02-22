import React from 'react';

interface RequireAuth {
    children: JSX.Element;
}

export const RequireAuth = ({children}: RequireAuth) => {
    const isAuth = localStorage.getItem('token');

    if (isAuth) {
        return React.cloneElement(children, {authorized: true})
    }

    return React.cloneElement(children, {authorized: false})
}
