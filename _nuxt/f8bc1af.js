(window.webpackJsonp=window.webpackJsonp||[]).push([[10,15,19,22],{334:function(e,t,r){var content=r(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(40).default)("c6f7df7c",content,!0,{sourceMap:!1})},335:function(e,t,r){"use strict";r.r(t);var n={name:"TitleSubCard",props:{title:{type:String,required:!1},description:{type:String,required:!1}}},c=(r(338),r(13)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"titleSubCard-container"},[n("div",{staticClass:"titleSubCard"},[n("h4",[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"descriptiont"},[n("img",{attrs:{src:r(221)}}),e._v(" "),n("p",[e._v(e._s(e.description))])])])])}),[],!1,null,"da8302ac",null);t.default=component.exports},337:function(e,t,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(40).default)("3b4238da",content,!0,{sourceMap:!1})},338:function(e,t,r){"use strict";r(334)},339:function(e,t,r){var n=r(39)(!1);n.push([e.i,".titleSubCard-container[data-v-da8302ac]{display:flex;justify-content:flex-end}.titleSubCard-container .titleSubCard[data-v-da8302ac]{display:flex;flex-direction:column;align-items:flex-end}.titleSubCard-container h4[data-v-da8302ac]{font-size:1.063rem;color:#fff;text-align:right;min-width:300px}.titleSubCard-container .descriptiont[data-v-da8302ac]{display:flex;flex-direction:row-reverse;margin-top:5px}.titleSubCard-container .descriptiont img[data-v-da8302ac]{height:15px;width:15px;margin-left:5px}.titleSubCard-container .descriptiont p[data-v-da8302ac]{font-size:.75rem;color:var(--gray-1)}",""]),e.exports=n},344:function(e,t,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(40).default)("47893b59",content,!0,{sourceMap:!1})},351:function(e,t,r){"use strict";r(337)},352:function(e,t,r){var n=r(39)(!1);n.push([e.i,".homeTitle-container[data-v-f4279b92]{display:flex;flex-direction:column;align-items:flex-end;border-right:2px solid var(--green-1);padding-right:20px}.homeTitle-container h1[data-v-f4279b92]{font-size:1.75rem;font-weight:700}",""]),e.exports=n},353:function(e,t,r){"use strict";r.r(t);var n={name:"HomeTitle",props:{title:{type:String,required:!0}}},c=(r(351),r(13)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"homeTitle-container"},[r("h1",[e._v(e._s(e.title))])])}),[],!1,null,"f4279b92",null);t.default=component.exports},368:function(e,t,r){"use strict";r(344)},369:function(e,t,r){var n=r(39)(!1);n.push([e.i,".imageListCard-container[data-v-4a5215fa]{display:flex;justify-content:flex-end}.imageListCard-container .imageListCard[data-v-4a5215fa]{display:flex;flex-direction:row-reverse;justify-content:flex-end;align-items:center;text-decoration:none}.imageListCard-container .imageListCard .titleSubCard[data-v-4a5215fa]{margin-right:15px}",""]),e.exports=n},370:function(e,t,r){var content=r(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(40).default)("f70d181e",content,!0,{sourceMap:!1})},386:function(e,t,r){"use strict";r.r(t);var n={name:"ImageListCard",components:{TitleSubCard:r(335).default},props:{link:{type:String,required:!1,default:"/"},imageUrl:{type:String,required:!0,default:"https://s21.picofile.com/file/8444387576/xeniac_logo.png"},imageAlt:{type:String,required:!1},title:{type:String,required:!0,default:"Title"},description:{type:String,required:!0,default:"Description"}}},c=(r(368),r(13)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"imageListCard-container"},[r("a",{staticClass:"imageListCard",attrs:{href:e.link,target:"_blank"}},[r("div",{staticClass:"image"},[r("img",{attrs:{src:e.imageUrl,alt:e.imageAlt}})]),e._v(" "),r("TitleSubCard",{staticClass:"titleSubCard",attrs:{title:e.title,description:e.description}})],1)])}),[],!1,null,"4a5215fa",null);t.default=component.exports},400:function(e,t,r){"use strict";r(370)},401:function(e,t,r){var n=r(39)(!1);n.push([e.i,'.experience-container[data-v-32a382ae]{position:relative;display:flex;flex-direction:column}.experience-container .experience[data-v-32a382ae]{margin-top:40px}.experience-container .experience .catTitle[data-v-32a382ae]{font-size:1.375rem;text-align:right}.experience-container .experience .imageListCard[data-v-32a382ae]{margin-top:40px}.experience-container .experience .subExperiences[data-v-32a382ae]{margin-top:25px}.experience-container .experience .subExperiences .titleSubCard[data-v-32a382ae]{position:relative;margin-top:15px;margin-right:55px}.experience-container .experience .subExperiences .titleSubCard[data-v-32a382ae]:after{content:"";position:absolute;z-index:2;width:8px;height:8px;background-color:#fff;right:-35px;top:10px;border-radius:50%}.experience-container .experience .subExperiences .titleSubCard[data-v-32a382ae]:not(:first-child):before{content:"";z-index:1;position:absolute;height:20px;width:1px;right:-32px;top:30px;background:#fff}@media(min-width:768px){.experience-container[data-v-32a382ae]{position:relative;display:flex;flex-direction:column}.experience-container .experience[data-v-32a382ae],.experience-container .main[data-v-32a382ae]{position:relative}.experience-container .other[data-v-32a382ae]{position:absolute;top:40px;right:50%}.experience-container .catTitle[data-v-32a382ae]{font-size:1.375rem;text-align:right}.experience-container .imageListCard[data-v-32a382ae]{margin-top:40px}.experience-container .subExperiences[data-v-32a382ae]{margin-top:25px}.experience-container .subExperiences .titleSubCard[data-v-32a382ae]{position:relative;margin-top:15px;margin-right:55px}}',""]),e.exports=n},417:function(e,t,r){"use strict";r.r(t);var n=r(353),c=r(386),l=r(335),o={name:"Experience",components:{HomeTitle:n.default,ImageListCard:c.default,TitleSubCard:l.default}},d=(r(400),r(13)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"experience-container"},[r("HomeTitle",{staticClass:"homeTitle",attrs:{title:e.$t("experience")}}),e._v(" "),r("div",{staticClass:"experience main"},[r("h3",{staticClass:"catTitle"},[e._v(e._s(e.$t("HomePageExperienceMain")))]),e._v(" "),r("ImageListCard",{staticClass:"imageListCard",attrs:{link:"https://xeniac.ir",imageUrl:"https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/Xeniac.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL1hlbmlhYy5wbmciLCJpYXQiOjE2MzgxOTk5NDAsImV4cCI6MTk1MzU1OTk0MH0.qQ9NDn-b5zKjTFDMJZCPCMCMBcZZ2eBParqm7-njpqw",imageAlt:"Xeniac",title:e.$t("xeniac"),description:e.$t("xeniacDesc")}}),e._v(" "),r("div",{staticClass:"subExperiences"},[r("TitleSubCard",{staticClass:"titleSubCard",attrs:{title:e.$t("HomePageExperiencXeniacFrontEnd"),description:e.$t("HomePageExperiencXeniacFrontEndDate")}}),e._v(" "),r("TitleSubCard",{staticClass:"titleSubCard",attrs:{title:e.$t("HomePageExperiencXeniacUIUX"),description:e.$t("HomePageExperiencXeniacUIUXDate")}}),e._v(" "),r("TitleSubCard",{staticClass:"titleSubCard",attrs:{title:e.$t("HomePageExperiencXeniacMobile"),description:e.$t("HomePageExperiencXeniacMobileDate")}})],1)],1),e._v(" "),r("div",{staticClass:"experience other"},[r("h3",{staticClass:"catTitle"},[e._v(e._s(e.$t("HomePageExperienceOther")))]),e._v(" "),r("ImageListCard",{staticClass:"imageListCard",attrs:{link:"https://samarena.ir/",imageUrl:"https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/Samsung.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL1NhbXN1bmcucG5nIiwiaWF0IjoxNjM4MTk5OTYxLCJleHAiOjE5NTM1NTk5NjF9.yXjD1MS9mEy8jIPkQOZwWdytYh8BB2b8_N7KaaOKepg",imageAlt:"Sam Arena",title:e.$t("samArea"),description:e.$t("samAreaDesc")}}),e._v(" "),r("div",{staticClass:"subExperiences"},[r("TitleSubCard",{staticClass:"titleSubCard",attrs:{title:e.$t("HomePageExperiencSamArena"),description:e.$t("HomePageExperiencSamArenaDate")}})],1),e._v(" "),r("ImageListCard",{staticClass:"imageListCard",attrs:{link:"https://toranji.ir",imageUrl:"https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/Toranji.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL1RvcmFuamkucG5nIiwiaWF0IjoxNjM4MTk5OTc5LCJleHAiOjE5NTM1NTk5Nzl9.-ShWOeep1YCyK36OPtv7t_Owv2mrbA0JGbnrZbY6Apg",imageAlt:"Toranji",title:e.$t("toranji"),description:e.$t("toranjiDesc")}}),e._v(" "),r("div",{staticClass:"subExperiences"},[r("TitleSubCard",{staticClass:"titleSubCard",attrs:{title:e.$t("HomePageExperiencToranji"),description:e.$t("HomePageExperiencToranjiDate")}})],1),e._v(" "),r("ImageListCard",{staticClass:"imageListCard",attrs:{link:"https://cafedl.com/",imageUrl:"https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/CafeDL.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL0NhZmVETC5wbmciLCJpYXQiOjE2MzgxOTk4NzgsImV4cCI6MTk1MzU1OTg3OH0.PRTCKt4arzv1Xc6uwXmFw0fPS8SU1BwshwsudyaAkLI",imageAlt:"CafeDL",title:e.$t("cafeDL"),description:e.$t("cafeDLDesc")}}),e._v(" "),r("div",{staticClass:"subExperiences"},[r("TitleSubCard",{staticClass:"titleSubCard",attrs:{title:e.$t("HomePageExperiencCafeDL"),description:e.$t("HomePageExperiencCafeDLDate")}})],1)],1)],1)}),[],!1,null,"32a382ae",null);t.default=component.exports}}]);