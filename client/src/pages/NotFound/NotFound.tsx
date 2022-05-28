/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import MuiLink from '@mui/material/Link/Link';
import Typography from '@mui/material/Typography/Typography';
import { VBoxCCMixin } from '../../mixins/flex';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const NotFound: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={className} css={pageWrapperCss}>
      <Card css={cardCss}>
        <CardContent css={cardContentCss}>
          <div css={wrapperCss}>
            <Typography variant="h1">404</Typography>
            <Typography variant="subtitle1">Страница не найдена</Typography>
            <MuiLink component={Link} to="/" variant="body2">
              Перейти на главную
            </MuiLink>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const pageWrapperCss = css`
  flex-grow: 1;
  position: relative;
`;

const cardCss = css`
  display: inline-flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const cardContentCss = css`
  padding: 24px;
  text-align: center;
`;

const wrapperCss = css`
  ${VBoxCCMixin};
  text-align: center;
  width: 400px;
`;
