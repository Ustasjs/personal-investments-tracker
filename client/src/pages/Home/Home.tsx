interface Props {
  className?: string;
}

export const Home: React.FC<Props> = (props) => {
  const { className } = props;

  return <div className={className}>Home</div>;
};
