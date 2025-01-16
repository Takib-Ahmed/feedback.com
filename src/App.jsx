import { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";

import Header from "./components/Header";

import Detailspage from "./components/ResturantDetails.page/Detailspage";
import Searchrestults from "./components/Search End/SearchResults";

import { BrowserRouter, Routes,Route } from "react-router-dom";

import Homepage from "./components/Homepage";

function App() {
  const [Resturantslist] = useState([
    {
      coverimage: "/Trendingcards/Rectangle 22 (1).png",
      images: [
        "/Trendingcards/Rectangle 22 (1).png",
        "/Trendingcards/Rectangle 22 (10).png",
        "/Trendingcards/Rectangle 22 (11).png",
      ],
      Name: "Bottega",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 4.8,
      Reviews: "(34 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (2).png",
      images: [
        "/Trendingcards/Rectangle 22 (2).png",
        "/Trendingcards/Rectangle 22 (9).png",
        "/Trendingcards/Rectangle 22 (12).png",
      ],
      Name: "Little Shucker",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 5.0,
      Reviews: "(253 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (3).png",
      images: [
        "/Trendingcards/Rectangle 22 (3).png",
        "/Trendingcards/Rectangle 22 (8).png",
        "/Trendingcards/Rectangle 22 (7).png",
      ],
      Name: "Marafuku Ramen",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 3.5,
      Reviews: "(87 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (4).png",
      images: [
        "/Trendingcards/Rectangle 22 (4).png",
        "/Trendingcards/Rectangle 22 (9).png",
        "/Trendingcards/Rectangle 22 (10).png",
      ],
      Name: "Bottega",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 5.0,
      Reviews: "(876 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (5).png",
      images: [
        "/Trendingcards/Rectangle 22 (5).png",
        "/Trendingcards/Rectangle 22 (12).png",
        "/Trendingcards/Rectangle 22 (2).png",
      ],
      Name: "Arabia Nights",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 3.5,
      Reviews: "(334 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (6).png",
      images: [
        "/Trendingcards/Rectangle 22 (6).png",
        "/Trendingcards/Rectangle 22 (1).png",
        "/Trendingcards/Rectangle 22 (12).png",
      ],
      Name: "Lokma",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 5.0,
      Reviews: "(253 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (7).png",
      images: [
        "/Trendingcards/Rectangle 22 (7).png",
        "/Trendingcards/Rectangle 22 (3).png",
        "/Trendingcards/Rectangle 22 (1).png",
      ],
      Name: "The snug",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 4.5,
      Reviews: "(554 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (8).png",
      images: [
        "/Trendingcards/Rectangle 22 (8).png",
        "/Trendingcards/Rectangle 22 (4).png",
        "/Trendingcards/Rectangle 22 (2).png",
      ],
      Name: "Starbelly",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 5.0,
      Reviews: "(870 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (9).png",
      images: [
        "/Trendingcards/Rectangle 22 (9).png",
        "/Trendingcards/Rectangle 22 (1).png",
        "/Trendingcards/Rectangle 22 (3).png",
      ],
      Name: "Iori",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 3.5,
      Reviews: "(340 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (10).png",
      images: [
        "/Trendingcards/Rectangle 22 (10).png",
        "/Trendingcards/Rectangle 22 (4).png",
        "/Trendingcards/Rectangle 22 (6).png",
      ],
      Name: "Ngalley",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 5.0,
      Reviews: "(260 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (11).png",
      images: [
        "/Trendingcards/Rectangle 22 (11).png",
        "/Trendingcards/Rectangle 22 (3).png",
        "/Trendingcards/Rectangle 22 (1).png",
      ],
      Name: "diogonal",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 4.5,
      Reviews: "(660 reviews)",
    },
    {
      coverimage: "/Trendingcards/Rectangle 22 (12).png",
      images: [
        "/Trendingcards/Rectangle 22 (12).png",
        "/Trendingcards/Rectangle 22 (6).png",
        "/Trendingcards/Rectangle 22 (8).png",
      ],
      Name: "Kitoko",
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      Rating: 2.3,
      Reviews: "(866 reviews)",
    },
  ]);
  
  const [Searchvalue, setsearchvalue] = useState("");

  const [Filtervalue, setfiltervalue] = useState("");
      const [listdetails,setlistdetails] = useState({
  
        Name:'Bella italia',
        Rating:'5.0',
        Reviews:'834',
        description:`The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
    The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`,
        location:'Singapour, Bishan-Ang Mo Kio Park ',
        worktime:'7j/7, 08:00 - 22:00',
        coverimage:'/Detailspage/Rectangle 28.png'
  
    
    })
  return (
    <>
      <BrowserRouter>
        <Header
          setsearchvalue={setsearchvalue}
          Resturantslist={Resturantslist}
          Searchvalue={Searchvalue}
          setfiltervalue={setfiltervalue}
        />
   
       
      
     
        <Routes>
          <Route path="/" element={<Homepage   setlistdetails={setlistdetails}     Resturantslist={Resturantslist}/>}/>
<Route path="search" element={  <Searchrestults
          Resturantslist={Resturantslist}
          Filtervalue={Filtervalue}
          setlistdetails={setlistdetails}
        />}/>
        <Route path="search/detailspage" element={<Detailspage listdetails={listdetails}setlistdetails={setlistdetails} />}/>
        <Route path="detailspage" element={<Detailspage listdetails={listdetails}setlistdetails={setlistdetails}/>}/>
  
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
