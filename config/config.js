import { defineConfig } from "@umijs/max";
import {routes} from './routes';

export default defineConfig({
  plugins: ['@umijs/plugins/dist/antd', '@umijs/plugins/dist/locale'],  

  routes,
  crossorigin: true,
  extraBabelIncludes: [],
  svgr: {},
  compilerOptions: {
    "module": "commonjs",
    "target": "es5",
    "lib": ["ESNext"],
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "sourceMap": true,
    "baseUrl": "./src/",
    "paths": {
      "@/shared": ["./shared"]
    }
  },

  alias: {
    '@': './src',
    '@@': './src/.umi',
    'worker': './public/worker',
    'assets': './public/assets',
    '__tests__': './__tests__',
  },
  esbuildMinifyIIFE: true,
  codeSplitting: {
    jsStrategy: 'granularChunks'
  },    
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
  antd : {
    compact: true,
   
    import: true,
   
    style: 'less',

    //appConfig: {},
    // Transform DayJS to MomentJS
    momentPicker: true,
    // Add StyleProvider for legacy browsers
    styleProvider : { 
     hashPriority: 'high',
     legacyTransformer: true,
   },
  }
});
