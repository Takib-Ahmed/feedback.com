import { useState } from "react";

export default function Footer() {
  const Footerlist = [
    {
      Title: 'About',
      Links: ['About MyFeedback', 'Investor Relations']
    },
    {
      Title: 'MyFeedback',
      Links: ['MyFeedback for business', 'Collections', 'Talk', 'Events', 'MyFeedback blog', 'Support', 'Developers']
    },
    {
      Selects: [
        {
          Title: 'Languages',
          options: ['English', 'Bangla']
        },
        {
          Title: 'Countries',
          options: ['Singapore', 'Bangladesh']
        }
      ]
    }
  ];

  return (
    <>
      <footer className=" flex  justify-center  p-10 lg:p-20 flex-wrap gap-40 lg:gap-52 items-start  ">
        {Footerlist.map((value, key) => (
          <ul key={key} className=" justify-start items-start flex flex-col gap-5">
            {value.Title && (
              <li className="text-2xl font-bold">{value.Title}</li>
            )}
            {value.Links && value.Links.map((link, index) => (
              <li key={index}>
                <a href="#" key={index}>{link}</a>
              </li>
            ))}
            {value.Selects && value.Selects.map((select, index) => (
              <li key={index} className=" w-fit flex flex-col  gap-2 text-start items-start justify-start " >
                <label className="text-2xl font-bold">{select.Title}</label>
                <select>
                  {select.options.map((option, idx) => (
                    <option value={option} key={idx}>{option}</option>
                  ))}
                </select>
              </li>
            ))}
          </ul>
        ))}
      </footer>
    </>
  );
}
