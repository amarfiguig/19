// Import necessary components
import React from 'react';
import Header from './components/Header'; // Header component
import About from './components/About'; // About component
import Portfolio from './components/Portfolio'; // Portfolio component
import ContactUs from './components/ContactUs'; // ContactUs component
import Footer from './components/Footer'; // Footer component

// Define the main App component
const App = () => {
  // Render all the necessary components and pass the data as props
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <ContactUs />
      <Footer />
    </>
  );
}

// Export the App component as the default export
export default App;
