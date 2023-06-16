// import PropTypes from 'prop-types';
// import { useState } from "react";

// function Slider({Photos}) {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const goToPrevious = (e) => {
//         e.preventDefault();
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? Photos.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex);
//       };
    
//       const goToNext = (e) => {
//         e.preventDefault();
//         const isLastSlide = currentIndex === Photos.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//       };
    
//       const goToSlide = (slideIndex) => {
//         setCurrentIndex(slideIndex);
//       };

//   return (
//     <div>
//         <>
//             <span onClick={goToPrevious} className="leftArrowStyles">
//                 ❰
//             </span>
//             <span onClick={goToNext} className="rightArrowStyles">
//                 ❱
//             </span>
//         </>

//         <img src={Photos[currentIndex].url} alt="" />
//         <div className='dotscontainer'>
//             {Photos.map((slide, index) => (
//             <div className={`dots ${index === currentIndex ? "active" : ""}`}
//                 key={slide.id}
//                 onClick={() => goToSlide(index)}
//                 >
//                 ●
//             </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// Slider.propTypes = {
//     Photos: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         url: PropTypes.string.isRequired,
//       })
//     ).isRequired,
// };

// export default Slider