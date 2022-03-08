

const Card = () => {
    return ( 
        <div class="">
              {/* <div>
                    <div class="absolute top-80 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                    <div class="absolute top-80 -right-1 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div class="absolute -bottom-80 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div> */}
          <section class="max-w-7xl mx-auto px-4 sm:px-6 laptop:px-4 mt-12 mb-12">

            <article>
                <div class="relative flex items-end font-bold ">
                    <h2 class="text-2xl">Condominiums</h2>
                    <a href class="ml-10 flex items-center text-gray-400">
                      <span class="text-sm">All Offers</span>
                      <svg class="ml-3 h-3.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                    </a>
                    <div class="ml-auto  flex">
                      <a href class="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
                        <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-3x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
                      </a>
                      <a href class="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
                        <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                      </a>
                    </div>
                </div>                
                <section class="mt-6 grid tablet:grid-cols-2 laptop:grid-cols-4 gap-x-6 gap-y-8">      
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">

                            <img src={require('./photo/image2.jpeg')}
                              
                                class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 8,000 - 12,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img3.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 8,000 - 12,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img4.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 6,000 - 8,500 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/image1.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 4,500 - 6,500 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    
                </section>
                <div class="relative mt-8 flex items-end font-bold">
                    <h2 class="text-2xl">Apartments</h2>
                    <a href class="ml-10 flex items-center text-gray-400">
                      <span class="text-sm">All Offers</span>
                      <svg class="ml-3 h-3.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                    </a>
                    <div class="ml-auto flex">
                      <a href class="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
                        <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-3x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
                      </a>
                      <a href class="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
                        <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                      </a>
                    </div>
                </div>                
                <section class="mt-6 grid tablet:grid-cols-2 laptop:grid-cols-4 gap-x-6 gap-y-8">      
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img5.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 8,000 - 12,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img6.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 8,000 - 12,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img7.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 6,000 - 8,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img8.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 4,500 - 6,500 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    
                </section>
                <div class="relative mt-8 flex items-end font-bold">
                    <h2 class="text-2xl">Dormitories</h2>
                    <a href class="ml-10 flex items-center text-gray-400">
                      <span class="text-sm">All Offers</span>
                      <svg class="ml-3 h-3.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                    </a>
                    <div class="ml-auto flex">
                      <a href class="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
                        <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-3x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
                      </a>
                      <a href class="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
                        <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                      </a>
                    </div>
                </div>                
                <section class="mt-6 grid tablet:grid-cols-2 laptop:grid-cols-4 gap-x-6 gap-y-8">      
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img9.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 3,500 - 5,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img10.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 8,000 - 12,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img11.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 6,000 - 8,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img12.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 4,500 - 6,500 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    
                </section>
                <div class="relative  mt-8 flex items-end font-bold">
                    <h2 class="text-2xl">House</h2>
                    <a href class="ml-10 flex items-center text-gray-400">
                      <span class="text-sm">All Offers</span>
                      <svg class="ml-3 h-3.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                    </a>
                    <div class="ml-auto hidden tablet:block flex">
                      <a href class="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
                        <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-3x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
                      </a>
                      <a href class="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
                        <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
                      </a>
                    </div>
                </div>                
                <section class="mt-6 grid tablet:grid-cols-2 laptop:grid-cols-4 gap-x-6 gap-y-8">      
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img13.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 8,000 - 12,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img14.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 8,000 - 12,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img15.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 6,000 - 8,000 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div class="relative w-full h-80 tablet:h-64 laptop:h-44">
                        <img src={require('./photo/img16.jpeg')}
                              
                              class="w-full h-full object-center object-cover" />
                        </div>
                        <div class="px-3 py-4">
                            <h3 class="text-sm text-gray-500 pb-2">
                                <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span class="absolute inset-0"></span>
                                    Price 4,500 - 6,500 Baht
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    
                </section>
                
            </article>
            
          </section>
          
          {/* <section class="container mx-auto pt-12 bg-white">
      <div class="relative flex items-end font-bold">
        <h2 class="text-2xl">Browse by Category</h2>
        <a href class="ml-10 flex items-center text-gray-400">
          <span class="text-sm">All Categories</span>
          <svg class="ml-3 h-3.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
        </a>
        <div class="ml-auto flex">
          <a href class="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
            <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-3x"><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
          </a>
          <a href class="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-yellow-400">
            <svg class="h-3 text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
          </a>
        </div>
      </div>

      <div class="mt-10">
        <ul class="-m-3.5 flex">
          <li class="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
            <img class="max-h-20" src="https://i.ibb.co/Smq7sZK/2021-11-07-13h26-50.png" alt="" />
            <span class="font-semibold">Fruits & Vegetables</span>
          </li>
          <li class="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
            <img class="max-h-20" src="https://i.ibb.co/PwYJkQs/2021-11-07-13h39-41.png" alt="" />
            <span class="font-semibold">Breads & Sweets</span>
          </li>
          <li class="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
            <img class="max-h-20" src="https://i.ibb.co/Hx3vbFx/2021-11-07-13h39-52.png" alt="" />
            <span class="font-semibold">Frozen Seafoods</span>
          </li>
          <li class="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl">
            <img class="max-h-20" src="https://i.ibb.co/4PCjhsS/2021-11-07-13h40-02.png" alt="" />
            <span class="font-semibold">Raw Meats</span>
          </li>
        </ul>
      </div>
          </section> */}
          
        </div>
     );
     
}
 
export default Card;