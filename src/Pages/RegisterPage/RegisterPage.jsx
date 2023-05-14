
import React ,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthForm from 'Components/AuthForm/AuthForm';
import Section from 'Components/Section/Section';
import Container from 'Components/Container/Container';

import { signup } from 'Redux/auth/auth-operations';

const RegisterPage = () => {
  const [token, setToken] = useState('');
  // const [error, setError] = useState(null)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleSignup = (data) => {
  //   console.log(data)
  //     const result = dispatch(signup(data))
  //     setToken(result.token);
  // };

    const handleSubmit = async (data, { setSubmitting }) => {
    try {
      const result = await dispatch(signup(data));
      navigate('/user');
      setToken (result.token)

    } catch (error) {
      console.log(error,'Something went wrong');
    }
    setSubmitting(false);
  };

  return (
    <Section>
      <Container>
        <AuthForm isRegister onSubmit={handleSubmit} />
        {token && <p>Registred {token}</p>}
      </Container>
    </Section>
  );
};

export default RegisterPage;
