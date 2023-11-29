import { defineConfig } from "@umijs/max";
//import { alias } from './alias';

export default defineConfig({
  plugins: ['@umijs/plugins/dist/antd', '@umijs/plugins/dist/locale'],
  //alias,
  routes: [
    { path: "/", component: "feed" }, 
  ],
  npmClient: 'yarn',
  fastRefresh: true,
  mfsu: true,
  two: {},
  initialState: {},
  module: {},
  layout:{ 
    // https://umijs.org/docs/max/layout-menu#Build-time configuration
    title:'UmiJS', 
    locale:true, 
  },  
//   plugins: [
//     ['umi-plugin-react', {
//         antd: true,
//         dva: {
//             immer: true
//         },
//       }],
//   ],
  antd : {
    // configProvider
    //configProvider: {},
    // themes
    //dark: true,
    compact: true,
    // babel-plugin-import
   // import: true,
    // less or css, default less
    style: 'less',

    // shortcut of `configProvider.theme`
    // use to configure theme token, antd v5 only
    //theme: {},
    // antd <App /> valid for version 5.1.0 or higher, default: undefined
    //appConfig: {},
    // Transform DayJS to MomentJS
    //momentPicker: true,
    // Add StyleProvider for legacy browsers
    styleProvider : { 
     hashPriority: 'high',
     legacyTransformer: true,
   },
  }
});
