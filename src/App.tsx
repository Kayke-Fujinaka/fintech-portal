import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';

import { ToastAlert } from './components/ToastAlert';
import { router } from './routes';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Fintech</title>
        <link rel="icon" href={'...'} />
        <meta property="og:url" content="http://localhost:3001" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="all" />
        <meta name="author" content="Fintech" />
        <meta
          name="description"
          content="Gerencie suas finanças com facilidade e clareza com Fintech. Nossa plataforma ajuda você a controlar suas receitas, gastos, investimentos e dívidas, tudo em um só lugar. Defina metas financeiras, acompanhe seu progresso e tome decisões informadas para um futuro financeiro mais seguro."
        />
        <meta
          name="keywords"
          content="fintech, gestão financeira, controle de gastos, planejamento financeiro, metas financeiras, orçamento pessoal, saúde financeira, economia, investimentos, finanças pessoais, app de finanças, educação financeira, análise financeira, app de orçamento"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <ToastAlert />
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
