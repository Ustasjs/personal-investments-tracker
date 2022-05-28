/** @jsxImportSource @emotion/react */
import AppBar from '@mui/material/AppBar/AppBar';
import IconButton from '@mui/material/IconButton/IconButton';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button/Button';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { className, children } = props;

  return (
    <div className={className}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              css={buttonCss}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Link to="/portfolio-list">
            <Button css={buttonCss}>Портфели</Button>
          </Link>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

const buttonCss = css`
  color: white;
`;
