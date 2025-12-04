import React from 'react';
import { Container } from '@plone/components';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import houseSVG from '@plone/volto/icons/home.svg';
import type { Area } from 'volto-trepi-intranet/types/content';

interface AreaInfoProps {
  content: Area;
  icon: boolean;
}

const AreaInfo: React.FC<AreaInfoProps> = ({ content, icon }) => {
  const { title, description } = content;

  return (
    <Container narrow className="area-info">
      {icon && <Icon name={houseSVG} size="64px" className={'icon listitem'} />}
      {title && (
        <Container className="titulo">
          <span className="value">{title}</span>
        </Container>
      )}
      {description && (
        <Container className="descricao">
          <span className="value">{description}</span>
        </Container>
      )}
    </Container>
  );
};

export default AreaInfo;
