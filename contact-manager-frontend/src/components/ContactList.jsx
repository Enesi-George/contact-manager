import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import apiService from '../services/apiService';

const ContactList = ({ refreshTrigger }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, [refreshTrigger]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await apiService.getAllContacts();
      
      if (response.success) {
        setContacts(response.data);
      }
    } catch (error) {
      toast.error('Failed to fetch contacts. Please try again.');
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="card shadow-sm">
        <div className="card-body text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-success text-white">
        <div className="row align-items-center">
          <div className="col">
            <h4 className="mb-0">
              Contact List ({contacts.length})
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        {contacts.length === 0 ? (
          <div className="text-center py-5">
            <h5 className="text-muted">
              No contacts yet
            </h5>
            <p className="text-muted">
              Add your first contact using the form above
            </p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Added</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-circle me-3">
                          {contact.name.charAt(0).toUpperCase()}
                        </div>
                        <strong>{contact.name}</strong>
                      </div>
                    </td>
                    <td>
                      <a href={`mailto:${contact.email}`} className="text-decoration-none">
                        {contact.email}
                      </a>
                    </td>
                    <td>
                      <a href={`tel:${contact.phone}`} className="text-decoration-none">
                        {contact.phone}
                      </a>
                    </td>
                    <td className="text-muted">
                      {new Date(contact.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
