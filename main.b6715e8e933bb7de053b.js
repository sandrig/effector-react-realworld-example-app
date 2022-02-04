"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{2178:function(e,n,r){r.d(n,{q:function(){return c}});var t=r(2737),a=r(4246),c=function(e){var n=e.className,r=t.wl.useUsername(),c=t.wl.useImage();return(0,a.jsx)("img",{alt:r,className:n||void 0,src:c})}},2737:function(e,n,r){r.d(n,{TC:function(){return m},QS:function(){return l},Sj:function(){return p},Lt:function(){return s},xI:function(){return o},wl:function(){return g}});var t=r(1549),a=r(9041),c=r(8722),i=r(4703),_=r(946),o=(0,t.yM)(),s=(0,t.GW)((function(){return _.WY({url:"user",method:"get"}).then((function(e){return e.user}))})),p=(0,t.nu)(s.doneData,{bio:"",createdAt:"",email:"",id:null,image:"",token:null,updatedAt:"",username:""}).reset(o),l=p.map((function(e){return e.username})),d=p.map((function(e){return e.image})),u=p.map((function(e){return e.token})),m=u.map(Boolean);(0,c.t)({store:l,key:"visitor-username"}),(0,c.t)({store:d,key:"visitor-image"}),(0,t.lo)({source:u,filter:Boolean}).watch(_.o4),(0,c.t)({store:u,key:i.L});var g={useIsAuthorized:function(){return(0,a.oR)(m)},useUsername:function(){return(0,a.oR)(l)},useImage:function(){return(0,a.oR)(d)},useVisitor:function(){return(0,a.oR)(p)}}},2810:function(e,n,r){var t=r(7378),a=r(6794),c=r(8715),i=r(1183),_=r(9635),o=r(9041),s=r(335),p=r(4123),l=r(4300),d=r(2737),u=r(4246),m=["children"];function g(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?g(Object(r),!0).forEach((function(n){v(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function v(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function h(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=function(e){var n=e.children,r=h(e,m),t=d.wl.useIsAuthorized();return(0,u.jsx)(_.AW,f(f({},r),{},{render:function(e){var r=e.location;return t?n:(0,u.jsx)(_.l_,{to:{pathname:l.Z.login,state:{from:r}}})}}))},k=r(4162),O=r(4346),E=function(e){var n=e.children;return(0,u.jsx)("pre",{children:n})},x=r(7765),D=r(1549),y=(0,o.Bq)();(0,D.lo)({source:d.TC,filter:Boolean,clock:y.open,target:d.Lt});var j=r(4703),N=r(1650),R=function(e){var n=e.className,r=void 0===n?"":n,t=e.children;return(0,u.jsx)("header",{className:"navbar navbar-light ".concat(r),children:(0,u.jsx)(N.W,{children:t})})},T=r(4289),I=function(e){var n=e.title;return(0,u.jsx)(T.rU,{className:"navbar-brand",to:l.Z.root,children:n.toLowerCase()})},w=r(2178),A=r(3128),P=function(e){var n=e.children,r=d.wl.useUsername();return(0,u.jsxs)(T.OL,{exact:!0,className:"nav-link",to:"/@".concat(r),children:[n,r]})},H=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(A.L,{children:(0,u.jsx)(T.OL,{exact:!0,className:"nav-link",to:l.Z.root,children:"Home"})}),(0,u.jsx)(A.L,{children:(0,u.jsxs)(T.OL,{exact:!0,className:"nav-link",to:l.Z.editor.root,children:[(0,u.jsx)("i",{className:"ion-compose"})," New Post"]})}),(0,u.jsx)(A.L,{children:(0,u.jsxs)(T.OL,{exact:!0,className:"nav-link",to:l.Z.settings,children:[(0,u.jsx)("i",{className:"ion-gear-a"})," Settings"]})}),(0,u.jsx)(A.L,{children:(0,u.jsx)(P,{children:(0,u.jsx)(w.q,{className:"user-pic"})})})]})},U=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(A.L,{children:(0,u.jsx)(T.OL,{exact:!0,className:"nav-link",to:l.Z.root,children:"Home"})}),(0,u.jsx)(A.L,{children:(0,u.jsx)(T.OL,{exact:!0,className:"nav-link",to:l.Z.login,children:"Sign In"})}),(0,u.jsx)(A.L,{children:(0,u.jsx)(T.OL,{exact:!0,className:"nav-link",to:l.Z.registration,children:"Sign Up"})})]})},L=function(){return d.wl.useIsAuthorized()?(0,u.jsx)(H,{}):(0,u.jsx)(U,{})},S=function(e){var n=e.children;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(R,{children:[(0,u.jsx)(I,{title:j.i}),(0,u.jsx)("ul",{className:"nav navbar-nav pull-xs-right",children:(0,u.jsx)(L,{})})]}),n]})};function B(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,a,c=[],i=!0,_=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(c.push(t.value),!n||c.length!==n);i=!0);}catch(e){_=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(_)throw a}}return c}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return G(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var C=(0,i.w)((function(){return(0,o.DD)(y),(0,u.jsx)(_.F0,{history:p.m8,children:(0,u.jsx)(s.Fz,{ReactRouterRoute:_.AW,children:(0,u.jsx)(S,{children:(0,u.jsx)(J,{})})})})})),M=(0,t.lazy)((function(){return r.e(978).then(r.bind(r,1978))})),z=(0,t.lazy)((function(){return r.e(890).then(r.bind(r,5890))})),F=(0,t.lazy)((function(){return r.e(710).then(r.bind(r,9710))})),W=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(991)]).then(r.bind(r,2991))})),V=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(782)]).then(r.bind(r,3782))})),Z=(0,t.lazy)((function(){return r.e(382).then(r.bind(r,382))})),X=(0,t.lazy)((function(){return Promise.all([r.e(216),r.e(432)]).then(r.bind(r,4432))})),K=(0,t.lazy)((function(){return r.e(771).then(r.bind(r,8771))})),Y=[{path:l.Z.login,isPrivate:!1,component:M},{path:l.Z.registration,isPrivate:!1,component:z},{path:[l.Z.root,l.Z.globalFeed,l.Z.feedByTag],exact:!0,isPrivate:!1,component:F},{path:l.Z.profile.root,isPrivate:!1,component:Z},{path:l.Z.article,isPrivate:!1,component:X},{path:[l.Z.editor.root,l.Z.editor.slug],isPrivate:!0,component:W},{path:l.Z.settings,isPrivate:!0,component:V},{path:"*",exact:!1,isPrivate:!1,component:K}];function J(){var e=B((0,t.useState)(!1),2),n=e[0],r=e[1],a=(0,t.useCallback)((function(){return r((function(e){return!e}))}),[]);return(0,u.jsx)(c.ErrorBoundary,{fallbackRender:q,resetKeys:[n],onReset:a,children:(0,u.jsx)(t.Suspense,{fallback:(0,u.jsx)(k.$,{}),children:(0,u.jsx)(_.rs,{children:Y.map((function(e){return e.isPrivate?(0,u.jsx)(b,{exact:e.exact,path:e.path,children:(0,u.jsx)(e.component,{})},e.path.toString()):(0,u.jsx)(_.AW,{exact:e.exact,path:e.path,children:(0,u.jsx)(e.component,{})},e.path.toString())}))})})})}function q(e){var n=e.error,r=e.resetErrorBoundary;return(0,u.jsxs)(O.T,{children:[(0,u.jsx)("p",{children:"Something went wrong:"}),(0,u.jsx)(E,{children:n.message}),(0,u.jsx)(x.z,{onClick:function(){r()},children:"Try again"})]})}(0,a.render)((0,u.jsx)(t.StrictMode,{children:(0,u.jsx)(C,{})}),document.getElementById("root"))},4703:function(e,n,r){r.d(n,{i:function(){return t},L:function(){return a}});var t="Conduit",a="access_token"},946:function(e,n,r){r.d(n,{o4:function(){return i},WY:function(){return _}});var t,a=r(4206),c=r.n(a)().create({baseURL:null!==(t={npm_package_dependencies_effector_storage:"^5.0.0",npm_package_devDependencies_identity_obj_proxy:"^3.0.0",npm_package_devDependencies__types_node:"^17.0.14",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",npm_package_devDependencies__types_react_router_dom:"^5.3.3",USER:"runner",npm_package_devDependencies_webpack_cli:"^4.9.2",npm_package_devDependencies_jest:"^27.4.7",npm_package_devDependencies__testing_library_jest_dom:"^5.16.2",npm_config_version_commit_hooks:"true",npm_config_user_agent:"yarn/1.22.17 npm/? node/v16.13.2 linux x64",CI:"true",npm_config_bin_links:"true",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_13c763fe-af85-40a5-aecb-c2cda4905e69",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/16.13.2/x64/bin/node",npm_package_dependencies_effector_react:"^22.0.6",npm_package_devDependencies_file_loader:"^6.2.0",npm_config_init_version:"1.0.0",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_package_dependencies_react_hook_form:"^7.25.3",npm_package_dependencies_markdown_to_jsx:"^7.1.6",HOME:"/home/runner",npm_package_dependencies_effector:"^22.1.2",npm_package_devDependencies__typescript_eslint_parser:"^5.10.2",npm_package_browserslist_production_0:">0.2%",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_dependencies_patronum:"^1.1.0",npm_package_devDependencies_eslint_plugin_import_helpers:"^1.2.1",npm_package_devDependencies_eslint_config_prettier:"^8.3.0",npm_package_devDependencies__testing_library_react_hooks:"^7.0.2",npm_package_browserslist_production_1:"not dead",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GRAALVM_11_ROOT:"/usr/local/graalvm/graalvm-ce-java11-22.0.0.2",GITHUB_REPOSITORY_OWNER:"mg901",npm_package_browserslist_production_2:"not op_mini all",npm_config_init_license:"MIT",GRADLE_HOME:"/usr/share/gradle-7.3.3",HOMEBREW_PREFIX:"/home/linuxbrew/.linuxbrew",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/23.1.7779620",GITHUB_RETENTION_DAYS:"90",YARN_WRAP_OUTPUT:"false",npm_package_devDependencies_terser_webpack_plugin:"^5.3.1",npm_package_devDependencies_onchange:"^7.1.0",npm_config_version_tag_prefix:"v",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu20",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_package_devDependencies_rimraf:"^3.0.2",npm_package_devDependencies_favicons_webpack_plugin:"^5.0.2",npm_package_devDependencies_husky:"^7.0.4",npm_package_devDependencies_eslint_plugin_react_hooks:"^4.3.0",npm_package_devDependencies_css_minimizer_webpack_plugin:"^3.4.1",npm_package_devDependencies__types_marked:"^4.0.2",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",npm_package_description:"[![RealWorld Frontend](https://img.shields.io/badge/realworld-frontend-%23783578.svg)](http://realworld.io)",npm_package_dependencies_react_router_dom:"^5.3.0",npm_package_devDependencies_typescript:"^4.5.5",npm_package_devDependencies_babel_loader:"^8.2.3",npm_package_scripts_predeploy:"npm run build",NVM_DIR:"/home/runner/.nvm",npm_package_readmeFilename:"README.md",npm_package_devDependencies__types_react_dom:"^17.0.11",npm_package_devDependencies__types_history:"^4.7.9",npm_package_devDependencies__babel_preset_env:"^7.16.11",npm_package_homepage:"https://mg901.github.io/effector-react-realworld-example-app",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20220131.1",npm_package_devDependencies_typescript_plugin_css_modules:"^3.4.0",npm_package_devDependencies_prettier:"^2.5.1",npm_package_devDependencies__babel_plugin_transform_runtime:"^7.17.0",npm_package_sideEffects_0:"*.css",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",SWIFT_PATH:"/usr/share/swift/usr/bin",npm_package_devDependencies_eslint_plugin_import:"^2.25.4",npm_package_devDependencies__babel_preset_typescript:"^7.16.7",npm_package_scripts_clean:"rm build",RUNNER_USER:"runner",CHROMEWEBDRIVER:"/usr/local/share/chrome_driver",JOURNAL_STREAM:"8:22796",GITHUB_WORKFLOW:"github pages",_:"/usr/local/bin/yarn",npm_package_devDependencies_autoprefixer:"^10.4.2",npm_package_devDependencies__types_jest:"^27.4.0",npm_package_devDependencies__commitlint_config_conventional:"^16.0.0",npm_package_devDependencies__babel_preset_react:"^7.16.7",GOROOT_1_15_X64:"/opt/hostedtoolcache/go/1.15.15/x64",npm_package_devDependencies__typescript_eslint_eslint_plugin:"^5.10.2",npm_package_scripts_lint:"cross-env eslint . --ext .js,.jsx,.ts,.tsx --fix.",npm_package_scripts_prepare:"husky install",npm_config_registry:"https://registry.yarnpkg.com",GITHUB_RUN_ID:"1794020376",GOROOT_1_16_X64:"/opt/hostedtoolcache/go/1.16.13/x64",npm_package_devDependencies__babel_core:"^7.17.0",GOROOT_1_17_X64:"/opt/hostedtoolcache/go/1.17.6/x64",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_BASE_REF:"",ImageOS:"ubuntu20",npm_package_devDependencies_html_webpack_plugin:"^5.5.0",npm_package_devDependencies_clean_webpack_plugin:"^4.0.0",npm_package_scripts_start:"cross-env NODE_ENV=development webpack serve",npm_config_ignore_scripts:"",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_package_dependencies_react_hot_loader:"^4.13.0",npm_package_dependencies_axios:"^0.25.0",npm_package_devDependencies_postcss_loader:"^6.2.1",npm_package_devDependencies_eslint_import_resolver_babel_module:"^5.3.1",npm_package_browserslist_development_0:"last 1 chrome version",PATH:"/tmp/yarn--1643964607208-0.656126178836334:/home/runner/work/effector-react-realworld-example-app/effector-react-realworld-example-app/node_modules/.bin:/home/runner/.config/yarn/link/node_modules/.bin:/opt/hostedtoolcache/node/16.13.2/x64/libexec/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/16.13.2/x64/lib/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/16.13.2/x64/bin/node_modules/npm/bin/node-gyp-bin:/opt/hostedtoolcache/node/16.13.2/x64/bin:/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",NODE:"/opt/hostedtoolcache/node/16.13.2/x64/bin/node",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_7a62df54-2817-4032-b175-2e14ba041711",INVOCATION_ID:"f6589cd716684faca4320bd99f72f44c",HOMEBREW_CELLAR:"/home/linuxbrew/.linuxbrew/Cellar",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",npm_package_devDependencies_size_limit:"^7.0.5",npm_package_browserslist_development_1:"last 1 firefox version",npm_package_scripts_lint_file:"cross-env eslint . --ext .js,.jsx,.ts,.tsx --fix",npm_package_name:"effector-react-realworld-example-app",GITHUB_ACTION:"__run_5",GITHUB_RUN_NUMBER:"1191",RUNNER_ARCH:"X64",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",npm_package_devDependencies_eslint_plugin_jsx_a11y:"^6.5.1",npm_package_browserslist_development_2:"last 1 safari version",npm_package_devDependencies_webpack_merge:"^5.8.0",npm_package_devDependencies_eslint_config_airbnb:"^19.0.4",npm_package_devDependencies_cz_conventional_changelog:"^3.3.0",npm_package_devDependencies__commitlint_cli:"^16.1.0",npm_package_size_limit_0_limit:"129kb",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",npm_package_dependencies_react_dom:"^17.0.2",npm_package_dependencies_history:"4.10.1",npm_package_devDependencies_webpack:"^5.68.0",npm_package_devDependencies_react_test_renderer:"^17.0.2",npm_package_devDependencies_react_polymorphic_types:"^2.0.0",npm_package_devDependencies_eslint:"^8.8.0",npm_package_scripts_pretty:"cross-env prettier --write '**/*.{j,t}{s,sx}'",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 2",XDG_CONFIG_HOME:"/home/runner/.config",GITHUB_REF_NAME:"master",GITHUB_REPOSITORY:"mg901/effector-react-realworld-example-app",npm_lifecycle_script:"cross-env NODE_ENV=production webpack",npm_package_devDependencies_dotenv:"^16.0.0",npm_package_devDependencies_copy_webpack_plugin:"^10.2.4",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk-bundle",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_package_devDependencies_webpack_dev_server:"^4.7.4",npm_package_size_limit_0_path:"build/*.js",npm_package_scripts_test:"cross-env jest",npm_config_version_git_message:"v%s",GITHUB_ACTIONS:"true",STATS_KEEPALIVE:"false",npm_lifecycle_event:"build",npm_package_devDependencies_node_static:"^0.7.11",npm_package_devDependencies_jest_environment_jsdom:"^27.4.6",npm_package_devDependencies_commitizen:"^4.2.4",npm_package_devDependencies__types_react:"^17.0.37",npm_package_devDependencies__testing_library_react:"^12.1.2",npm_package_version:"1.0.0",GITHUB_REF_PROTECTED:"false",npm_config_argv:'{"remain":[],"cooked":["run","build"],"original":["build"]}',npm_package_devDependencies_lint_staged:"^12.3.3",npm_package_scripts_build:"cross-env NODE_ENV=production webpack",GITHUB_WORKSPACE:"/home/runner/work/effector-react-realworld-example-app/effector-react-realworld-example-app",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",npm_package_devDependencies_css_modules_typescript_loader:"^4.0.1",GITHUB_SHA:"f6b9e91973aaa55cb2fe450c60d6d0519fb42a96",GITHUB_RUN_ATTEMPT:"1",npm_package_devDependencies_query_string:"^7.1.0",npm_config_version_git_tag:"true",npm_config_version_git_sign:"",GITHUB_REF:"refs/heads/master",GITHUB_ACTOR:"mg901",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",npm_package_dependencies_clsx:"^1.1.1",npm_package_devDependencies_favicons:"^6.2.2",npm_package_devDependencies_eslint_plugin_react:"^7.28.0",npm_package_scripts_typecheck:"cross-env tsc",npm_package_license:"MIT",npm_config_strict_ssl:"true",LEIN_HOME:"/usr/local/lib/lein",npm_package_devDependencies_style_loader:"^3.3.1",npm_package_devDependencies_eslint_plugin_prettier:"^4.0.0",npm_package_scripts_test_watch:"cross-env jest --watch",npm_package_scripts_commit:"cross-env git-cz",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_13c763fe-af85-40a5-aecb-c2cda4905e69",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/effector-react-realworld-example-app/effector-react-realworld-example-app",RUNNER_WORKSPACE:"/home/runner/work/effector-react-realworld-example-app",npm_execpath:"/usr/local/lib/node_modules/yarn/bin/yarn.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.9.8-standalone.jar",npm_package_devDependencies_css_loader:"^6.6.0",HOMEBREW_REPOSITORY:"/home/linuxbrew/.linuxbrew/Homebrew",npm_package_dependencies_use_query_params:"^1.2.3",npm_package_devDependencies_cross_env:"^7.0.3",npm_config_save_prefix:"^",npm_config_ignore_optional:"",npm_config_scripts_prepend_node_path:"true",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",npm_package_devDependencies_mini_css_extract_plugin:"^2.5.3",npm_package_scripts_preview:"npx serve -s build",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",npm_package_devDependencies__hot_loader_react_dom:"^17.0.2",NODE_ENV:"production",INIT_CWD:"/home/runner/work/effector-react-realworld-example-app/effector-react-realworld-example-app",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk-bundle",npm_package_dependencies_react:"^17.0.2",npm_package_devDependencies_eslint_plugin_effector:"^0.6.0",npm_package_devDependencies_babel_plugin_module_resolver:"^4.1.0",npm_package_devDependencies__size_limit_preset_app:"^7.0.5"}.API_ROOT)&&void 0!==t?t:"https://api.realworld.io/api/"});c.interceptors.response.use((function(e){return e}),(function(e){var n;return 401===(null===(n=e.response)||void 0===n?void 0:n.status)&&window.location.assign("/login"),Promise.reject(e)}));var i=function(e){c.defaults.headers.common.Authorization="Token ".concat(e)},_=function(e){return c.request({url:e.url,method:e.method,data:null==e?void 0:e.data}).then((function(e){return e.data})).catch((function(e){var n;throw null===(n=e.response)||void 0===n?void 0:n.data}))}},4300:function(e,n,r){r.d(n,{Z:function(){return c}});var t="/@:username",a="/editor",c={root:"/",login:"/login",registration:"/registration",article:"/article/:slug",profile:{root:t,favorites:"".concat(t,"/favorites")},globalFeed:"/global-feed",feedByTag:"/feed-by-tag",settings:"/settings",editor:{root:a,slug:"".concat(a,"/:slug")}}},4123:function(e,n,r){r.d(n,{m8:function(){return a},Lr:function(){return _},z$:function(){return o}});var t=r(1549),a=(0,r(2534).lX)({basename:"/effector-react-realworld-example-app"}),c=(0,t.yM)(),i=(0,t.nu)(c,a.location),_=i.map((function(e){return e.pathname})),o=i.map((function(e){return e.search}));a.listen((function(e){c(e)}))},7765:function(e,n,r){r.d(n,{z:function(){return l}});var t=r(7378),a=r(8944),c=r(4246),i=["type","size","className","children"];function _(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?_(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=(0,t.memo)((0,t.forwardRef)((function(e,n){var r=e.type,t=void 0===r?"button":r,_=e.size,s=void 0===_?"":_,l=e.className,d=void 0===l?"":l,u=e.children,m=p(e,i),g=(0,a.Z)("btn",{"btn-sm":"sm"===s,"btn-lg":"lg"===s});return(0,c.jsx)("button",o(o({className:"".concat(g," ").concat(d),ref:n,type:t},m),{},{children:u}))})));l.displayName="Button"},1650:function(e,n,r){r.d(n,{W:function(){return a}});var t=r(4246),a=function(e){var n=e.className,r=void 0===n?"":n,a=e.children;return(0,t.jsx)("div",{className:"container ".concat(r),children:a})}},3128:function(e,n,r){r.d(n,{L:function(){return c}});var t=r(7378),a=r(4246),c=(0,t.memo)((function(e){var n=e.children;return(0,a.jsx)("li",{className:"nav-item",children:n})}));c.displayName="NavItem"},4346:function(e,n,r){r.d(n,{T:function(){return i}});var t=r(1650),a="page-JiPX4fJBjO",c=r(4246),i=function(e){var n=e.children;return(0,c.jsx)(t.W,{className:a,children:n})}},4162:function(e,n,r){r.d(n,{$:function(){return i}});var t=r(7378),a="spinner-O9wY279xSI",c=r(4246),i=(0,t.forwardRef)((function(e,n){var r=e.show;return void 0===r||r?(0,c.jsx)("div",{className:"".concat(a," text-success"),ref:n,children:(0,c.jsx)("span",{className:"sr-only"})}):null}))}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[216],(function(){return n(9422),n(2810)}));e.O()}]);