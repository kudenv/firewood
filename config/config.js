// import { defineConfig } from "@umijs/max";
// import {routes} from './routes';
// //import { alias } from './alias';

// export default defineConfig({
//   plugins: ['@umijs/plugins/dist/antd', '@umijs/plugins/dist/locale'],  
//   crossorigin: true,
//   srcTranspiler: 'babel',
//   //srcTranspilerOptions: {},
//   // extraBabelPlugins: ['babel-plugin-formatjs'],
//   // extraBabelPresets: ['@babel/preset-react'],
//   extraBabelIncludes: [],
//   // externals: {'module': {
//   //   rules: [
//   //     {
//   //       test: /\.(jsx|js)$/,
//   //       exclude: /node_modules/,
//   //       use: {
//   //         loader: 'babel-loader',
//   //         options: {
//   //           presets: [
//   //             '@babel/preset-env',
//   //             '@babel/preset-react'
//   //           ]
//   //         }
//   //       }
//   //     }
//   //   ]
//   // }},
//   //esm: 'babel',
//   // extraBabelPlugins?: IBabelPlugin[];
//   //   extraBabelPresets?: IBabelPlugin[];
//   //   extraBabelIncludes?: Array<string | RegExp>;
//   svgr: {},
//   // "compilerOptions": {
//   //   "module": "commonjs",
//   //   "target": "es5",
//   //   "lib": ["ESNext"],
//   //   "jsx": "react-jsx",
//   //   "esModuleInterop": true,
//   //   "sourceMap": true,
//   //   "baseUrl": "./src/",
//   //   "paths": {
//   //     "@/shared": ["./shared"]
//   //   }
//   // },
//   // alias
//   alias: {
//     '@': './src',
//     '@@': './src/.umi',
//     'worker': './public/worker',
//     'assets': './public/assets',
//     '__tests__': './__tests__',
//   },
//   esbuildMinifyIIFE: true,
//   codeSplitting: {
//     jsStrategy: 'granularChunks'
//   },  

//   //   // ...alias
//   // },
//   //alias,
//   // routes: [
//   //   { path: "/", component: "feed" }, 
//   // ],
//   routes,
//   npmClient: 'yarn',
//   fastRefresh: true,
//   mfsu: true,
//   two: {},
//   initialState: {},
//   module: {},
//   layout:{ 
//     // https://umijs.org/docs/max/layout-menu#Build-time configuration
//     title:'UmiJS', 
//     locale:true, 
//   },  
// //   plugins: [
// //     ['umi-plugin-react', {
// //         antd: true,
// //         dva: {
// //             immer: true
// //         },
// //       }],
// //   ],
//   antd : {
//     // configProvider
//     //configProvider: {},
//     // themes
//     //dark: true,
//     compact: true,
//     //babel-plugin-import
//     import: true,
//     // less or css, default less
//     style: 'less',
//     // shortcut of `configProvider.theme`
//     // use to configure theme token, antd v5 only
//     //theme: {},
//     // antd <App /> valid for version 5.1.0 or higher, default: undefined
//     //appConfig: {},
//     // Transform DayJS to MomentJS
//     //momentPicker: true,
//     // Add StyleProvider for legacy browsers
//     styleProvider : { 
//      hashPriority: 'high',
//      legacyTransformer: true,
//    },
//   }
// });
