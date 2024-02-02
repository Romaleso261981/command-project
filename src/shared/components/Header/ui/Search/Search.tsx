import { Autocomplete, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export const Search = () => {
  return (
    <>
      <Autocomplete
        placeholder="Search"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        visibleFrom="xs"
      />
    </>
  );
};
