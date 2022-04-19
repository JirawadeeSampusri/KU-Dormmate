/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
  rel="stylesheet"
></link>;
const navigation = [
  { name: 'Home', href: './landing_owner', current: false },
  // { name: 'Setting', href: './', current: false },
  // { name: 'Contact', href: './', current: false },
  // { name: 'Add Blog', href: './create', current: false },
];

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 py-2 tablet:px-6 laptop:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center block laptop:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center pr-2 tablet:static tablet:inset-auto tablet:ml-6 tablet:pr-0">
                <img
                  className="hidden tablet:block h-12 w-auto"
                  src={require('./photo/logo.png')}
                  // src="./assets/logo.jpg'"
                  alt="KUdormmate"
                />
              </div>

              <div className="flex-1 flex items-center justify-center tablet:items-stretch tablet:justify-start">
                <div className="hidden tablet:block tablet:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      // <a
                      //   key={item.name}
                      //   href={item.href}
                      //   className={classNames(
                      //     item.current
                      //       ? 'bg-gray-900 no-underline text-white'
                      //       : 'text-black no-underline group-hover:text-white hover:bg-teal-600 ',
                      //     'px-3 py-2 rounded-md text-sm font-medium',
                      //   )}
                      //   aria-current={item.current ? 'page' : undefined}
                      // >
                      //
                      // </a>
                      <a
                        key={item.name}
                        href={item.href}
                        class="group block mx-auto rounded-md  px-3 py-2  no-underline hover:bg-teal-600 "
                      >
                        <div class="flex items-center space-x-3">
                          <h3 class="text-slate-900 mb-0 group-hover:text-white text-sm font-semibold">
                            {item.name}
                          </h3>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* <span className="w-screen tablet:w-1/3  h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
                <input
                  type="search"
                  name="serch"
                  placeholder="Search"
                  className="flex-grow px-12 rounded-l-full rounded-r-full text-sm focus:outline-none"
                />
                <i className="fas fa-search m-3 mr-5 text-lg text-gray-700  w-4 h-4"></i>
              </span> */}

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 tablet:static tablet:inset-auto tablet:ml-6 tablet:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={require('./photo/profile.png')}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="./profile_owner"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'no-underline block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Profile
                          </a>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                      {({ active }) => (
                        <a
                          href="./"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="./"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item> */}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="block labtop:hidden">
            <div className="bg-teal-600 px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 no-underline text-white'
                      : 'text-gray-300 no-underline hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
