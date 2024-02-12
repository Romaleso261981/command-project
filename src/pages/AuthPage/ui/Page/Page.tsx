import { Container, Flex } from '@mantine/core';

import { AuthenticationForm } from '@/widgets/AuthenticationForm/index';

export default function AuthPage() {
  return (
    <Container>
      <Flex h="100%">
        <AuthenticationForm />
      </Flex>
    </Container>
  );
}
