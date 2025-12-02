import React from 'react';
import { Container } from '@plone/components';
import type { Area } from 'volto-trepi-intranet/types/content';

interface EnderecoProps {
  content: Area;
}

const Endereco: React.FC<EnderecoProps> = ({ content }) => {
  const { endereco, complemento, estado, cidade, cep } = content;

  return (
    <Container narrow className="endereco">
      <Container className="logradouro">
        <span className="label">Endereco</span>:{' '}
        <span className="value">{endereco}</span>
      </Container>
      <Container className="complemento">
        <span className="label">Complemento</span>:{' '}
        <span className="value">{complemento}</span>
      </Container>
      <Container className="estado">
        <span className="label">Estado</span>:{' '}
        <span className="value">{estado}</span>
      </Container>
      <Container className="cidade">
        <span className="label">Cidade</span>:{' '}
        <span className="value">{cidade}</span>
      </Container>
      <Container className="cep">
        <span className="label">CEP</span>: <span className="value">{cep}</span>
      </Container>
    </Container>
  );
};

export default Endereco;
