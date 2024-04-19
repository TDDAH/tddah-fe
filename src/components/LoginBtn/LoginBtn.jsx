import './LoginBtn.css';

function LoginBtn() {
  function handleClick() {
    localStorage.setItem('loginStep', 'login');
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user:email`;
  }

  return (
    <button className="github-button-login" onClick={handleClick}>
      Login with GitHub
    </button>
  );
}

export default LoginBtn;
