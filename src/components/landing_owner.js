import './landing.css';
import Card from './card';
import Navbar from './navbar_owner';
import * as React from 'react';

const Landing_Owner = () => {
  return (
    <div className=" 2xl:mx-auto 2xl:container mx-4 ">
      <Navbar />
      <div className="mb-10 relative pt-12 bg-blueGray-50">
        {/* Information */}

        <div className=" bg-gray-50">
          <div className="container mx-auto px-6 tablet:px-12 laptop:px-32">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold tablet:text-4xl">
                Place's Type
              </h2>
              <p className="text-gray-600 laptop:w-8/12 laptop:mx-auto">
                KU Dormmate
              </p>
            </div>
            <div className="grid gap-12 items-center tablet:grid-cols-3">
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl tablet:w-40 tablet:h-40 laptop:w-64 laptop:h-64"
                  src={require('./photo/dorm.png')}
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div>
                  <h4 className="text-2xl">Dormitories</h4>
                  <span className="block text-sm text-gray-500"></span>
                </div>
              </div>
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl tablet:w-48 tablet:h-64 laptop:w-64 laptop:h-80"
                  src={require('./photo/apartment.png')}
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Apartments</h4>
                  <span className="block text-sm text-gray-500"></span>
                </div>
              </div>
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl tablet:w-40 tablet:h-40 laptop:w-64 laptop:h-64"
                  src={require('./photo/condo.png')}
                  alt="woman"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Condos</h4>
                  <span className="block text-sm text-gray-500"></span>
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
