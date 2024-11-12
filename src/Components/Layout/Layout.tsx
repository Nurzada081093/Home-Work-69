import * as React from 'react';
import { PropsWithChildren } from 'react';
import ToolBar from '../ToolBar/ToolBar.tsx';
import AutoCompleteComponent from '../AutoCompleteComponent/AutoCompleteComponent.tsx';
import { Container } from '@mui/joy';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main>
        <Container>
          <AutoCompleteComponent/>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;