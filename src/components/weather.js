<div className="bg-black">
  <div className="mx-auto flex flex-col tablet:flex-row mb-6 tablet:mb-24">
    <div className="flex flex-col w-full laptop:w-1/3 p-8 mt-6">
      <p className="ml-6 text-yellow-500 text-lg uppercase tracking-loose">
        REVIEW
      </p>
      <p className="text-white text-3xl tablet:text-5xl my-4 leading-relaxed tablet:leading-snug">
        Leave us a feedback!
      </p>
    </div>
    <div className="flex flex-col w-full laptop:w-2/3 justify-center">
      <div className="w-full px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full laptop:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
              <div className="flex-auto p-5 laptop:p-10">
                <h4 className="text-2xl mb-4 text-black-500 font-semibold">
                  Have a suggestion?
                </h4>
                <form action="" method="POST">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      className="border-0 px-3 py-3 rounded text-sm shadow w-full
                  bg-gray-50 placeholder-black-555 text-gray-800 outline-none focus:bg-gray-100"
                      type="email"
                      name="email"
                      id="email"
                      placeholder=" "
                      style="transition: all 0.15s ease 0s;"
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      maxlength="300"
                      name="feedback"
                      id="feedback"
                      rows="4"
                      cols="80"
                      className="border-0 px-3 py-3 bg-gray-50 placeholder-black-555 text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      id="feedbackBtn"
                      className="bg-yellow-500 text-black-500 text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style="transition: all 0.15s ease 0s;"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
