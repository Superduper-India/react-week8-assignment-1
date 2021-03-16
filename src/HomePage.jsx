import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Title = styled.h2({
  fontSize: '1.5em',
  margin: 0,
  marginBottom: '.5em',
});

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
});

const Item = styled.li({
  fontSize: '1em',
  marginRight: '1em',
  '& a': {
    display: 'inline-block',
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <List>
        <Item>
          <Link to="/about">About</Link>
        </Item>
        <Item>
          <Link to="/login">Log in</Link>
        </Item>
        <Item>
          <Link to="/restaurants">Restaurants</Link>
        </Item>
      </List>
    </div>
  );
}
