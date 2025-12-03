import React from 'react';
import { Container } from '@plone/components';
import type { Area } from 'volto-trepi-intranet/types/content';

interface AreaInfoProps {
  content: Area;
}

const AreaInfo: React.FC<AreaInfoProps> = ({ content }) => {
  const { title, description } = content;

  return (
    <Container narrow className="area-info">
      Informações da Unidade:
      {title && (
        <Container className="titulo">
          <span className="label">Sigla</span>:{' '}
          <span className="value">{title}</span>
        </Container>
      )}
      {description && (
        <Container className="descricao">
          <span className="label">Nome</span>:{' '}
          <span className="value">{description}</span>
        </Container>
      )}
    </Container>
  );
};

export default AreaInfo;
