import React from 'react';

import { Container, ProfileCircule, SearchInput, MessageIcon, } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircule src="https://github.com/gabrielsouzacampos.png" />
      <SearchInput placeholder="pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
