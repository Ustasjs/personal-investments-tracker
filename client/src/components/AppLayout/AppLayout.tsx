/** @jsxImportSource @emotion/react */
import AppBar from '@mui/material/AppBar/AppBar';
import IconButton from '@mui/material/IconButton/IconButton';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button/Button';
import { HBoxSbCMixin, VBoxStSMixin } from '../../mixins/flex';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { className, children } = props;

  return (
    <div css={wrapperCss} className={className}>
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
          <div css={menuWrapperCss}>
            <Link to="/portfolio-list">
              <Button css={buttonCss}>Портфели</Button>
            </Link>
            <div>
              <Link to="/login">
                <Button css={buttonCss}>Войти</Button>
              </Link>
              <Link to="/sign-up">
                <Button css={buttonCss}>Регистрация</Button>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

const wrapperCss = css`
  ${VBoxStSMixin};
  height: 100%;
`;

const buttonCss = css`
  color: white;
`;

const menuWrapperCss = css`
  ${HBoxSbCMixin};
  flex-grow: 1;
`;
