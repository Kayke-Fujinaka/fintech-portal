import { useState } from 'react';

import * as S from './styles';

const Profile = () => {
  const [name, setName] = useState<string>('Kayke Fujinaka');
  const [email, setEmail] = useState<string>('kayke@gmail.com');
  const [phone, setPhone] = useState<string>('+5511111111111');

  const handleSave = () => {};

  return (
    <S.Container>
      <S.ProfilePicture>
        <S.ImagePlaceholder />
        <S.EditPictureText>Alterar Imagem</S.EditPictureText>
      </S.ProfilePicture>
      <S.Form>
        <S.InputGroup>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </S.InputGroup>
        <S.ChangePasswordLink>Alterar Senha</S.ChangePasswordLink>
        <S.Button onClick={handleSave}>Editar</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Profile;
