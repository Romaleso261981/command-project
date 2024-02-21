import { Flex } from '@mantine/core';

import { AuthenticationForm } from '@/widgets/AuthenticationForm/index';

export default function AuthPage() {
  return (
    // <Container>
    <Flex h="100%" justify={'space-around'} mt={'100px'}>
      <AuthenticationForm />
    </Flex>
    // </Container>
  );
}
