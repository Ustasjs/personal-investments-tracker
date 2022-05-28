/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Avatar from '@mui/material/Avatar/Avatar';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { VBoxCCMixin } from '../../mixins/flex';
import Typography from '@mui/material/Typography/Typography';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';
import MuiLink from '@mui/material/Link/Link';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const SignUp: React.FC<Props> = (props) => {
  const { className } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'), // todo add submit
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Имя"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Фамилия"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email адрес"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Зарегистрироваться
              </Button>
              <MuiLink component={Link} to="/login" variant="body2">
                Уже зарегистрированы? Войти
              </MuiLink>
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
