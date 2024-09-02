import tdMainImg from "./assets/images/dashboard.png";
import tdCanva from "./assets/images/tdcanva.png";
import aaCanva from "./assets/images/aacanva.png";
import aaMainImg from "./assets/images/aa.png";
import zacoCanva from "./assets/images/zacocanva.png";
import hotelbooking from "./assets/images/hotelbooking.png";

let data = [
  {
    id: 1,
    name: "technicraftsdashboard",
    title: "TechniCrafts Dashboard",
    timeRange: "January 2023 – December 2023",
    description:
      "The TechniCrafts Dashboard is an advanced web application developed with the latest front-end technologies. As a Front End web developer and UI/UX designer, I played a crucial role in designing and implementing this comprehensive dashboard. The application features both admin and user interfaces, providing a seamless experience for managing and monitoring various aspects of TechniCrafts with efficiency and ease.",
    image: tdCanva,
    summary:
      "  TechniCrafts Dashboard is a sophisticated web application designed to streamline the management and monitoring of TechniCrafts operations. It includes robust features for both admin and user roles, offering intuitive interfaces and advanced functionalities. Key aspects include dynamic data visualization, real-time updates, and an optimized user experience, all built with modern front-end technologies.",
    techUsed: ["React", "React Router", "Redux", "Chart.js", "CSS"],
    keyFeatures: [
      "Admin and User Interfaces: Distinct interfaces for administrative and user functionalities, providing tailored access and management capabilities.",
      "Dynamic Data Visualization: Utilizes Chart.js for creating interactive charts and graphs to monitor various metrics and data.",
      "Real-Time Updates: Features real-time data updates to ensure that information is always current and accurate.",
      "Optimized User Experience: Designed with a focus on ease of use and efficiency, enhancing the overall user interaction with the dashboard.",
    ],
  },
  {
    id: 2,
    name: "advanceanalytik",
    title: " Advance Analytik",
    timeRange: "January 2023 – December 2023",
    description:
      "The Advance Analytik website is a cutting-edge platform developed using the latest Front End technologies. As the lead Frontend web developer and UI/UX designer, I created and implemented this dynamic website to showcase and sell advanced products such as water analyzers, water and gas sensors, and related services. The site is designed to effectively present these offerings with a focus on modern design and seamless user interaction.",
    image: aaCanva,
    summary:
      " The Advance Analytik website serves as a comprehensive platform for showcasing and selling advanced products, including water analyzers and sensors for water and gas. It also highlights the related services provided by the organization. The site features a modern, interactive design and provides detailed information about the products and services, with a focus on user experience and visual appeal.",
    techUsed: ["React", "SCSS", "Images and Assets"],
    keyFeatures: [
      "Product Listings: Displays advanced products like water analyzers and sensors for water and gas, with detailed descriptions and specifications.",
      "Service Information: Highlights the range of services offered by Advance Analytik, including support and maintenance for the products.",
      "Visual and User-Friendly Design: Utilizes engaging design elements and intuitive navigation to enhance the user experience and effectively present the products and services.",
      "Seamless User Interaction: Ensures a smooth browsing experience, with easy access to product details and service information.",
    ],
  },
  {
    id: 3,
    name: "bizone",
    title: " BizOne",
    timeRange: "January 2023 – December 2023",
    description:
      " The BizOne website is a business-oriented site developed using modern Front End technologies. As a Frontend web developer and UI/UX designer, I spearheaded the creation and implementation of this dynamic website.",
    image: zacoCanva,
    summary:
      " BizOne is a web-based project that appears to be a business-oriented website. The project includes various sections such as a navigation bar, a hero slider, a projects section, and interactive elements like a lightbox for project images and a scroll-to-top button.",
    techUsed: ["HTML", "CSS", "JavaScript", "Swiper.js", "FontAwesome"],
    keyFeatures: [
      "Responsive navigation bar with links to different sections (Home, About, Team, Work, Prices, Blog, Contact Us).",
      "Hamburger menu for mobile view, which toggles the visibility of the navigation links.",
      "Scroll-to-top button that appears when the user scrolls down the page.",
      "Hero Slider implemented using Swiper.js, supporting multiple views based on screen size breakpoints (1 to 3 slides per view) with autoplay functionality and a delay of 2500ms.",
      "Projects section displaying the latest projects with images, where each project image can be clicked to open a lightbox for a larger view.",
      "Interactive elements such as lightbox functionality for project images, a script to change the navbar background color on scroll, and a counter script for animating numerical counters.",
    ],
  },
  {
    id: 4,
    name: "travelbooking",
    title: "Travel Booking Platform",
    timeRange: "January 2023 – December 2023",
    description:
      " This project is a modern web application developed with Create React App, designed as a comprehensive travel and hotel booking platform. Featuring a responsive UI built with React and React Router, the platform enables users to easily search for and book accommodations. The application is optimized for performance and user experience, providing a seamless and intuitive booking process from start to finish.",
    image: hotelbooking,
    summary:
      "The Travel Booking Platform is a dynamic web application that brings together a suite of React components and pages to create a robust and user-friendly booking experience. Whether users are searching for hotels, flights, or car rentals, the platform offers a streamlined process for finding and securing the perfect option. Key features include a versatile header with navigation and search capabilities, a results list page that dynamically updates based on user inputs, and a detailed hotel page complete with image sliders and booking functionality. This platform is designed to meet the demands of modern travelers, providing them with all the tools they need to plan and book their trips efficiently.",
    techUsed: [
      "React",
      "React Router",
      "Date-fns",
      "React Date Range",
      "React Icons",
      "CSS",
    ],
    keyFeatures: [
      "Header Component: Contains navigation icons for different sections like hotels, flights, and car rentals. Includes a search bar for user queries.",
      "List Page: Displays a list of search results based on user input. Uses state management to handle options, destination, and date selections. Integrates various components like Navbar, Header, SearchItem, and SearchBar.",
      "Featured Component: Showcases featured destinations with images and titles. Each featured item displays the number of available properties.",
      "Hotel Page: Displays detailed information about a specific hotel. Includes a slider for viewing hotel images. Provides a booking button for users to reserve or book the hotel. Shows hotel location and other relevant details.",
    ],
  },
];

export default data;
