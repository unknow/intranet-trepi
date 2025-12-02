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
      {endereco && (
        <Container>
          <span className="endereco">{endereco}</span>
        </Container>
      )}
      {complemento && (
        <Container>
          <span className="complemento">{complemento}</span>
        </Container>
      )}
      {cidade && estado && (
        <Container>
          <span className="cidade">{cidade}</span> {' - '}
          <span className="estado">{estado.token}</span>
        </Container>
      )}
      {cep && (
        <Container>
          <span className="cep">{cep}</span>
        </Container>
      )}
    </Container>
  );
};

export default Endereco;
