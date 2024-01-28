import { Button, Center, Flex } from '@mantine/core';

import { FormAddClient } from './ui/components/FormAddClient/FormAddClient';
import { TableSelection } from './ui/components/TableSelection/TableSelection';
import { data } from './ui/mocData';

export default function AdminPage() {
  return (
    <Flex pl={40} pt={50} direction="column">
      <FormAddClient userData={data} />
      <TableSelection />
      <Center mt={20} mb={40}>
        <Button>Показать еще</Button>
      </Center>
    </Flex>
  );
}
