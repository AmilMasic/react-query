import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { queryClient } from '../../react-query/queryClient';
import { theme } from '../../theme';
import { Loading } from './Loading';
import { Navbar } from './Navbar';
import { Routes } from './Routes';

export function App(): ReactElement {
  console.log('something');
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Loading />
      <Routes />
    </ChakraProvider>
  );
}
