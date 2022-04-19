import ScrollDialog_renter from './dialog_renter';
import Navbar from './navbar';
import Button from '@mui/material/Button';
import { getAuth, signOut } from 'firebase/auth';

const Profile_Renter = () => {
  const auth = getAuth();
  const logout = async () => {
    await signOut(auth);
    window.location.replace('/login_renter');
  };
  console.log(auth);
  return (
    <div>
      <Navbar />
      <div className="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
        <div className="top h-64 w-full bg-zinc-800 overflow-hidden relative">
          <img
            src={require('./photo/bg3.png')}
            alt=""
            className="bg w-full h-full object-cover object-center absolute z-0"
          />
          <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
            <h1 className="text-xl mt-2 font-semibold">
              {auth.currentUser.email}
            </h1>
            <h4 className="text-sm mb-4  font-semibold">
              Join since {auth.currentUser.metadata.creationTime}
            </h4>
            <div className="flex">
              <div className="flex-grow ">
                <ScrollDialog_renter />
              </div>
              <div className="flex-grow ml-2 ">
                <a className="no-underline" href="./findMatch">
                  <Button variant="outlined">Find Match</Button>
                </a>
              </div>
              <div className="flex-grow ml-2 ">
                <a className="no-underline" href="./saved_dorm">
                  <Button variant="outlined">Saved</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-white laptop:p-14 ">
          <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid tablet:space-x-0 tablet:space-y-4 tablet:flex-col tablet:col-span-2 tablet:justify-start ">
            <button
              href="#"
              className="text-sm p-2 bg-teal-600 text-white text-center rounded font-bold"
            >
              Basic Information
            </button>

            <button
              onClick={logout}
              className="text-sm p-2 bg-rose-600 text-center rounded font-semibold hover:bg-red-600 hover:text-gray-200"
            >
              Logout
            </button>

            {/* <a href="#" className="text-sm p-2 bg-slate-300 text-center rounded font-semibold hover:bg-teal-600 hover:text-gray-200">Another Something</a> */}
          </div>

          <div className="col-span-12 tablet:border-solid tablet:border-l tablet:border-black tablet:border-opacity-25 h-full pb-12 tablet:col-span-10">
            <div className="px-4 pt-4">
              <form action="#" className="flex flex-col space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold">Basic Information</h3>
                  <hr />
                </div>

                <div className="form-item">
                  <label className="text-xl ">Email</label>
                  <input
                    type="text"
                    value={auth.currentUser.email}
                    className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_Renter;
