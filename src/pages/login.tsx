import { FunctionComponent } from "react";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card">
            <div className="card-content">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="form-control center"></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="form-control center"></input>
              </div>
              <p>
                <label>
                  <input type="checkbox" className="filled-in" />
                  <span>Remember me</span>
                </label>
              </p>
              <div className="card-action center">
                <button type="submit" className="waves-effect waves-light btn">
                  Log me in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
