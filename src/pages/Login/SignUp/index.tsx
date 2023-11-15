import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { IRegisterInput, IUser } from '../../../interfaces/auth';
import { isEmail } from '../../../utils/validators';
import * as S from './styles';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues: IRegisterInput = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('O nome completo é obrigatório.'),
    email: Yup.string()
      .required('O e-mail é obrigatório.')
      .test('is-email', 'Entre com e-mail válido.', value =>
        value ? isEmail(value) : false,
      ),
    password: Yup.string()
      .required('A senha é obrigatória.')
      .min(6, 'Sua senha deve conter 6 ou mais caracteres.'),
    confirmPassword: Yup.string()
      .required('A confirmação de senha é obrigatória.')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais.'),
  });

  async function handleSubmit(
    values: IRegisterInput,
    { resetForm }: { resetForm: () => void },
  ): Promise<void> {
    setIsLoading(true);

    try {
      setTimeout(() => {
        const storedUsers = localStorage.getItem('users');
        const users: IUser[] = storedUsers ? JSON.parse(storedUsers) : [];

        if (users.some(user => user.email === values.email)) {
          toast.error('E-mail já registrado.');
          setIsLoading(false);
          return;
        }

        const newUser = {
          name: values.name,
          email: values.email,
          password: values.password,
        };

        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));
        resetForm();
        toast.success('Registro realizado com sucesso!');
      }, 1000);
    } catch (error) {
      console.error('Ocorreu um erro desconhecido: ', error);
      toast.error('Erro ao registrar. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <S.Container>
      <S.Content>
        <h1>
          Junte-se a nós! <br /> Cria sua conta agora.
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <S.StyledForm>
              <S.InputGroup>
                <Field name="name" type="text" placeholder="Nome completo" />
                <ErrorMessage name="name" component="div" />
              </S.InputGroup>

              <S.InputGroup>
                <Field name="email" type="email" placeholder="E-mail" />
                <ErrorMessage name="email" component="div" />
              </S.InputGroup>

              <S.InputGroup>
                <Field name="password" type="password" placeholder="Senha" />
                <ErrorMessage name="password" component="div" />
              </S.InputGroup>

              <S.InputGroup>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirmar senha"
                />
                <ErrorMessage name="confirmPassword" component="div" />
              </S.InputGroup>

              <button type="submit" disabled={isSubmitting || isLoading}>
                {isLoading ? 'Carregando...' : 'Registrar'}
              </button>
            </S.StyledForm>
          )}
        </Formik>
      </S.Content>
      <S.Footer>
        <p>
          Já possui uma conta? <a href="/">Entrar</a>
        </p>
      </S.Footer>
    </S.Container>
  );
};

export default SignUp;
