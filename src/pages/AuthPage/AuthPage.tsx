import { Container, Flex } from '@mantine/core';

import { AuthUiForm } from './ui/auth-ui-form';

export default function AuthPage() {
  return (
    <Container>
      <Flex h="100%" pt={50} pl={120}>
        <AuthUiForm />
      </Flex>
    </Container>
  );
}
