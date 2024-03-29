// import React, { useEffect } from 'react';

// function Redirect() {
//     console.log('this is loading the page')
//     useEffect(() => {
//         const queryParams = new URLSearchParams(window.location.search);
//         const code = queryParams.get('code');
//         console.log('code before if statement', code)

//         if (code) {
//             console.log(code)
//             const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
//             const clientSecret = process.env.REACT_APP_GITHUB_SECRET;
//             // const redirectUri = process.env.REACT_APP_REDIRECT;

//             const requestOptions = {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     client_id: clientId,
//                     client_secret: clientSecret,
//                     code: code
//                 })
//             };

//             fetch('https://github.com/login/oauth/access_token', requestOptions)
//                 .then(response => {
//                     if (response.ok) {
//                         console.log('response is ok')
//                         console.log('response', response)
//                         return response.json();
//                     } else {
//                         throw new Error('Error exchanging code for token');
//                     }
//                 })
//                 .then(data => {
//                     console.log('made it to date')
//                     const accessToken = new URLSearchParams(data).get('access_token');
//                     localStorage.setItem('accessToken', accessToken);

//                     window.location.href = '/home';
//                 })
//                 .catch(error => {
//                     console.error('Error exchanging code for token:', error);
//                 });
//         }
//     }, []);

//     return (
//         <div>
//             Redirecting...
//         </div>
//     );
// }

// export default Redirect;
