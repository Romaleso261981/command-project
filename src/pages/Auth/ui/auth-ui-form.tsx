import type { PaperProps } from '@mantine/core';
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  TextInput
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { Link } from 'react-router-dom';

import { useAuth } from '../data-access';
import { GitHubButton, GoogleButton } from './social-buttons';

export function AuthUiForm(props: PaperProps) {
  const { login } = useAuth();
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null)
    }
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Group grow mb="md" mt="md">
        <GoogleButton onClick={() => login({ username: '', password: '' })} radius="xl">
          Google
        </GoogleButton>

        <GitHubButton onClick={() => login({ username: '', password: '' })} radius="xl">
          GitHub
        </GitHubButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors['email'] && 'Invalid email'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors['password'] && 'Password should include at least 6 characters'}
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Anchor component={Link} to="/">
            root page.
          </Anchor>
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </form>
    </Paper>
  );
}
