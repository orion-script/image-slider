import React from "react";
import firstImage from "../src/assets/firstimage.webp";
import secondImage from "../src/assets/secondimage.webp";
import thirdImage from "../src/assets/thirdimage.webp";
import fourthImage from "../src/assets/forthimage.webp";
import fifthImage from "../src/assets/fifthimage.webp";
import sixthImage from "../src/assets/sixthimage.webp";
import Slider from './components/Sliders';
import './App.css';

function App() {
  const Photos = [
    {url: firstImage, id: 1},
    {url: secondImage, id: 2},
    {url: thirdImage, id: 3},
    {url: fourthImage, id: 4},
    {url: fifthImage, id: 5},
    {url: sixthImage, id: 6},
  ];
  return (
    <div className='container'>
      <h1>Image Slider</h1>
      <Slider Photos={Photos} />
    </div>
  );
}

export default App;
