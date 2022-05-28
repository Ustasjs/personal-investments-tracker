/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CardActionArea, IconButton } from '@mui/material';
import Card from '@mui/material/Card/Card';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import { HBoxCCMixin } from '../../mixins/flex';

interface Props {
  className?: string;
}

export const PortfolioList: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <div css={pageWrapper} className={className}>
      <Toolbar>
        <Card css={cardCss}>
          <CardActionArea css={cardActionAreaCss}>
            <div css={iconButtonWrapper}>
              <IconButton size="large" color="inherit" aria-label="menu">
                <AddIcon />
              </IconButton>
            </div>
          </CardActionArea>
        </Card>
      </Toolbar>
    </div>
  );
};

const pageWrapper = css`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const cardCss = css`
  width: 345px;
  height: 200px;
`;

const cardActionAreaCss = css`
  ${cardCss};
  ${HBoxCCMixin};
`;

const iconButtonWrapper = css`
  border-radius: 50%;
  border: 2px solid black;
`;
