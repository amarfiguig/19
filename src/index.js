// Import necessary components and data
import React from 'react';
import Header from './components/Header'; // Header component
import About from './components/About'; // About component
import Resume from './components/Resume'; // Resume component
import Portfolio from './components/Portfolio'; // Portfolio component
import ContactUs from './components/ContactUs'; // ContactUs component
import Footer from './components/Footer'; // Footer component
import resumeData from './resumeData'; // Data for the resume

// Define the main App component
const App = () => {
  // Render all the necessary components and pass the resume data as props
  return (
    <>
      <Header resumeData={resumeData} /> // Header component with resume data as prop
      <About resumeData={resumeData} /> // About component with resume data as prop
      <Resume resumeData={resumeData} /> // Resume component with resume data as prop
      <Portfolio resumeData={resumeData} /> // Portfolio component with resume data as prop
      <ContactUs resumeData={resumeData} /> // ContactUs component with resume data as prop
      <Footer resumeData={resumeData} /> // Footer component with resume data as prop
    </>
  );
}

// Export the App component as the default export
export default App;
