import { Container, Flex } from '@mantine/core';

import { Header } from '@/features/Header/Header';
import { AuthenticationForm } from '@/widgets/AuthenticationForm/index';

export default function AuthPage() {
  return (
    <Container>
      <Header />
      <Flex h="100%">
        <AuthenticationForm />
      </Flex>
    </Container>
  );
}
