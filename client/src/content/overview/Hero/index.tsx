import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(48)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(18)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 0.0.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            ChainDocs
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            An open source blockchain-based software for document verification
          </TypographyH2>
          <Button
            component={RouterLink}
            to="/dashboards/crypto"
            size="large"
            variant="contained"
          >
            Get Started
          </Button>
          <Button
            sx={{ m: 1 }}
            component="a"
            target="_blank"
            rel="noopener"
            href="https://bloomui.com/product/tokyo-free-white-react-typescript-material-ui-admin-dashboard"
            size="large"
            variant="text"
          >
            Key Features
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
