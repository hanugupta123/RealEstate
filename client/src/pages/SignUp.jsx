import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="border rounded-lg p-3"
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="border rounded-lg p-3"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="border rounded-lg p-3"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:cursor-pointer hover:opacity-90 disabled:opacity-80">Sign Up</button>
      </form>
      <div>
        <p className="flex gap-2 mt-5">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-700">
            <span>Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
