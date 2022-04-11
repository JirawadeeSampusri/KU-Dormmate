import './landing.css';
import Card from './card';
import Navbar from './navbar_owner';
import * as React from 'react';

const Landing_Owner = () => {
  return (
    <div className=" 2xl:mx-auto 2xl:container mx-4 ">
      <Navbar />
      <div className="relative pt-12 bg-blueGray-50">
        {/* Information */}

        <div className=" bg-gray-50">
          <div className="container mx-auto px-6 tablet:px-12 laptop:px-32">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold tablet:text-4xl">
                Tailus blocks leadership
              </h2>
              <p className="text-gray-600 laptop:w-8/12 laptop:mx-auto">
                Tailus prides itself not only on award-winning technology, but
                also on the talent of its people of some of the brightest minds
                and most experienced executives in business.
              </p>
            </div>
            <div className="grid gap-12 items-center tablet:grid-cols-3">
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl tablet:w-40 tablet:h-40 laptop:w-64 laptop:h-64"
                  src={require('./photo/bg3.png')}
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div>
                  <h4 className="text-2xl">Hentoni Doe</h4>
                  <span className="block text-sm text-gray-500">
                    CEO-Founder
                  </span>
                </div>
              </div>
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl tablet:w-48 tablet:h-64 laptop:w-64 laptop:h-80"
                  src={require('./photo/bg3.png')}
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Jonathan Doe</h4>
                  <span className="block text-sm text-gray-500">
                    Chief Technical Officer
                  </span>
                </div>
              </div>
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl tablet:w-40 tablet:h-40 laptop:w-64 laptop:h-64"
                  src={require('./photo/bg3.png')}
                  alt="woman"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Anabelle Doe</h4>
                  <span className="block text-sm text-gray-500">
                    Chief Operations Officer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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

      <div className="flex">
        <Card />
      </div>
    </div>
  );
};

export default Landing_Owner;
