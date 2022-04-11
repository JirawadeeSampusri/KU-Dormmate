import './landing.css';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar_owner';
import Carousel_Renter from './slider_renter';

// const breakPoints = [
//   { width: 1, itemToShow: 1 },
//   { width: 550, itemToShow: 2 },
//   { width: 768, itemToShow: 3 },
//   { width: 1200, itemToShow: 4 },
// ];

const Landing_Renter = () => {
  return (
    <div>
      <Navbar />

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
        <div className="relative bg-blueGray-50">
          {/* Information */}

          <Carousel_Renter />

          {/* <div className=" flex flex-wrap pb-12  ">
          <div className="w-full tablet:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." className="max-w-full rounded-lg shadow-lg" src={require('./photo/img3.jpeg')}/>
          </div>
          <div className="w-full tablet:w-5/12 ml-auto mr-auto px-4">
            <div className="tablet:pr-2">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-3 mb-6 shadow-lg rounded-full bg-pink-300 ">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">A growing company</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                The extension comes with three pre-built pages to help you get
                
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Gate 1
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">Gate 2</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane"></i></span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">Gate 3</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane"></i></span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">Phaholyothin Gate</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane"></i></span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">Viphavadi Gate</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
          <div className="py-16 bg-gray-50 overflow-hidden">
            <div className="container m-auto px-6 space-y-8 text-gray-500 tablet:px-12">
              <div>
                <span className="text-gray-600 text-lg font-semibold">
                  Main features
                </span>
                {/* <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">A technology-first approach to payments<br className="laptop:block" /> hidden and finance</h2> */}
              </div>
              <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden tablet:grid-cols-2 laptop:divide-y-0 laptop:grid-cols-3 grid-cols-4">
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-8">
                    <img
                      src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
                      className="w-10"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />

                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                        First feature
                      </h5>
                      <p className="text-sm text-gray-600">
                        Neque Dolor, fugiat non cum doloribus aperiam voluptates
                        nostrum.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="flex justify-between items-center group-hover:text-yellow-600"
                    >
                      <span className="text-sm">Read more</span>
                      <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        &RightArrow;
                      </span>
                    </a>
                  </div>
                </div>
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-8">
                    <img
                      src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
                      className="w-10"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />

                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                        Second feature
                      </h5>
                      <p className="text-sm text-gray-600">
                        Neque Dolor, fugiat non cum doloribus aperiam voluptates
                        nostrum.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="flex justify-between items-center group-hover:text-yellow-600"
                    >
                      <span className="text-sm">Read more</span>
                      <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        &RightArrow;
                      </span>
                    </a>
                  </div>
                </div>
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-8">
                    <img
                      src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                      className="w-10"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />

                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                        Third feature
                      </h5>
                      <p className="text-sm text-gray-600">
                        Neque Dolor, fugiat non cum doloribus aperiam voluptates
                        nostrum.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="flex justify-between items-center group-hover:text-yellow-600"
                    >
                      <span className="text-sm">Read more</span>
                      <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        &RightArrow;
                      </span>
                    </a>
                  </div>
                </div>
                <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl laptop:hidden laptop:block">
                  <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <img
                      src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
                      className="w-10"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />

                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                        More features
                      </h5>
                      <p className="text-sm text-gray-600">
                        Neque Dolor, fugiat non cum doloribus aperiam voluptates
                        nostrum.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="flex justify-between items-center group-hover:text-yellow-600"
                    >
                      <span className="text-sm">Read more</span>
                      <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        &RightArrow;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Landing_Renter;
