import { Button, Flex, Text, Title } from '@mantine/core';
import type { FC } from 'react';

import s from './MessageDisplay.module.css';

type MessageDisplayProps = {
  message: string;
  description: string;
  buttonLabel?: string;
  action?: () => void;
};
const MessageDisplay: FC<MessageDisplayProps> = ({ message, description, buttonLabel, action }) => {
  return (
    <Flex className={s.wrapper}>
      <Title className={s.title}>{message}</Title>
      {description && <Text className={s.description}>{description}</Text>}
      {action && (
        <Button className={s.button} onClick={action} type='button'>
          {buttonLabel || 'Okay'}
        </Button>
      )}
    </Flex>
  );
};

export default MessageDisplay;
