import './landing.css';

// const breakPoints = [
//   { width: 1, itemToShow: 1 },
//   { width: 550, itemToShow: 2 },
//   { width: 768, itemToShow: 3 },
//   { width: 1200, itemToShow: 4 },
// ];

const Landing = () => {
  return (
    <div>
      <div className=" 2xl:mx-auto 2xl:container mx-4  ">
        <div
          role="main"
          className="flex flex-col items-center justify-center mb-6 "
        >
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block laptop:hidden h-11 w-auto"
              src={require('./photo/logo1.png')}
              // src="./assets/logo.jpg'"
              alt="Workflow"
            />
          </div>
        </div>

        <div className="top h-64 w-full bg-zinc-800   overflow-hidden relative">
          <img
            src={require('./photo/bg3.png')}
            alt=""
            className="bg w-full h-full object-cover object-center absolute z-0"
          />

          <div className="flex flex-col  justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
            <h4 className="text-sm hidden tablet:block ">
              If you're looking for new home around Kasetsart University,{' '}
            </h4>
            <h4 className="text-sm hidden tablet:block">
              you've come to the right place. Best luck for your new journey !
            </h4>
            <h4 className="text-sm block laptop:hidden">
              The Right Place for your New Journey !
            </h4>
            <h1 className="text-2xl font-semibold mt-4">Sign In</h1>

            <div className="px-6 rounded-xl flex flex-col">
              <div className="w-full mt-2 ml-8 laptop:mr-8">
                <div className="inline-block mr-4 mt-2 tablet:ml-4  ">
                  <a href="./login_owner">
                    <button
                      type="button"
                      className="focus:outline-none text-white text-sm py-2.5 px-9 rounded-md bg-gradient-to-r from-gray-400 to-gray-600 transform hover:scale-110"
                    >
                      SignIn as an owner
                    </button>
                  </a>
                </div>
                <div className="inline-block mr-2 mt-2">
                  <a href="./login_renter">
                    <button
                      type="button"
                      className="focus:outline-none text-white text-sm py-2.5 px-10 rounded-md bg-gradient-to-r from-teal-400  transform hover:scale-110"
                    >
                      SignIn as a renter
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
