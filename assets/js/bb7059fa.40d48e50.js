(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(88)),a={id:"faq",title:"FAQ",sidebar_label:"FAQ"},c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"How to set up an administrator",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/FAQ.md",slug:"/faq",permalink:"/fiora/docs/faq",editUrl:"https://github.com/yinxin630/fiora/edit/master/docs/docs/FAQ.md",version:"current",sidebar_label:"FAQ",sidebar:"docs",previous:{title:"Script",permalink:"/fiora/docs/script"},next:{title:"Change Log",permalink:"/fiora/docs/changelog"}},s=[{value:"How to set up an administrator",id:"how-to-set-up-an-administrator",children:[]},{value:"How to modify the default group name",id:"how-to-modify-the-default-group-name",children:[]},{value:"How to custom domain name",id:"how-to-custom-domain-name",children:[]},{value:"How to Disable register, manual account assignment",id:"how-to-disable-register-manual-account-assignment",children:[]},{value:"How to delete user",id:"how-to-delete-user",children:[]},{value:"The client throw an error &quot;\u8c03\u7528\u5931\u8d25,\u5904\u4e8e\u840c\u65b0\u9636\u6bb5&quot;",id:"the-client-throw-an-error-\u8c03\u7528\u5931\u8d25\u5904\u4e8e\u840c\u65b0\u9636\u6bb5",children:[]},{value:"An error is throwed when executing the command. &quot;Couldn&#39;t find a package.json file in xxx&quot;",id:"an-error-is-throwed-when-executing-the-command-couldnt-find-a-packagejson-file-in-xxx",children:[]},{value:"Why the modified configuration does not take effect",id:"why-the-modified-configuration-does-not-take-effect",children:[]},{value:"How to rebuild the client",id:"how-to-rebuild-the-client",children:[]}],d={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"how-to-set-up-an-administrator"},"How to set up an administrator"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Get user id. reference ",Object(i.b)("a",{parentName:"li",href:"/docs/script#getuserid"},"getUserId")),Object(i.b)("li",{parentName:"ol"},"Set ",Object(i.b)("inlineCode",{parentName:"li"},"Administrator")," in config to be administrator userId."),Object(i.b)("li",{parentName:"ol"},"Restart the server")),Object(i.b)("h2",{id:"how-to-modify-the-default-group-name"},"How to modify the default group name"),Object(i.b)("p",null,"reference ",Object(i.b)("a",{parentName:"p",href:"/docs/script#updatedefaultgroupname"},"updateDefaultGroupname")),Object(i.b)("h2",{id:"how-to-custom-domain-name"},"How to custom domain name"),Object(i.b)("p",null,"Recommend to use nginx reverse proxy"),Object(i.b)("p",null,"Example config, ",Object(i.b)("strong",{parentName:"p"},"Please modify the configuration of the comment item")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'server {\n   listen 80;\n   # Change to your domain name\n   server_name fiora.suisuijiang.com;\n\n   location / {\n      proxy_set_header   X-Real-IP        $remote_addr;\n      proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;\n      proxy_set_header   Host             $http_host;\n      proxy_set_header   Upgrade          $http_upgrade;\n      proxy_set_header   X-NginX-Proxy    true;\n      proxy_set_header   Connection "upgrade";\n      proxy_http_version 1.1;\n      proxy_pass         http://localhost:9200;\n   }\n}\n')),Object(i.b)("p",null,"HTTPS + HTTP 2.0 config"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'server {\n   listen 80;\n   # Change to your domain name\n   server_name fiora.suisuijiang.com;\n   return 301 https://fiora.suisuijiang.com$request_uri;\n}\nserver {\n   listen 443 ssl http2;\n   # Change to your domain name\n   server_name  fiora.suisuijiang.com;\n\n   ssl on;\n   # Modify to your ssl certificate location\n   ssl_certificate ./ssl/fiora.suisuijiang.com.crt;\n   ssl_certificate_key ./ssl/fiora.suisuijiang.com.key;\n   ssl_session_timeout 5m;\n   ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n   ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\n   ssl_prefer_server_ciphers on;\n\n   location / {\n      proxy_set_header   X-Real-IP        $remote_addr;\n      proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;\n      proxy_set_header   Host             $http_host;\n      proxy_set_header   Upgrade          $http_upgrade;\n      proxy_set_header   X-NginX-Proxy    true;\n      proxy_set_header   Connection "upgrade";\n      proxy_http_version 1.1;\n      proxy_pass         http://localhost:9200;\n   }\n}\n')),Object(i.b)("h2",{id:"how-to-disable-register-manual-account-assignment"},"How to Disable register, manual account assignment"),Object(i.b)("p",null,"Set ",Object(i.b)("inlineCode",{parentName:"p"},"DisableRegister")," in config to be true. Restart the server to take effect"),Object(i.b)("p",null,"Use scripts to manually register new users. Reference ",Object(i.b)("a",{parentName:"p",href:"/docs/script#register"},"register")),Object(i.b)("h2",{id:"how-to-delete-user"},"How to delete user"),Object(i.b)("p",null,"Reference ",Object(i.b)("a",{parentName:"p",href:"/docs/script#deleteuser"},"deleteUser")),Object(i.b)("h2",{id:"the-client-throw-an-error-\u8c03\u7528\u5931\u8d25\u5904\u4e8e\u840c\u65b0\u9636\u6bb5"},'The client throw an error "\u8c03\u7528\u5931\u8d25,\u5904\u4e8e\u840c\u65b0\u9636\u6bb5"'),Object(i.b)("p",null,"In order to prevent newly registered users from sending messages randomly, users whose registration time is less than 24 hours can only send 5 messages per minute."),Object(i.b)("h2",{id:"an-error-is-throwed-when-executing-the-command-couldnt-find-a-packagejson-file-in-xxx"},'An error is throwed when executing the command. "Couldn\'t find a package.json file in xxx"'),Object(i.b)("p",null,"First cd to the fiora root directory, and then execute the corresponding command"),Object(i.b)("h2",{id:"why-the-modified-configuration-does-not-take-effect"},"Why the modified configuration does not take effect"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"First confirm whether the configuration modification is correct\n-If you modify the configuration file directly, please make sure that the modified part of the syntax and format is correct\n-If you modify the configuration through the .env file, please make sure the format is correct"),Object(i.b)("li",{parentName:"ol"},"After modifying the configuration\n-If you modify the server configuration, you need to restart the server\n-If you modify the client configuration, you need to rebuild the client")),Object(i.b)("h2",{id:"how-to-rebuild-the-client"},"How to rebuild the client"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"yarn build:client && yarn move-dist")))}l.isMDXComponent=!0},88:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return r?o.a.createElement(m,c(c({ref:t},d),{},{components:r})):o.a.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);