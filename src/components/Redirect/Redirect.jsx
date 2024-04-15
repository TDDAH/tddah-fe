import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect() {
    const navigate = useNavigate()
    console.log('this is loading the page')
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get('code');
        console.log('code before if statement', code)
        
        if (code) {
            console.log(code)
            const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
            const clientSecret = process.env.REACT_APP_GITHUB_SECRET;
            

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    client_id: clientId,
                    client_secret: clientSecret,
                    code: code
                })
            };
            fetch('http://localhost:8080/oauth/callback', requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // navigate('/home')
            })
            .catch(err => console.log(err))
                
        }
    }, []);

    return (
        <div>
            Redirecting...
        </div>
    );
}

export default Redirect;
