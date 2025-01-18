/* eslint-disable react/prop-types */

import { BsSortUp, BsSortDown } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Searchrestults({ Resturantslist, Filtervalue, setlistdetails }) {
  const [Sort, setSort] = useState(null);
  const [Sortpopup, setSortPopup] = useState(false);

  const sortedAndFilteredRestaurants = Resturantslist
    .filter((Resturants) =>
      !Filtervalue || Resturants.Name.toLowerCase().includes(Filtervalue.trim().toLowerCase())
    )
    .sort((a, b) => {
      if (Sort === null) return 0;
      if (Sort) return b.Rating - a.Rating; 
      return a.Rating - b.Rating;
    });

  return (
    <div className="Searchresultpage flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal lg:ps-32 my-10 mt-0">
      <div>
        <div className="text-start py-10 pb-0">
          <h5 className="justify-center md:justify-normal flex">Home / All restaurants</h5>
          <div className="justify-center md:justify-normal flex gap-20 py-2">
            <h1 className="text-2xl sm:text-3xl font-bold">Best restaurants in Singapore</h1>
            <div className="relative">
              <button
                className={` flex gap-2 bg-transparent  rounded-full text-[#918f8f]  hover:text-white p-2 px-4 hover:bg-slate-900   border-2 border-[#918f8f] hover:border-slate-900  ${Sortpopup ? 'border-slate-900 bg-slate-900 text-white':'border-[#918f8f] text-[#918f8f]'}`}
                onClick={() => setSortPopup(!Sortpopup)}
              >
                Sort {Sort === true ? <BsSortUp className="mt-1" /> : <BsSortDown className="mt-1" />}
              </button>
              <div
                className={`transition-all origin-top duration-300 top-12 absolute left-0 grid gap-1 rounded-lg shadow-xl text-[#5D5D5D] bg-white border ${
                  Sortpopup ? "scale-100 w-[180px]" : "scale-0 w-max"
                }`}
              >
                <div className="grid gap-1 pb-0 z-10">
                  <p
                    className="text-left hover:bg-gray-600 px-3 py-2 cursor-pointer hover:text-white"
                    onClick={() => setSort(null)}
                  >
                    Default
                  </p>
                  <p
                    className="text-left hover:bg-gray-600 px-3 py-2 cursor-pointer  hover:text-white"
                    onClick={() => setSort(true)}
                  >
                    Highest Rated
                  </p>
                  <p
                    className="text-left hover:bg-gray-600 px-3 py-2 cursor-pointer  hover:text-white"
                    onClick={() => setSort(false)}
                  >
                    Lowest Rated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col">
            {sortedAndFilteredRestaurants.map((value, index) => (
              <Link
                to={"detailspage"}
                key={index}
                onClick={() => {
                  setlistdetails((prevlist) => ({
                    ...prevlist,
                    ...value,
                  }));
                }}
              >
                <div className="border-b-[#DCDCDC] border-b-2 py-10">
                  <div className="lg:w-[44rem] border-none flex flex-wrap justify-center lg:justify-normal gap-4">
                    <div className="relative p-0">
                      <img
                        src={value.coverimage}
                        alt="Food Display"
                        className="coverimage w-full lg:w-52 h-full lg:h-48 object-cover rounded-t-lg rounded-xl bg-transparent"
                      />
                    </div>
                    <div className="flex flex-col gap-7">
                      <div className="grid gap-1">
                        <div className="font-bold text-xl">{value.Name}</div>
                        <div className="w-80">{value.description}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1 text-yellow-500">
                          {Array(5)
                            .fill()
                            .map((_, i) => (
                              <img
                                src="/star.png"
                                alt=""
                                key={i}
                                className="w-5 h-5"
                              />
                            ))}
                        </div>
                        <span className=" font-bold text-base">
                          {value.Rating} <span className="text-gray-500">{value.reviews}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="map h-[80rem] flex justify-end">
        <img
          src="/public/Searchrestult/Group 178.png"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}
