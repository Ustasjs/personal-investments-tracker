interface Props {
  className?: string;
}

export const PortfolioList: React.FC<Props> = (props) => {
  const { className } = props;

  return <div className={className}>PortfolioList</div>;
};
