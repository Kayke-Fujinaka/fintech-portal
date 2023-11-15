import { Formik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Button } from '../../../components/Login/Button';
import { Footer } from '../../../components/Login/Footer';
import { Heading } from '../../../components/Login/Heading';
import { Input } from '../../../components/Login/Input';
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
        <Heading
          firstParagraph="Junte-se a nós!"
          secondParagraph="Cria sua conta agora."
        />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <S.StyledForm>
              <Input name={'name'} placeholder={'Nome Completo'} />
              <Input name={'email'} type={'email'} placeholder={'E-mail'} />
              <Input
                name={'password'}
                type={'password'}
                placeholder={'Senha'}
              />
              <Input
                name={'confirmPassword'}
                type={'password'}
                placeholder={'Confirmar senha'}
              />

              <Button
                isSubmitting={isSubmitting}
                isLoading={isLoading}
                text="Registrar"
              />
            </S.StyledForm>
          )}
        </Formik>
      </S.Content>

      <Footer
        text={'Já possui uma conta? '}
        redirectPath={'/'}
        actionText={'Entrar'}
      />
    </S.Container>
  );
};

export default SignUp;
