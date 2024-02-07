import '@mantine/core/styles.css';

import { Center, Container, Title } from '@mantine/core';
import type { FC } from 'react';

import styles from './Main.module.css';

const MainPage: FC = () => {
  return (
    <Container>
      <Center className={styles.wrapper}>
        <Title>MainPage</Title>
      </Center>
    </Container>
  );
};

export default MainPage;
