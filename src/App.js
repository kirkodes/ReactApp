import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router // browser router renamed to router (lazy and easier) + this is how you can rename an import ; router must be declared in App.js or index.js or our routing wont work
} from 'react-router-dom';
import FunctionalComponentDemo from './components/concepts/FunctionalComponents/FunctionalComponentDemo';

function App() {
  return (
    <div className = 'App'>
      <FunctionalComponentDemo/>
    </div>
  );
};

// function App() { // header and footer will stay the same regardless of what "page" we're on; router inside of these means they won't be affected by any route changes at all. header and footer will show up regardless of what route we're at; the only thing that changes is the main content of our page which is controlled by <Sidebar />
//   return (
//     <div className="App">
//       <Header />
//       <Router>
//         <Sidebar />
//       </Router>
//       <Footer />
//     </div>
//   );
// };
export default App;