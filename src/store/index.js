import { createPinia } from 'pinia';
import logger from './plugins/logger';

const pinia = createPinia();

// 注册插件
pinia.use(logger);

export default pinia;
