import { useAuth } from "@saleor/sdk";
import { useState } from "react";

const RegisterBlock = () => {
  const { register } = useAuth();

  const [newAccountEmail, setNewAccountEmail] = useState(
    `test-${Date.now()}@example.com`
  );
  const [newAccountPassword, setNewAccountPassword] = useState(`hunter1`);

  const onRegister = async () => {
    const result = await register({
      email: newAccountEmail,
      password: newAccountPassword,
      channel: "default-channel"
    });
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
            <p className="mt-1 text-sm text-gray-600">Create a new account.</p>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow-lg overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <legend className="mb-4 text-base font-medium text-gray-900">
                Registration credentials
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
                    name="register-email"
                    id="register-email"
                    autoComplete="email"
                    value={newAccountEmail}
                    onChange={e => setNewAccountEmail(e.target.value)}
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
                    name="register-password"
                    id="register-password"
                    value={newAccountPassword}
                    onChange={e => setNewAccountPassword(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                type="button"
                onClick={onRegister}
                className="action-button"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBlock;
