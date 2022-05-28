/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Avatar from '@mui/material/Avatar/Avatar';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import Link from '@mui/material/Link/Link';
import TextField from '@mui/material/TextField/TextField';
import Typography from '@mui/material/Typography/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import { VBoxCCMixin } from '../../mixins/flex';

interface Props {
  className?: string;
}

export const LogIn: React.FC<Props> = (props) => {
  const { className } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div css={pageWrapperCss} className={className}>
      <Card css={cardCss}>
        <CardContent css={cardContentCss}>
          <div css={wrapperCss}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Войти
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email адрес"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Войти
              </Button>
              <Link href="/sign-up" variant="body2">
                {'Еще не зарегистрированы? Регистрация'}
              </Link>
            </Box>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const pageWrapperCss = css`
  position: relative;
  flex-grow: 1;
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
`;

const wrapperCss = css`
  ${VBoxCCMixin};
  text-align: center;
  max-width: 600px;
`;
