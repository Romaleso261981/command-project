import { Center } from '@mantine/core';
import {ProfileInfo} from '../../Entities/ui/ProfileInfo'

import styles from './ProfilePage.module.css';

function ProfilePage() {
  return (
    // <Center className={styles.wrapper}>
      <ProfileInfo />
    // </Center>
  );
}

export default ProfilePage;
