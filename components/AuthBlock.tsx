import { useAuth } from "@saleor/sdk";
import { useState } from "react";

const AuthBlock = () => {
  const { login, logout } = useAuth();
  const [loginEmail, setLoginEmail] = useState(
    process.env.NEXT_PUBLIC_DEFAULT_EMAIL
  );
  const [loginPassword, setLoginPassword] = useState(
    process.env.NEXT_PUBLIC_DEFAULT_PASSWORD
  );

  const onLogin = async () => {
    const result = await login({
      email: loginEmail,
      password: loginPassword
    });
    console.log(result);
  };

  const onLogout = async () => {
    const result = await logout();
    console.log(result);
  };
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              useAuth
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Existing account operations.
            </p>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <legend className="mb-4 text-base font-medium text-gray-900">
                Login credentials
              </legend>

              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="login-password"
                    id="login-password"
                    autoComplete="password"
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="button" onClick={onLogin} className="action-button">
                Log in
              </button>
              <button
                type="button"
                onClick={onLogout}
                className="action-button"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthBlock;
