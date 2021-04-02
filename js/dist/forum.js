module.exports=function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=10)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["utils/string"]},function(e,t){e.exports=flarum.core.compat["components/Switch"]},function(e,t){e.exports=flarum.core.compat["utils/Stream"]},function(e,t){e.exports=flarum.core.compat["states/DiscussionListState"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionListItem"]},function(e,t){e.exports=flarum.core.compat["components/FieldSet"]},function(e,t){e.exports=flarum.core.compat["utils/ItemList"]},function(e,t,s){"use strict";s.r(t);var n=s(0),o=s.n(n);var r=s(1),i=s(6),a=s.n(i),c=s(7),p=s.n(c),u=s(3);function f(){Object(r.extend)(a.a.prototype,"requestParams",(function(e){e.include.push(["firstPost","lastPost"])})),Object(r.extend)(p.a.prototype,"infoItems",(function(e){var t=this.attrs.discussion;if(!o.a.session.user||o.a.session.user.preferences().showSynopsisExcerpts){var s="first"===o.a.forum.attribute("synopsis.excerpt_type")?t.firstPost():t.lastPost(),n=o.a.forum.attribute("synopsis.excerpt_length"),r=o.a.forum.attribute("synopsis.images-excerpt_enable"),i=o.a.forum.attribute("synopsis.images-excerpt_length"),a=o.a.forum.attribute("synopsis.rich_excerpts"),c=!!o.a.session.user&&o.a.session.user.preferences().showSynopsisExcerptsOnMobile;if(s){var p=m("div",null,a?m.trust(Object(u.truncate)(s.contentHtml(),n)):Object(u.truncate)(s.contentPlain(),n));if(e.add(c?"excerptM":"excerpt",p,-100),r){var f=s.contentHtml();if(f){var l=f.match(/<img.*?(?:>|\/>)/gi);(function(e){throw new Error('"'+e+'" is read-only')})("excerptImageLength"),i=i||4,l=l.length>i?l.slice(0,i):l;var d=m("ul",{className:"excerpt-image"},l.map((function(e){return m("li",null,m("img",{src:e.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i)[1]}))})));e.add(c?"excerptImages":"excerptImagesM",d,-100)}}}}}))}var l=s(2),d=s.n(l),x=s(8),y=s.n(x),h=s(9),g=s.n(h),b=s(4),S=s.n(b),w=s(5),v=s.n(w);o.a.initializers.add("itlad-synopsis",(function(){f(),Object(r.extend)(d.a.prototype,"oninit",(function(){this.showSynopsisExcerpts=v()(this.user.preferences().showSynopsisExcerpts),this.showSynopsisExcerptsOnMobile=v()(this.user.preferences().showSynopsisExcerptsOnMobile)})),Object(r.extend)(d.a.prototype,"settingsItems",(function(e){e.add("synopsis",y.a.component({label:app.translator.trans("itlad-synopsis.forum.user.settings.summaries-heading"),className:"Settings-Synopsis"},this.summariesItems().toArray()))})),d.a.prototype.summariesItems=function(){var e=this,t=new g.a;return t.add("synopsis-excerpts",S.a.component({state:this.user.preferences().showSynopsisExcerpts,onchange:function(t){e.showSynopsisExcerptsLoading=!0,e.user.savePreferences({showSynopsisExcerpts:t}).then((function(){e.showSynopsisExcerptsLoading=!1,m.redraw()}))},loading:this.showSynopsisExcerptsLoading},app.translator.trans("itlad-synopsis.forum.user.settings.show-summaries"))),this.user.preferences().showSynopsisExcerpts&&t.add("synopsis-excerpts-mobile",S.a.component({state:this.user.preferences().showSynopsisExcerptsOnMobile,disabled:!this.user.preferences().showSynopsisExcerpts,onchange:function(t){e.showSynopsisExcerptsOnMobileLoading=!0,e.user.savePreferences({showSynopsisExcerptsOnMobile:t}).then((function(){e.showSynopsisExcerptsOnMobileLoading=!1,window.location.reload()}))},loading:this.showSynopsisExcerptsOnMobileLoading},app.translator.trans("itlad-synopsis.forum.user.settings.show-summaries-mobile"))),t}}))}]);
//# sourceMappingURL=forum.js.map