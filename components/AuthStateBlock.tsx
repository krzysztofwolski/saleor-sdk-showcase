import { useAuthState } from "@saleor/sdk";

const AuthStateBlock = () => {
  const { user } = useAuthState();

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              useAuthState
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Helpers for displaying logged in user data.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              {!user && <p className="text-sm text-gray-500">Not logged in.</p>}
              {!!user && (
                <>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Email
                    </legend>
                    <p className="text-sm text-green-500">{user?.email}</p>
                  </div>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      isStaff
                    </legend>

                    <p className="text-sm text-green-500">
                      {user?.isStaff ? "Yes" : "No"}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthStateBlock;
