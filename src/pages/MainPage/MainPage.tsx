import '@mantine/core/styles.css';

import { Button, Center, Container } from '@mantine/core';
import { type FC } from 'react';

import { Header } from '@/features/Header/Header';
import { setFirestoreData } from '@/shared/api/firebaseApi';

import styles from './Main.module.css';

const testObj = {
  displayName: 'test',
  email: null,
  phoneNumber: '+111111111111',
  photoURL: null
};

const MainPage: FC = () => {
  return (
    <Container>
      <Header />
      <Center className={styles.wrapper}>
        <h1>MainPage</h1>;
        <Button
          radius="lg"
          mt={20}
          id="sign-in-button"
          onClick={async () => {
            await setFirestoreData('users', 'test', testObj);
          }}>
          Test
        </Button>
      </Center>
    </Container>
  );
};

export default MainPage;
