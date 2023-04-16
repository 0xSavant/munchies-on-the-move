import React from "react";

export default function TeamList() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="my-6 text-lg leading-8 text-gray-600">
            Learn about our amazing team, the roles they fill, and their
            expertise.
          </p>
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Read More
          </a>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://i.imgur.com/ZefodBt.jpg"
                alt="Photo of Alex Garris"
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Alex Garris
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://i.imgur.com/2o3zGrR.jpg"
                alt="Photo of Joe Meere"
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Joe Meere
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Chief Technical Officer
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://i.imgur.com/uXYXpzj.jpg"
                alt="Photo of Hayden Turner"
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Hayden Turner
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Chief Marketing Officer
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://i.imgur.com/m78x1wM.jpg"
                alt="Photo of Reggie Nesbit"
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Reggie Nesbit
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Chief Operations Officer
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Photo of Max Cichanowicz"
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Max Cichanowicz
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Chief Finance Officer
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
