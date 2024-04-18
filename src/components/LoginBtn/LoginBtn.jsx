import "./LoginBtn.css"

function LoginBtn () {
  function handleClick() {
    const redirectUri = encodeURIComponent('http://localhost:8080//oauth/redirect/login');
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=user:email`;
  }

  return (
  <button className="github-login-btn" onClick={handleClick}>
    Login with Github
  </button>
)
}

export default LoginBtn