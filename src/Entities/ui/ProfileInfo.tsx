/* eslint-disable no-nested-ternary */
import { Avatar, Button, Group, Stack, Tabs, Text } from '@mantine/core';
import { useState, type FC } from 'react';
import { dataUser } from '../config/dataUser';
import { ModalSettings } from './ModalSettings';


export const ProfileInfo: FC = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <Stack>
            <Group gap="s" align='center'>
                <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ position: 'relative', display: 'inline-block' }}
                >
                    <Avatar
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                        size={128}
                    />
                    {hovered && (
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                borderRadius: '50%',
                            }}
                        >
                            <Group gap='8px'>
                                <Button size="xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-upload" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 9l5 -5l5 5" /><path d="M12 4l0 12" /></svg>
                                </Button>
                                <Button size="xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" color='white' width="16"
                                        height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>

                                </Button>
                            </Group>
                        </div>
                    )}
                </div>
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
