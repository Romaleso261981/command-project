import { Avatar, Group, rem, Stack, Text, UnstyledButton } from '@mantine/core';
import { IconChevronRight, IconCoin, IconLogin } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserById } from '@/integations/dataBase';
import type { User } from '@/shared/types/Types';

import styles from './UserInfo.module.css';

export const UserInfo = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserById();
    if (user !== null) {
      setUser(user);
    }
  }, []);

  const hendlelogOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  const hendlelogin = () => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: 'kjdfvkjndfnk'
      })
    );
    navigate('/admin');
  };

  return (
    <Stack justify="center" gap={0}>
      {user ? (
        <UnstyledButton className={styles.user}>
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              radius="sm"
              size={30}
            />
            <div style={{ flex: 1 }}>
              <Text size="sm" fw={500}>
                {user.nickName}
              </Text>
              <Group>
                <IconCoin color="#f1a708" />
                <Text c="dimmed" size="md">
                  {user.balance}
                </Text>
              </Group>
            </div>
            <IconChevronRight
              onClick={hendlelogOut}
              style={{ width: rem(14), height: rem(14) }}
              stroke={1.5}
            />
          </Group>
        </UnstyledButton>
      ) : (
        <IconLogin className={styles.link} onClick={hendlelogin} />
      )}
    </Stack>
  );
};
