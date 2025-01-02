# 我的 Vue 3 应用

这是一个使用 Vite 构建的 Vue 3 应用程序，集成了 Pinia 状态管理、Element Plus UI 组件库、Axios 和 Alova 用于 HTTP 请求。

## 目录

- [项目简介](#项目简介)
- [安装](#安装)
- [开发](#开发)
- [构建](#构建)
- [测试](#测试)
- [项目结构](#项目结构)
- [依赖](#依赖)
- [贡献](#贡献)
- [许可证](#许可证)

## 项目简介

该项目是一个基于 Vue 3 的单页应用程序，使用 Vite 作为构建工具。项目中包含了 Pinia 用于状态管理，Element Plus 作为 UI 组件库，以及 Axios 和 Alova 用于处理 HTTP 请求。

## 安装

请确保你的系统中已安装 [Node.js](https://nodejs.org/) 和 [npm](https://www.npmjs.com/)。

克隆此仓库并安装依赖：

```bash
git clone https://github.com/yourusername/vite-project-master.git
cd vite-project-master
npm install
```

## 开发

启动开发服务器：

```bash
npm run dev
```

## 构建

构建生产环境版本：

```bash
npm run build
```

## 测试

运行单元测试：

```bash
npm run test
```

## 项目结构

```
src/
├── components/
│   ├── HelloWorld.vue
├── store/
│   ├── modules/
│       ├── exampleStore.js
├── App.vue
├── main.js
```

## 依赖

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Element Plus](https://element-plus.org/)
- [Axios](https://axios-http.com/)
- [Alova](https://alova.js.org/)
- [Jest](https://jestjs.io/)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [Babel](https://babeljs.io/)
- [Vue Jest](https://github.com/vuejs/vue-jest)

### 开发依赖

- **Vite**：现代 Web 项目的快速构建工具。
- **Jest**：JavaScript 测试框架。
- **Babel**：JavaScript 编译器。
- **Vue Test Utils**：用于测试 Vue 组件的工具。
- **Unplugin Auto Import**：自动导入组件。
- **Unplugin Vue Components**：自动导入 Vue 组件。

## 贡献

欢迎提交问题和改进建议。请确保在提交前运行测试，以确保代码质量。

## 许可证

该项目遵循 MIT 许可证。请参阅 [LICENSE](LICENSE) 文件了解更多信息。
