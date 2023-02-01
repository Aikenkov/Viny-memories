import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Title, Label } from '../../components/Auth';
import Link from '../../components/Link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    try {
      //const { signUpError } = await signUp(email, password);
      //if (signUpError) throw signUpError;
      toast('Inscrito com sucesso! Por favor, faça login.');
      navigate('/sign-in');
    } catch (error) {
      toast('Não foi possível fazer o cadastro!');
    }
  }

  return (
    <AuthLayout>
      <Row>
        <Title>Viny Memories</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input placeholder="E-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" disabled={false}>
            Entrar
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}
