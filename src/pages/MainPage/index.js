import React from 'react'
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

export default function MainPage() {
  return (
    <div> 
    <Banner />
      //row 컴포넌트 생성하기 
      <Row
        title="NETFLTX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargRow
       />

       <Row title ="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
       <Row title ="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
       <Row 
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchAactionMovies}
        />
        <Row 
          title= "Comedy Movies"
          id="Cm"
          fetchUrl={requests.fetchComedyMovies}
         />

    </div>
  );
}
