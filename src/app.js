

// export const request = {
//   timeout: 1000,
//   // other axios options you want
//   errorConfig: {
//     errorHandler ( ) {
//     },
//     errorThrower(){
//     }
//   },
//   requestInterceptors: [],
//   responseInterceptors: []
// };

let isSubApp = false;
export function modifyClientRenderOpts(memo) {
  return {
    ...memo,
    rootElement: isSubApp ? 'sub-root' : memo.rootElement,    
  };
}

// const HeaderIcon = ()=>{
//     console.log(DEPLOY_ENV,'DEPLOY_ENV')
//     return ( true || DEPLOY_ENV==='uat' || DEPLOY_ENV==='prd')? (
//       <div className="header-left-logo">
//       </div>
//     ):null;
//   }
