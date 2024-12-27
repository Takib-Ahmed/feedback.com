import { CarouselSize } from "./Carusel";
import CategorySection from "./Categories";
import Explore from "./Explore";
import Recentsactivities from "./Recentactivities";
import Trending from "./Trending";

export default function Homepage({Resturantslist,setlistdetails}){
    return (
      <>
           <CategorySection />
        <br />
        <CarouselSize setlistdetails={setlistdetails} />
        <br />
        <Trending setlistdetails={setlistdetails} Resturantslist={Resturantslist} /> <br />
        <Explore />
        <br />
        <Recentsactivities />
        <br /></>  
    );
}