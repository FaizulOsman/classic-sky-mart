import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { toast } from "react-hot-toast";
import { useLoginMutation } from "../../redux/features/user/userApi";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [login, { data, isError, isLoading, isSuccess, error }] =
    useLoginMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: e.target.email.value, password: e.target.password.value });
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      toast.success("You have logged in successfully.");
      localStorage.setItem("access-token", data?.data?.accessToken);
      localStorage.getItem("user-info", JSON.stringify(data?.data?.userData));

      // Redirect to the home page
      navigate("/");
    }

    if (isError === true && error) {
      if ("data" in error) {
        toast.error(`${error?.data.message}`);
      }
    }
  }, [isLoading, isSuccess, error, isError, data, navigate]);

  return (
    <>
      <div className="py-5 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="mx-auto border rounded-md shadow-lg p-8 flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <h1 className="text-3xl font-semibold text-center text-orange-500">
            Sign in
          </h1>
          <div className="flex justify-around mt-5">
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="border-b-2 border-orange-600">
                Admin
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-52"
              >
                <p>
                  <span className="font-bold">Email:</span> a@gmail.com
                </p>
                <p className="mt-2">
                  <span className="font-bold">Password:</span> 123456
                </p>
              </ul>
            </div>
            <div className="dropdown dropdown-hover dropdown-end">
              <label tabIndex={0} className="border-b-2 border-orange-600">
                User
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-52"
              >
                <p>
                  <span className="font-bold">Email:</span> b@gmail.com
                </p>
                <p className="mt-2">
                  <span className="font-bold">Password:</span> 123456
                </p>
              </ul>
            </div>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Dont have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-orange-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
