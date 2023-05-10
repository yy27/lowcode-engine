import template from './template';
import entry from './plugins/entry';
import entryHtml from './plugins/entryHtml';
import globalStyle from './plugins/globalStyle';
import packageJSON from './plugins/packageJSON';
import router from './plugins/router';
import menu from './plugins/menu';

export default {
  template,
  plugins: {
    entry,
    entryHtml,
    globalStyle,
    packageJSON,
    router,
    menu,
  },
};
