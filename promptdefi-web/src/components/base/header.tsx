import { AppBar, IconButton, Toolbar, Button, ButtonGroup } from '@mui/material';

import { InfoPanel } from './info-panel/info-panel';
import { ChangeMode } from '../ui/change-mode';

import logoUrl from '@/assets/logo.png';
//import { APP_NAME } from '@/config/constants';
import { useIsDesktop } from '@/hooks/is-desktop';

export const Header = () => {
  const { isDesktop } = useIsDesktop();

  return (
    <AppBar
      sx={{
        bgcolor: 'dark',
        color: 'header.text',
        height: 'shape.headerHeight'
      }}
      position="static"
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img src={logoUrl} alt="logo" />
        </IconButton>


        <ButtonGroup
          variant='outlined'
          aria-label="Basic button group"
        >
          <Button variant='contained'>Swap</Button>
          <Button><a href='http://localhost:3000/'>Chatbot</a></Button>
          <Button>WhatsApp</Button>
        </ButtonGroup>

        <ChangeMode />
        {!isDesktop && <InfoPanel />}
      </Toolbar>
    </AppBar>
  );
};
