import React, { Component } from 'react';

// Import all necessary components from their respective files
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

// Import resume data from a separate file
import resumeData from './resumeData';

// Define App component as a class that extends from Component
class App extends Component {
  render() {
    // Render all components, passing resumeData as a prop to each one
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

// Export App component as the default export
export default App;
