import { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { LoginContext } from './LoginContext'

function ScrollToTop({ history }) {
    const { verifyToken, token } = useContext(LoginContext)

    useEffect(() => {
        const unlisten = history.listen(() => {

            //verifyToken(token)

        });
        return () => {
            unlisten()
        }
    }, []);

    return (null);
}

export default withRouter(ScrollToTop);