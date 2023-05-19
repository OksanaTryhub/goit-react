import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Section from 'Components/Section';
import Container from 'Components/Container';
import UserData from 'Components/UserData';
import PetsData from 'Components/PetsData';
import ModalCongrats from './../../Components/ModalCongrats/ModalCongrats';

import { getUser } from 'Redux/auth/auth-selectors';

import styles from './UserPage.module.css';
import { updateUser } from 'Redux/auth/auth-operations';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const { avatarURL, name, birthday, email, phone, city } = user;

  console.log("USER=>", user);

  useEffect(() => {
    const storedFrom = sessionStorage.getItem('from');

    if (!storedFrom && location.state?.from === '/register') {
      setShowModal(true);
      sessionStorage.setItem('from', location.pathname);
    }
  }, [location.pathname, location.state?.from]);

    const updateUserData = async ({ name, email, birthday, phone}, { setSubmitting }) => {
    const data = { name, email, birthday, phone}
    try {
      await dispatch(updateUser(data));
      console.log("DATA==>", data)
    } catch (error) {
      console.log('Error updating user data:', error);
    }
    setSubmitting(false);
  };


  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        {showModal && (
          <ModalCongrats onClose={handleCloseModal}></ModalCongrats>
        )}
        <UserData
          // photo={avatarURL}
          name={name}
          birthday={birthday}
          email={email}
          phone={phone}
          city={city}
          onSubmit={updateUserData}
        />
        <PetsData />
      </Container>
    </Section>
  );
};

export default UserPage;
