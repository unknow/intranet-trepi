import type { ConfigType } from '@plone/registry';
import type { BlockConfigBase } from '@plone/types';
import AreaGridItem from 'volto-trepi-intranet/components/Blocks/Grid/AreaGridItem';
import ClimaBlockInfo from 'volto-trepi-intranet/components/Blocks/Clima';

declare module '@plone/types' {
  export interface BlocksConfigData {
    climaBlock: BlockConfigBase;
  }
}

function installLocalBlocks(config: ConfigType) {
  config.blocks.blocksConfig.climaBlock = ClimaBlockInfo;
  return config;
}

export default function install(config: ConfigType) {
  installLocalBlocks(config);

  // Registra Componente para exibir uma Área quando a listagem for de Grade
  config.registerComponent({
    name: 'GridListingItemTemplate',
    component: AreaGridItem,
    dependencies: 'Area',
  });
  return config;
}
