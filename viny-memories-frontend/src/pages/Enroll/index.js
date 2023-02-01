import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Title, Label } from '../../components/Auth';
import Link from '../../components/Link';
import useSignUp from '../../hooks/api/useEnroll';

export default function Enroll() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('As senhas devem ser iguais!');
    } else {
      try {
        const { signUpError } = await signUp(email, password, username);
        if (signUpError) throw signUpError;
        toast.success('Inscrito com sucesso! Por favor, faça login.');
        navigate('/');
      } catch (error) {
        toast.error('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <AuthLayout>
      <Row>
        <Title>Viny Memories</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={submit}>
          <Input
            placeholder="E-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Repita sua senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" disabled={loadingSignUp}>
            Inscrever
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}
