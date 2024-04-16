import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirect() {
  const navigate = useNavigate();
  console.log("this is loading the page");
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");
    console.log("code before if statement", code);

    if (code) {
      console.log(code);
      const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
      const clientSecret = process.env.REACT_APP_GITHUB_SECRET;

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
        }),
      };

      fetch("http://localhost:8080/oauth/callback", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.access_token) {
            fetch(`http://localhost:8080/oauth/user/${data.access_token}`)
              .then((res) => res.json())
              .then((secondData) => {
                  console.log(secondData);
                    const reqBody = {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            name: secondData.name,
                            email: secondData.email,
                            provider: "github",
                            uid: secondData.id
                        })
                    }
                    console.log("BODY FOR BACKEND", reqBody.body)
                fetch('https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/users', reqBody)
                .then(res =>res.json())
                .then(data => {
                    
                    console.log(data)
                    navigate("/home")
                })
                .catch(thirdErr => console.log(thirdErr))
                
                
              })
              .catch((secondErr) => console.log(secondErr));
          } else {
            console.log("No access token received.");
            navigate("/home");
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/home");
        });
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
}

export default Redirect;
