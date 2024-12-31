import { TfiLayoutGrid3Alt } from "react-icons/tfi";

export default function Photos({setshowphotos}) {
  const Photos = [
    { src: "/Detailspage/Rectangle 1266.png", alt: "Main photo", isMain: true },
    { src: "/public/Detailspage/Rectangle 1267.png", alt: "Photo 1" },
    { src: "/public/Detailspage/Rectangle 1268.png", alt: "Photo 2" },
    { src: "/public/Detailspage/Rectangle 1269.png", alt: "Photo 3" },
    { src: "/public/Detailspage/Rectangle 1270.png", alt: "Photo 4" },
  ];

  return (
    <>
      <div className="p-20 m-10 px-5">
        <div className="lg:px-32 grid gap-4">
          <div className="title text-2xl font-bold">
            Discover our magnificent place in photos
          </div>
          <div className="subtitle text-sm md:w-[34rem]">
            The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing.
          </div>
        </div>
        <br />
        <br />
        <div className="photos-slider flex flex-wrap gap-4 justify-center">
          {Photos.map((image, index) => {
            if (image.isMain) {
              return (
                <div className="relative" key={index}>
                  <img src={image.src} alt={image.alt} />
                  <div onClick={()=>{
                    setshowphotos(true)
                  }} className="flex absolute bottom-5 cursor-pointer left-5 p-2 px-5 text-center bg-white rounded-full gap-2">
                    <TfiLayoutGrid3Alt className="mt-1" />
                    <p className="">View all photos (7)</p>
                  </div>
                </div>
              );
            }
            return null;
          })}

          <div className="grid gap-3">
            <div className="flex flex-wrap justify-center lg:justify-normal gap-3">
              {Photos.slice(1, 3).map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center lg:justify-normal gap-3">
              {Photos.slice(3).map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
