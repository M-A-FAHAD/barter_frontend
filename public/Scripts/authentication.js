import { setAuthentication } from '../../public/RTK/Slices/authentication';
import Cookies from 'js-cookie';

export const authentication = async (dispatch) => {
    try {
        const token = Cookies.get('token');
        console.log(token);
        if (token) {
            const res = await fetch('https://barter-backend.vercel.app/user/authentication', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    token: token,
                },
            });
            const jsonRes = await res.json();
            if (jsonRes.authentication === true) {
                dispatch(setAuthentication(jsonRes.UserData)); // Use dispatch to dispatch the action
            }
        }
    } catch (err) {
        console.error(err);
    }
};