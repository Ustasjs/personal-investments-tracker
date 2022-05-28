/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
  className?: string;
}

export const CreatePortfolio: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <div css={pageWrapperCss} className={className}>
      CreatePortfolio
    </div>
  );
};

const pageWrapperCss = css`
  flex-grow: 1;
`;
