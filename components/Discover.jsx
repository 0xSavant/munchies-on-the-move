export default function Discover() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://i.imgur.com/cjlOL6u.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-md">
            Always on the move.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 drop-shadow-md">
            Clemson's premier student-run mobile food business, providing
            high-quality munchies to students short on time.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">
                Locations Campus-wide
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                12
              </dd>
            </div>

            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">
                Participants
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                5
              </dd>
            </div>

            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">
                Students Tracking
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                40
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
