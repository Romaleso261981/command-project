/* eslint-disable no-nested-ternary */
import { Badge, Flex, Group, Image, Stack, Tabs, Text } from '@mantine/core';
import type { FC } from 'react';
import { dataUser } from '../config/dataUser';
import { ModalSettings } from './ModalSettings';

export const ProfileInfo: FC = () => {


    return (
        <Stack>
            <Group gap="s" align='center'>
                <Image
                    radius="sd"
                    h={100}
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                />
                <Stack gap="xs" >
                    <Text>{dataUser.name}</Text>
                    <Text size="32px" fw={700}>{dataUser.nickName}</Text>
                    <Text>{dataUser.dateOfRegistration}</Text>
                    <Group>
                        <svg color="#868E96" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 7a2 2 0 0 1 2 2" /><path d="M15 3a6 6 0 0 1 6 6" /></svg>
                        <Text c="gray.6">{dataUser.phoneNumber}</Text>
                    </Group>
                </Stack>
                <ModalSettings />
            </Group>
            <Tabs radius="xs" defaultValue="commands">
                <Tabs.List>
                    <Tabs.Tab value="commands">
                        Команды
                    </Tabs.Tab>
                    <Tabs.Tab value="friends">
                        Друзья
                    </Tabs.Tab>
                    <Tabs.Tab value="statistics">
                        Статистика
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="commands">
                    Команды
                </Tabs.Panel>

                <Tabs.Panel value="friends">
                    Друзья
                </Tabs.Panel>

                <Tabs.Panel value="statistics">
                    Статистика
                </Tabs.Panel>
            </Tabs>
        </Stack>


    )
}







// export const ColorSwitch: FC = () => {
//   const ICON_SIZE = 20;
//   const { setColorScheme, colorScheme } = useMantineColorScheme();

//   return (
//     <Group>
//       <Menu shadow="lg" width={200}>
//         <Menu.Target>
//           <Tooltip label="Switch color modes">
//             <ActionIcon variant="light">
//               {colorScheme === 'auto' ? (
//                 <IconCircleHalf2 size={ICON_SIZE} />
//               ) : colorScheme === 'dark' ? (
//                 <IconMoonStars size={ICON_SIZE} />
//               ) : (
//                 <IconSunHigh size={ICON_SIZE} />
//               )}
//             </ActionIcon>
//           </Tooltip>
//         </Menu.Target>
//         <Menu.Dropdown>
//           <Menu.Label tt="uppercase" ta="center" fw={600}>
//             Select color modes
//           </Menu.Label>
//           <Menu.Item
//             leftSection={<IconSunHigh size={16} />}
//             onClick={() => setColorScheme('light')}>
//             Light
//           </Menu.Item>
//           <Menu.Item
//             leftSection={<IconMoonStars size={16} />}
//             onClick={() => setColorScheme('dark')}>
//             Dark
//           </Menu.Item>
//           <Menu.Item
//             leftSection={<IconCircleHalf2 size={16} />}
//             onClick={() => setColorScheme('auto')}>
//             Use System Colors
//           </Menu.Item>
//         </Menu.Dropdown>
//       </Menu>
//     </Group>
//   );
// };
