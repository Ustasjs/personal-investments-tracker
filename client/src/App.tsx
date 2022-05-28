/** @jsxImportSource @emotion/react */
import CssBaseline from '@mui/material/CssBaseline';
import 'normalize.css';
import { Route, Routes } from 'react-router-dom';

import { css, Global } from '@emotion/react';
import { AppLayout } from './components/AppLayout/AppLayout';
import { VBoxCSMixin } from './mixins/flex';
import { Home } from './pages/Home/Home';
import { PortfolioList } from './pages/PortfolioList/PortfolioList';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const App: React.FC<Props> = () => {
  return (
    <div css={wrapperCss}>
      <CssBaseline />
      <Global styles={globalStyleCss} />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio-list" element={<PortfolioList />} />
        </Routes>
      </AppLayout>
    </div>
  );
};

const globalStyleCss = css`
  html,
  body {
    height: 100%;
  }

  body {
    ${VBoxCSMixin};
  }

  #root {
    flex-grow: 1;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const wrapperCss = css`
  height: 100%;
`;
