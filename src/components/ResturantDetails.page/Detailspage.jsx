/* eslint-disable react/prop-types */

import { useState } from "react";
import Banner from "./Banner";
import Discover from "./Discover";
import Moredetails from "./Moredetails";
import Overallratings from "./overallraing";
import Photos from "./Photos";
import Reviews from "./Reviews";
import Menu from "./Menu";

export default function Detailspage({listdetails,setlistdetails}){
    const [ListReviews,setlistreviews] = useState([{
        Name:'SA Takib',
        location:'Dhaka, Bangladesh',
        Rating:5,
        date:'29/11/2023',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        
    },{
        Name:'Mei Ling',
        location:'Singapore, Orchad boulevard',
        Rating:4,
        date:'09/05/2023',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        
    },{
        Name:'Wei Xiong',
        location:'Singapore, Takashimaya',
        Rating:5,
        date:'01/05/2023',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        
    },{
        Name:'Ming Wei',
        location:'Singapore, Little india',
        Rating:4,
        date:'31/04/2023',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        
    },{
        Name:'Xin Yi',
        location:'Singapore, Zen rooms',
        Rating:3,
        date:'30/04/2023',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        
    },{
        Name:'Zhi Hao',
        location:'Singapore, Boon Keng',
        Rating:2,
        date:'27/03/2023',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        
    },{
        Name:'Li Hua',
        location:'Singapore, DLLM loklok',
        Rating:4,
        date:'',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        
    },{
        Name:'Si Ying',
        location:'Singapore, Bedemeer',
        Rating:1,
        date:'11/03/2023',
        description:''
        
    },{
        Name:'Wei Ting',
        location:'Singapore, Toa Payoh',
        Rating:2,
        date:'28/02/2023',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        
    },{
        Name:'Wei Jie',
        location:'Singapore, Little india',
        Rating:3,
        date:'29/11/2023',
        description:'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'
        
    }])
    const [Showmenu,setshowmenu] = useState(false)
    return (
    <>
       
        <Banner listdetails={listdetails} />
        <Photos/>
        <Menu Showmenu={Showmenu}/>
        <Moredetails setshowmenu={setshowmenu}/>
        <Overallratings ListReviews={ListReviews}/>
        <Reviews ListReviews={ListReviews}/>
        <Discover setlistdetails={setlistdetails}/></>
    );
}