import React from 'react';
import { Send } from '../icons/Send';
import { styled, darkTheme } from '../stitches.config';
import { IconButton } from './IconButton';
import { TrafficLights } from './TrafficLights';

const Container = styled('div', {
  height: 740,
  width: '100%',
  borderRadius: '$xl',
  boxShadow: '0px 30px 100px -50px rgba(7, 0, 31, 0.7)',
  backgroundColor: '#fff',
  [`.${darkTheme} &`]: {
    backgroundColor: '#071D2A',
  },
});

const Toolbar = styled('div', {
  height: 52,
  padding: '0 20px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #E6E6E6',
  [`.${darkTheme} &`]: {
    borderBottom: '1px solid #2F3233',
  },
});

const SendButton = styled('button', {
  marginLeft: 28,
  color: '$gray11',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '16px',
  display: 'flex',
  border: 'none',
  cursor: 'pointer',
  padding: 4,
  borderRadius: '$xs',
  alignItems: 'center',
  backgroundColor: 'transparent',
  '&:hover': {
    background: '$gray4',
  },
  '& svg': {
    stroke: '$gray11',
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

const FormatButtons = styled('div', {
  display: 'flex',
  columnGap: 20,
  marginLeft: 'auto',
});

const Field = styled('div', {
  marginLeft: 24,
  height: 32,
  display: 'flex',
  fontSize: '13px',
  alignItems: 'center',
  borderBottom: '1px solid #E6E6E6',
  [`.${darkTheme} &`]: {
    borderBottom: '1px solid #2F3233',
  },
});

const FieldLabel = styled('span', {
  fontWeight: 400,
  marginRight: 8,
  color: '$textSecondary',
  [`.${darkTheme} &`]: {
    color: '#949FA8',
  },
});

const Email = styled('span', {});

const EmailName = styled('span', {
  fontWeight: 600,
});

const EmailAddress = styled('a', {
  textDecoration: 'none',
  color: '$blue11',
});

const Input = styled('input', {
  height: 31,
  border: 'none',
  outline: 'none',
  fontSize: '13px',
  paddingTop: 14,
  paddingBottom: 13,
  width: '100%',
  background: 'transparent',
});

export const EmailWindow: React.FC = () => {
  return (
    <Container>
      <Toolbar>
        <TrafficLights />
        <SendButton>
          <Send />
          Send
        </SendButton>
        <FormatButtons>
          <IconButton icon="Bold" />
          <IconButton icon="Italic" />
          <IconButton icon="Underline" />
          <IconButton icon="List" />
        </FormatButtons>
      </Toolbar>
      <Field>
        <FieldLabel>To:</FieldLabel>
        <Email>
          <EmailName>Oscar Coniel</EmailName> -{' '}
          <EmailAddress href="mailto:oscar@coniel.com">
            oscar@coniel.com
          </EmailAddress>
        </Email>
      </Field>
      <Field>
        <FieldLabel>Subject: </FieldLabel>
        <Input placeholder="Hello!" />
      </Field>
      <Field>
        <FieldLabel>From: </FieldLabel>
        <Input placeholder="you@domain.com" />
      </Field>
    </Container>
  );
};
