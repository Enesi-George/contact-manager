import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleContactAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="h-full w-full bg-light">
      {/* Header */}
      <nav className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            <i className="fas fa-address-book me-2"></i>
            Contact Managers
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-4">
              <h1 className="display-4 text-primary">
                <i className="fas fa-users me-3"></i>
                Contact Managers
              </h1>
             
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-12">
            <ContactForm onContactAdded={handleContactAdded} />
          </div>

          {/* Contact List */}
          <div className="col-12">
            <ContactList refreshTrigger={refreshTrigger} />
          </div>
        </div>

      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
