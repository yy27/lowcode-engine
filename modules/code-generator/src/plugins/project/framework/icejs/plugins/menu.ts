import { COMMON_CHUNK_NAME } from '../../../../../const/generator';

import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IRouterInfo,
} from '../../../../../types';

const pluginFactory: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IRouterInfo;
    next.chunks = [];
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.JS,
      name: COMMON_CHUNK_NAME.FileVarDefine,
      content: `
      const headerMenuConfig = [];
      const asideMenuConfig = [
        ${ir.routes
          .map(
            (route) => `
                {
                  name: 'Dashboard',
                  path: '${route.path}',
                  icon: 'smile',
                },
              `,
          )
          .join(',')}
      ];
      export { headerMenuConfig, asideMenuConfig };
      `,
      linkAfter: [],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
