import { Container, Flex } from '@mantine/core';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { RoutersPaths } from '@/shared/types/enums';
import { AuthenticationForm } from '@/widgets/AuthenticationForm/index';

export default function AuthPage() {
  const navigate = useNavigate();
  const user = true;

  console.log('useEffect');

  useEffect(() => {
    if (user) {
      navigate(RoutersPaths.MAIN);
    }
  }, [navigate, user]);

  return (
    <Container>
      <Flex h="100%">
        <AuthenticationForm />
      </Flex>
    </Container>
  );
}
