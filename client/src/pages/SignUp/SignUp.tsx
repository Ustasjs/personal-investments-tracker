interface Props {
  className?: string;
}

export const SignUp: React.FC<Props> = (props) => {
  const { className } = props;

  return <div className={className}>Registration</div>;
};
