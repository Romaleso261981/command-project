import { ActionIcon, Indicator, Menu, Tooltip } from '@mantine/core';
import { IconMessageCircle } from '@tabler/icons-react';

import { MESSAGES } from './data';

export const Messages = () => {
  return (
    <Menu shadow="lg" width={320}>
      <Menu.Target>
        <Indicator processing size={10} offset={6}>
          <Tooltip label="Messages">
            <ActionIcon size="lg" title="Nessages">
              <IconMessageCircle size={20} />
            </ActionIcon>
          </Tooltip>
        </Indicator>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label tt="uppercase" ta="center" fw={600}>
          {MESSAGES.length} new notifications
        </Menu.Label>
        <Menu.Item tt="uppercase" ta="center" fw={600}>
          Show all messages
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
