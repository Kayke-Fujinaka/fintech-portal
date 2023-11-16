import { Formik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Button } from '../../../components/Login/Button';
import { Footer } from '../../../components/Login/Footer';
import { Heading } from '../../../components/Login/Heading';
import { Input } from '../../../components/Login/Input';

import * as S from './styles';

const RecoveryPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('O e-mail é obrigatório.')
      .email('Entre com um e-mail válido.'),
  });

  const handleSubmit = async () => {
    setIsLoading(true);

    setTimeout(() => {
      try {
        toast.success('Instruções enviadas para o e-mail informado.');
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao enviar instruções: ', error);
        toast.error('Erro ao enviar instruções. Por favor, tente novamente.');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <S.Container>
      <S.Content>
        <Heading
          firstParagraph="Recuperação de Senha"
          secondParagraph="Informe seu e-mail para receber as instruções."
        />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <S.StyledForm>
              <Input name={'email'} type={'email'} placeholder={'E-mail'} />

              <Button isSubmitting={isSubmitting} isLoading={isLoading}>
                Enviar instruções
              </Button>
            </S.StyledForm>
          )}
        </Formik>
      </S.Content>

      <Footer
        text={'Lembrou a senha? '}
        redirectPath={'/login'}
        actionText={'Entrar'}
      />
    </S.Container>
  );
};

export default RecoveryPassword;
