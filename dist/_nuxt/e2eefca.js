(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1241:function(t,e,l){var content=l(1248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(91).default)("0325c033",content,!0,{sourceMap:!1})},1247:function(t,e,l){"use strict";l(1241)},1248:function(t,e,l){var r=l(90)((function(i){return i[1]}));r.push([t.i,".ant-card{border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.05);min-height:100%}.top-cards .ant-card{border-top:6px solid #1890ff}.top-cards .ant-card-head-wrapper{flex-direction:row-reverse;gap:8px}.emphasis{font-size:2rem;font-weight:600}.ant-carousel .slick-dots li button{border-radius:100px;height:6px;width:6px}.ant-carousel .slick-dots li button,.ant-carousel .slick-dots li.slick-active button{background:#1890ff}.ant-carousel .slick-dots-bottom{bottom:-12px}",""]),r.locals={},t.exports=r},1252:function(t,e,l){"use strict";l.r(e);l(92),l(158);var r=[{name:"Jocelyn Dokidis",title:"Employee",timestamp:"07:30 AM"},{name:"Jordyn Kenter",title:"Employee",timestamp:"07:45 AM"},{name:"Ryan Kenter",title:"Accounting",timestamp:"08:00 AM"},{name:"Wilson Gouse",title:"Administrator",timestamp:"08:10 AM"}],n=[{title:"Announcement: General Meeting",timestamp:"1h ago"},{title:"We Completed a Project",timestamp:"March 10, 2023, 08:30 AM"},{title:"Attention: General Meeting",timestamp:"January 24, 2023, 11:30 AM"},{title:"Greetings: Merry Christmas",timestamp:"December 25, 2022, 01:45 PM"},{title:"Attention: General Meeting",timestamp:"October 11, 2022, 03:25 PM"}],o=[{title:"Academic Scholarship",content:"Apply for scholarship available for all employee",button:"Apply for Scholarship"},{title:"Academic Scholarship",content:"Apply for scholarship available for all employee",button:"Apply for Scholarship"},{title:"Academic Scholarship",content:"Apply for scholarship available for all employee",button:"Apply for Scholarship"}],c={data:function(){return{interval:null,currentTime:null,currentDate:null,employee:r,notice:n,banners:o}},beforeDestroy:function(){clearInterval(this.interval)},created:function(){var t=this;this.interval=setInterval((function(){t.currentTime=Intl.DateTimeFormat(navigator.language,{hour:"numeric",minute:"numeric",second:"numeric"}).format(),t.currentDate=Intl.DateTimeFormat(navigator.language,{dateStyle:"full"}).format()}),1e3)},methods:{callback:function(t){console.log(t)}}},m=(l(1247),l(43)),component=Object(m.a)(c,(function(){var t=this,e=t._self._c;return e("div",{style:{width:"100%",maxWidth:"1192px",margin:"0  auto",display:"flex",flexDirection:"column",gap:"16px"}},[e("a-row",{attrs:{type:"flex",justify:"space-between",gutter:[16,16]}},[e("a-col",{attrs:{xs:24,lg:12}},[e("a-card",{style:{background:"linear-gradient(252.25deg, #1815A8 10.54%, #0F66F4 92.03%)",color:"#fff"}},[e("p",{style:{marginBottom:"0"}},[t._v("Welcome to your dashboard")]),t._v(" "),e("p",{staticClass:"emphasis",style:{marginBottom:"18px",lineHeight:"1"}},[t._v("Lindsey Lubin")]),t._v(" "),e("p",{style:{marginBottom:"0",backgroundColor:"rgba(255,255,255,0.15)",display:"inline-block",padding:"4px 12px",borderRadius:"4px"}},[t._v("Today is "+t._s(t.currentDate)+" at "+t._s(t.currentTime))])])],1),t._v(" "),e("a-col",{attrs:{xs:24,lg:12}},[e("a-card",[e("a-carousel",{attrs:{autoplay:""}},t._l(t.banners,(function(l){return e("div",{style:{textAlign:"right"}},[e("h3",{style:{fontSize:"1.4rem",fontWeight:"600",marginBottom:"0"}},[t._v(t._s(l.title))]),t._v(" "),e("p",{style:{marginBottom:"0.6em"}},[t._v(t._s(l.content))]),t._v(" "),e("a-button",{style:{padding:"0"},attrs:{type:"link",icon:"select"}},[t._v(t._s(l.button))])],1)})),0)],1)],1)],1),t._v(" "),e("a-row",{staticClass:"top-cards",attrs:{type:"flex",justify:"space-between",gutter:[16,16]}},[e("a-col",{attrs:{xs:24,lg:12,xl:6}},[e("a-card",{attrs:{title:"Time"}},[e("template",{slot:"extra"},[e("a-icon",{style:{fontSize:"22px"},attrs:{type:"hourglass"}})],1),t._v(" "),e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"16px"}},[e("span",{staticClass:"emphasis"},[t._v(t._s(t.currentTime))]),t._v(" "),e("span",[t._v(t._s(t.currentDate))])]),t._v(" "),e("a-button",{attrs:{block:""}},[t._v("Time In")])],2)],1),t._v(" "),e("a-col",{attrs:{xs:24,lg:12,xl:6}},[e("a-card",{attrs:{title:"Leaves"}},[e("template",{slot:"extra"},[e("a-icon",{style:{fontSize:"22px"},attrs:{type:"carry-out"}})],1),t._v(" "),e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"16px"}},[e("span",{staticClass:"emphasis"},[t._v("0/10")]),t._v(" "),e("span",[t._v("Leave credits remaining")])]),t._v(" "),e("a-button",{attrs:{block:""}},[t._v("Request Leave")])],2)],1),t._v(" "),e("a-col",{attrs:{xs:24,lg:12,xl:6}},[e("a-card",{attrs:{title:"Overtime"}},[e("template",{slot:"extra"},[e("a-icon",{style:{fontSize:"22px"},attrs:{type:"history"}})],1),t._v(" "),e("div",{style:{display:"flex",justifyContent:"space-evenly",marginBottom:"16px"}},[e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},[e("span",{staticClass:"emphasis"},[t._v("4h")]),t._v(" "),e("span",[t._v("Approved")])]),t._v(" "),e("a-divider",{style:{height:"auto"},attrs:{type:"vertical"}}),t._v(" "),e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},[e("span",{staticClass:"emphasis"},[t._v("2h")]),t._v(" "),e("span",[t._v("Pending")])])],1),t._v(" "),e("a-button",{attrs:{block:""}},[t._v("Request Overtime")])],2)],1),t._v(" "),e("a-col",{attrs:{xs:24,lg:12,xl:6}},[e("a-card",{attrs:{title:"Requests"}},[e("template",{slot:"extra"},[e("a-icon",{style:{fontSize:"22px"},attrs:{type:"form"}})],1),t._v(" "),e("div",{style:{display:"flex",justifyContent:"space-evenly",marginBottom:"16px"}},[e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},[e("span",{staticClass:"emphasis"},[t._v("8")]),t._v(" "),e("span",[t._v("Ongoing")])]),t._v(" "),e("a-divider",{style:{height:"auto"},attrs:{type:"vertical"}}),t._v(" "),e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},[e("span",{staticClass:"emphasis"},[t._v("16")]),t._v(" "),e("span",[t._v("Completed")])])],1),t._v(" "),e("a-button",{attrs:{block:""}},[t._v("View All Requests")])],2)],1)],1),t._v(" "),e("a-row",{attrs:{type:"flex",justify:"space-between",gutter:[16,16]}},[e("a-col",{attrs:{xs:24,xl:8}},[e("a-card",{attrs:{title:"Attendance of Employees"}},[e("a-tabs",{attrs:{"default-active-key":"1"},on:{change:t.callback}},[e("a-tab-pane",{key:"1",attrs:{tab:"Time In"}},[e("a-list",{attrs:{"item-layout":"horizontal","data-source":t.employee},scopedSlots:t._u([{key:"renderItem",fn:function(l,r){return e("a-list-item",{style:{alignItems:"flex-start"}},[e("a-list-item-meta",{attrs:{description:l.title}},[e("a",{attrs:{slot:"title",href:"https://www.antdv.com/"},slot:"title"},[t._v(t._s(l.name))]),t._v(" "),e("a-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},slot:"avatar"})],1),t._v(" "),e("div",[t._v(t._s(l.timestamp))])],1)}}])})],1),t._v(" "),e("a-tab-pane",{key:"2",attrs:{tab:"Time Out","force-render":""}},[e("a-empty")],1),t._v(" "),e("a-tab-pane",{key:"3",attrs:{tab:"On leave"}},[e("a-empty")],1)],1)],1)],1),t._v(" "),e("a-col",{attrs:{xs:24,lg:12,xl:8}},[e("a-card",{attrs:{title:"Notice Board"}},[e("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("more")]),t._v(" "),e("a-list",{attrs:{"item-layout":"horizontal","data-source":t.notice},scopedSlots:t._u([{key:"renderItem",fn:function(l,r){return e("a-list-item",{style:{alignItems:"flex-start"}},[e("div",{style:{marginRight:"16px"}},[e("a-icon",{style:{fontSize:"24px"},attrs:{type:"notification"}})],1),t._v(" "),e("a-list-item-meta",{attrs:{description:"Posted "+l.timestamp}},[e("a",{attrs:{slot:"title",href:"https://www.antdv.com/"},slot:"title"},[t._v(t._s(l.title))]),t._v(" "),e("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("more")])])],1)}}])})],1)],1),t._v(" "),e("a-col",{attrs:{xs:24,lg:12,xl:8}},[e("a-card",{attrs:{title:"Recent Activities"}},[e("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("more")]),t._v(" "),e("a-timeline",[e("a-timeline-item",[e("h4",[t._v("Create a services site")]),t._v(" \n            2015-09-01\n          ")]),t._v(" "),e("a-timeline-item",[e("h4",[t._v("Solve initial network problems")]),t._v(" \n            2015-09-01\n          ")]),t._v(" "),e("a-timeline-item",[e("h4",[t._v("Technical testing")]),t._v(" \n            2015-09-01\n          ")]),t._v(" "),e("a-timeline-item",[e("h4",[t._v("Network problems being solved")]),t._v(" \n            2015-09-01\n          ")]),t._v(" "),e("a-timeline-item",[e("h4",[t._v("Solve initial network problems")]),t._v(" \n            2015-09-01\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);