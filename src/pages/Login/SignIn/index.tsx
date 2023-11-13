import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { ILoginInput, IUser } from '../../../interfaces/auth';
import { isEmail } from '../../../utils/validators';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const initialValues: ILoginInput = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('O e-mail é obrigatório.')
      .test('is-email', 'Entre com e-mail válido.', value =>
        value ? isEmail(value) : false,
      ),
    password: Yup.string()
      .required('A senha é obrigatória.')
      .min(6, 'Sua senha deve conter 6 ou mais caracteres'),
  });

  async function handleSubmit(values: ILoginInput): Promise<void> {
    setIsLoading(true);

    setTimeout(() => {
      try {
        const storedUsers = localStorage.getItem('users');
        const users: IUser[] = storedUsers ? JSON.parse(storedUsers) : [];

        const user = users.find(
          user =>
            user.email === values.email && user.password === values.password,
        );

        if (user) {
          toast.success('Login realizado com sucesso!');
          sessionStorage.setItem('@token', 'mock-token');
          navigate('/');
        } else {
          toast.error('E-mail ou senha inválidos.');
        }
      } catch (error) {
        console.error('Ocorreu um erro desconhecido: ', error);
        toast.error('Erro ao logar. Por favor, tente novamente.');
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }

  return (
    <div>
      <h1>
        Bem-vindo de volta! <br /> Bom ver você novamente.
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field name="email" type="email" placeholder="E-mail" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <Field name="password" type="password" placeholder="Senha" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <a href="/recuperar-senha">Esqueceu sua senha?</a>
            </div>

            <button type="submit" disabled={isSubmitting || isLoading}>
              {isLoading ? 'Carregando...' : 'Entrar'}
            </button>
          </Form>
        )}
      </Formik>

      <p>
        Não tem uma conta? <a href="/registro">Cadastre-se</a>
      </p>
    </div>
  );
};

export default SignIn;
