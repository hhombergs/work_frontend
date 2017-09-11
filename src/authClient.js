/*
* @Author: hhombergs
* @Date:   2017-09-04
* @Last Modified by:   hhombergs
* @Last Modified time: 2017-09-07
*/

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('http://192.168.56.101/auth', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                sessionStorage.setItem('token', token);
            });
    }
    if (type === AUTH_LOGOUT) {
        sessionStorage.removeItem('token');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            sessionStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return sessionStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unkown method');
};
