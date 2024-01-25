import type { ButtonProps } from '@mantine/core';
import { Button } from '@mantine/core';
import type { ComponentPropsWithoutRef } from 'react';

export function GoogleButton(props: ButtonProps & ComponentPropsWithoutRef<'button'>) {
  return <Button variant="default" color="gray" {...props} />;
}

export function GitHubButton(props: ButtonProps & ComponentPropsWithoutRef<'button'>) {
  return <Button variant="default" color="gray" {...props} />;
}
