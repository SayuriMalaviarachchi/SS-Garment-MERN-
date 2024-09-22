import React, { useState, useEffect, useRef } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import UserDetails from '../User/UserDetails';
import { useReactToPrint } from 'react-to-print';
import styles from './Users.module.css'; // Import the CSS

const URL = 'http://localhost:5000/users';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

export default function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  // Report generating
  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: 'Users Report',
    onAfterPrint: () => alert('Users Report successfully downloaded!'),
  });

  // Search function
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };

  const handleSendReport = () => {
    // Create WhatsApp chat URL
    const phoneNumber = '+940702691922';
    const message = 'Selected User Reports';
    const whatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    // Open WhatsApp chat in new window
    window.open(whatsAppUrl, '_blank');
  };

  return (
    <div className={styles.container}>
      <Nav />

      <h1 className={styles.title}>All Users</h1>

      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search Users Here"
        className={styles.searchInput}
      />

      <button onClick={handleSearch} className={styles.button}>
        Search
      </button>

      {noResults ? (
        <div className={styles.noResults}>
          <p>No Users Found</p>
        </div>
      ) : (
        <div ref={ComponentsRef}>
          {users &&
            users.map((user, i) => (
              <div key={i} className={styles.userDetails}>
                <UserDetails user={user} />
              </div>
            ))}
        </div>
      )}

      <button onClick={handlePrint} className={styles.button}>
        Download User Details Report
      </button>

      <br />

      <button onClick={handleSendReport} className={styles.button}>
        Send WhatsApp Message
      </button>
    </div>
  );
}
