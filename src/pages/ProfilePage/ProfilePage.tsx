import { ProfileInfo } from '../../enteties/ui/ProfileInfo/ProfileInfo';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
    </div>
  );
}

export default ProfilePage;
