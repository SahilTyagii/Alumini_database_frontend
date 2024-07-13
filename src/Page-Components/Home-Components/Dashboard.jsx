// import React from "react";
// import image2 from "./BPIT-image2.png";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import { Typography, Button } from "@material-tailwind/react";
// import { Link } from 'react-router-dom';



// function Dashboard() {
//   return (
//     <Carousel
//       className="rounded-xl mt-5 pt-10 md:py-20 "
//       autoPlay
//       interval={3000}
//       infiniteLoop
//       showThumbs={false}
//       showStatus={false}
//       showIndicators={true} 
//       swipeable={true} 
//     >
//       <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] ">
//         <img
//           src='https://images.shiksha.com/mediadata/images/1512469113phpxVkQNz.png'
//           alt="image 1"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60"> 
//           <div className="w-3/4 text-center md:w-2/4">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl"
//             >
//               Welcome to the <span className="text-red-600">Abhigyan</span> Alumni
//               Network
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-6 md:mb-8 lg:mb-10 xl:mb-12 opacity-80 text-sm sm:text-sm md:text-lg lg:text-xl"
//             >
//               Connecting our graduates, showcasing achievements, and facilitating
//               networking opportunities.
//             </Typography>
//             <div className="flex flex-wrap justify-center gap-2">
//               <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange">
//                 Join the Alumni Network
//               </Button>
//               <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange"> 
//                 Search Alumni
//               </Button>
//             <Link to="/Alumini_Directory">
//           <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange">
//             Search Alumni
//           </Button>
//         </Link>

//               <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange"> 
//                 View Upcoming Events
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem]"> 
//         <img
//           src={image2}
//           alt="image 2"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60"> 
//           <div className="w-3/4 text-center md:w-2/4">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl"
//             >
//               Welcome to the <span className="text-red-600">Abhigyan</span> Alumni
//               Network
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-6 md:mb-8 lg:mb-10 xl:mb-12 opacity-80 text-sm sm:text-sm md:text-lg lg:text-xl"
//             >
//               Connecting our graduates, showcasing achievements, and facilitating
//               networking opportunities.
//             </Typography>
//             <div className="flex flex-wrap justify-center gap-2">
//               <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange">
//                 Join the Alumni Network
//               </Button>
//               {/* <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange"> 
//                 Search Alumni
//               </Button> */}
//                <Link to="/Page/Alumini-Directory">
//           <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange">
//             Search Alumni
//           </Button>
//         </Link>
//               <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange"> 
//                 View Upcoming Events
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Carousel>
//   );
// }

// export default Dashboard;
import React from "react";
import image2 from "./BPIT-image2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <Carousel
      className="rounded-xl mt-5 pt-10 md:py-20"
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      swipeable={true}
    >
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem]">
        <img
          src='https://images.shiksha.com/mediadata/images/1512469113phpxVkQNz.png'
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              Welcome to the <span className="text-red-600">Abhigyan</span> Alumni
              Network
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 md:mb-8 lg:mb-10 xl:mb-12 opacity-80 text-sm sm:text-sm md:text-lg lg:text-xl"
            >
              Connecting our graduates, showcasing achievements, and facilitating
              networking opportunities.
            </Typography>
            <div className="flex flex-wrap justify-center gap-2">
              <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange">
                Join the Alumni Network
              </Button>
              <Link to="/Alumini_directory">
                <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange">
                  Search Alumni
                </Button>
              </Link>
              <Link to="/Networking_Opportunities/New_eventpage">
                <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange">
                  View Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem]">
        <img
          src={image2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              Welcome to the <span className="text-red-600">Abhigyan</span> Alumni
              Network
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 md:mb-8 lg:mb-10 xl:mb-12 opacity-80 text-sm sm:text-sm md:text-lg lg:text-xl"
            >
              Connecting our graduates, showcasing achievements, and facilitating
              networking opportunities.
            </Typography>
            <div className="flex flex-wrap justify-center gap-2">
              <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange">
                Join the Alumni Network
              </Button>
              <Link to="/Alumini_directory">
                <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange">
                  Search Alumni
                </Button>
              </Link>
              <Link to="/Networking_Opportunities/New_eventpage">
                <Button className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-lg" color="orange">
                  View Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Dashboard;
