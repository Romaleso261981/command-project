import { Container, Flex } from '@mantine/core';

import { Header } from '@/features/components/Header/Header';

import { AuthUiForm } from './ui/auth-ui-form';

export default function AuthPage() {
  return (
    <Container>
      <Header />
      <Flex h="100%">
        <AuthUiForm />
      </Flex>
    </Container>
  );
}
