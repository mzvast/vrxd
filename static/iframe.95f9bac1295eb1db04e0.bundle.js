(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{670:function(e,n,r){"use strict";var t=r(52),o=r.n(t),i=r(104),a=r.n(i),u=r(3),c=r.n(u),s=r(5),l=r.n(s),d=r(8),f=r.n(d),b=r(9),p=r.n(b),m=r(10),v=r.n(m),h=r(17),g=r.n(h),k=r(6),y=r.n(k),w=r(149),O=r.n(w),D=r(0),S=r.n(D),B=r(166);function C(){var e=O()(["\n    font-family: NotoSansCJKsc-Medium;\n    font-size: ",";\n    /* color: #ffffff; */\n    color: ",";\n    letter-spacing: 0;\n    text-align: center;\n    width: 100%;\n    line-height: ",";\n"]);return C=function(){return e},e}function j(){var e=O()(["\n    height: ",";\n    width: ",";\n    display: flex;\n    position: relative;\n    align-items: center;\n    box-sizing: border-box;\n    background: ",";\n    border: ",";\n    cursor: pointer;\n    border-radius: 0.31rem;\n    :hover {\n        background: ",";\n    }\n    :active {\n        background: ",";\n    }\n"]);return j=function(){return e},e}var T=B.a.div(j(),function(e){return e.height},function(e){return e.width},function(e){return e.background},function(e){return e.border},function(e){return e.hoverBackground},function(e){return e.activeBackground}),E=B.a.div(C(),function(e){return e.fontSize||"1.25rem"},function(e){return e.color},function(e){return e.fontSize||"1.25rem"}),F=function(e){function n(){var e,r;c()(this,n);for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return r=f()(this,(e=p()(n)).call.apply(e,[this].concat(o))),y()(g()(g()(r)),"state",void 0),r}return v()(n,e),l()(n,[{key:"render",value:function(){var e,n,r=this.props,t=r.children,i=r.type,u=r.isDisabled,c=r.fontSize,s=a()(r,["children","type","isDisabled","fontSize"]),l="#ffffff",d="none",f="#FFFFFF";if(this.props.isDisabled)l=e="#CCCCCC";else switch(i){case"blue":l="#0E99F6",e="#4BB4FF",n="#0171C1";break;case"red":l="#F65A54",e="#DD514B";break;case"blue-border":d="0.09rem solid #6E77F6",f="#6E77F6",e="rgba(110,119,246,0.10)";break;case"grey-border":d="0.09rem solid  #999DB5",e=" #DDDDDD",f="#666666",n="#BDBDBD";break;case"black":l="#454545",e="#292929"}return S.a.createElement(T,o()({},s,{background:l,border:d,hoverBackground:e},{activeBackground:n||e},{onClick:u?void 0:this.props.onClick.bind(this)}),S.a.createElement(E,o()({color:f},{fontSize:c}),t))}}]),n}(D.PureComponent);y()(F,"defaultProps",{height:"3rem",width:"6.56rem",type:"blue",isDisabled:!1,onClick:function(){}}),n.a=F,F.__docgenInfo={description:"",methods:[],displayName:"SimpleButton",props:{height:{defaultValue:{value:"'3rem'",computed:!1},required:!1,flowType:{name:"string"},description:""},width:{defaultValue:{value:"'6.56rem'",computed:!1},required:!1,flowType:{name:"string"},description:""},type:{defaultValue:{value:"'blue'",computed:!1},required:!1,flowType:{name:"union",raw:"'blue' | 'red' | 'blue-border' | 'grey-border' | 'black'",elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'red'"},{name:"literal",value:"'blue-border'"},{name:"literal",value:"'grey-border'"},{name:"literal",value:"'black'"}]},description:""},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},onClick:{defaultValue:{value:"function() {}",computed:!1},required:!1,flowType:{name:"Function"},description:""},fontSize:{required:!0,flowType:{name:"string"},description:""},children:{required:!0,flowType:{name:"any"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/simple-button/SimpleButton.jsx"]={name:"SimpleButton",docgenInfo:F.__docgenInfo,path:"src/components/simple-button/SimpleButton.jsx"})},673:function(e,n,r){r(257),r(674),e.exports=r(675)},675:function(e,n,r){"use strict";r.r(n),function(e){var n=r(237),t=r(668),o=r(669);Object(t.setOptions)({name:"vrxd"}),Object(n.addDecorator)(Object(o.withInfo)({inline:!0,header:!1,source:!1}));var i=r(718);Object(n.configure)(function(){i.keys().forEach(function(e){return i(e)})},e)}.call(this,r(354)(e))},690:function(e,n,r){var t={"./nestedObjectAssign":611,"./nestedObjectAssign.js":611};function o(e){var n=i(e);return r(n)}function i(e){var n=t[e];if(!(n+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n}o.keys=function(){return Object.keys(t)},o.resolve=i,e.exports=o,o.id=690},718:function(e,n,r){var t={"./components/simple-button/SimpleButton.stories.jsx":719};function o(e){var n=i(e);return r(n)}function i(e){var n=t[e];if(!(n+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n}o.keys=function(){return Object.keys(t)},o.resolve=i,e.exports=o,o.id=718},719:function(e,n,r){"use strict";r.r(n),function(e){r.d(n,"actions",function(){return p});var t=r(149),o=r.n(t),i=r(0),a=r.n(i),u=r(237),c=r(165),s=r(255),l=r(166),d=r(670);function f(){var e=o()(["\n    width: 1rem;\n"]);return f=function(){return e},e}function b(){var e=o()(["\n    display: flex;\n"]);return b=function(){return e},e}l.a.div(b()),l.a.div(f());var p={onPinTask:Object(c.action)("onPinTask"),onArchiveTask:Object(c.action)("onArchiveTask")},m=["blue","red","blue-border","grey-border","black"];Object(u.storiesOf)("SimpleButton",e).addDecorator(s.withKnobs).add("demo",function(){return a.a.createElement(d.a,{type:Object(s.radios)("type",m),isDisabled:Object(s.boolean)("isDisabled",!1)},"按钮")})}.call(this,r(354)(e))}},[[673,2,4]]]);
//# sourceMappingURL=iframe.95f9bac1295eb1db04e0.bundle.js.map