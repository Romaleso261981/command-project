import { Flex } from '@mantine/core';

import { AuthenticationForm } from '@/widgets/AuthenticationForm/index';

export default function AuthPage() {
  console.log('useEffect');

  return (
    <Flex h="100%" justify={'space-around'} mt={'100px'}>
      <AuthenticationForm />
    </Flex>
  );
}
