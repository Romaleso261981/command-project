import '@mantine/core/styles.css';

import { Button, Flex, Image, Paper, Text, TextInput } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import { useTranslation } from 'react-i18next';

import { signIn } from '@/features/Authentication/model/slice';
import type { FC, FormFields } from '@/features/Authentication/model/types';
import iconSteam from '@/shared/assets/steam.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import classes from './LoginForm.module.css';

interface LoginFormProps {
  form: UseFormReturnType<FormFields>;
}

export const LoginForm: FC<LoginFormProps> = ({ form }) => {
  const dispatch = useAppDispatch();
  const validFieldPhone = form.isValid('phoneNumber');

  const handlerAuth = () => {
    dispatch(signIn(form.values.phoneNumber));
  };

  const { t } = useTranslation();

  return (
    <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
      <Text>{t('sign')}</Text>
      <TextInput
        label={t('yourPhone')}
        placeholder={t('enterPhone')}
        required
        ta="left"
        {...form.getInputProps('phoneNumber')}
      />
      <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
        <Button
          className={classes.control}
          mt={30}
          radius="lg"
          id="sign-in-button"
          onClick={handlerAuth}
          disabled={!validFieldPhone}>
          {t('sendSms')}
        </Button>
        <Button
          className={classes.control}
          radius="lg"
          leftSection={<Image h={20} w={20} src={iconSteam} />}>
          {t('signSteam')}
        </Button>
      </Flex>
    </Paper>
  );
};
