import { Center } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';

import styles from './ProfilePage.module.css';

function ProfilePage() {
  const { id } = useParams();
  return (
    <>
      <Center className={styles.wrapper}>
        <h1>ProfilePage</h1>
        <h1>{id}</h1>;
      </Center>
      <Center>
        <Link to="/admin">Back to admin</Link>
      </Center>
    </>
  );
}

export default ProfilePage;
