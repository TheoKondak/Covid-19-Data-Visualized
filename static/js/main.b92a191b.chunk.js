(this.webpackJsonpreactcharts=this.webpackJsonpreactcharts||[]).push([[0],{160:function(e,a,t){},161:function(e,a,t){},162:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),l=t(48),c=t.n(l),o=(t(59),t(52)),n=t(31),i=t(5),d=t(6),h=t(7),m=t(8),b=t(49),p=t.n(b),g=(t(60),t(61),t(50)),u=t(53),C=function(e){var a=e.open,t=Object(u.a)(e,["open"]);return r.a.createElement("div",Object.assign({className:a?"burger-menu open":"burger-menu"},t),r.a.createElement("div",{className:"bar1",key:"b1"}),r.a.createElement("div",{className:"bar2",key:"b2"}),r.a.createElement("div",{className:"bar3",key:"b3"}))},v=(t(62),function(e){return r.a.createElement("div",{className:"hexagon-container text-center "},r.a.createElement("div",{className:"hexagon"},r.a.createElement("button",{className:"neomorphic uni",onClick:e.click},e.countryName)))}),y=(t(63),function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).clickEventHandler=function(a,t,s){e.props.click(a,t,s),e.props.close()},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"menu clear",id:"grid"},this.props.countryList.map((function(a){var t,s,l;return t=a.countryId,s=a.countryName,l=a.countryData,r.a.createElement(v,{key:a.countryId,countryName:a.countryName,click:function(){e.clickEventHandler(t,s,l)}})})))}}]),t}(s.Component)),E=(t(64),{fontFamily:"sans-serif",textAlign:"center",marginTop:"40px"}),D={background:"rgba(41,55,55,0.1)",width:"100vw",border:"none"},f=function(e){return r.a.createElement("div",{style:E},r.a.createElement(g.a,{modal:!0,overlayStyle:{background:"rgba(55,55,55,0.98"},contentStyle:D,closeOnDocumentClick:!0,trigger:function(e){return r.a.createElement(C,{open:e})}},(function(a){return r.a.createElement(y,{close:a,countryList:e.countryList,click:e.click})})))},k=t(21),N=(t(160),function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return"Line"===this.props.type?r.a.createElement("div",{className:"Line"},r.a.createElement(k.c,{label:this.props.label,data:this.props.data,options:this.props.options})):"Doughnut"===this.props.type?r.a.createElement("div",{className:"Doughnut"},r.a.createElement(k.b,{label:this.props.label,data:this.props.data,options:this.props.options})):"Bar"===this.props.type?r.a.createElement("div",{className:"Bar"},r.a.createElement(k.a,{label:this.props.label,data:this.props.data,options:this.props.options})):void 0}}]),t}(s.Component)),A=(t(161),function(e){return r.a.createElement("div",{className:e.class},r.a.createElement("div",{className:"containerTitle"},r.a.createElement("h3",{className:"cardTitle"},e.title)),r.a.createElement("div",{className:"containerMetrics"},r.a.createElement("span",{className:"cardMetrics"},e.metrics),r.a.createElement("div",{className:"cardPercentage"},r.a.createElement("span",{className:"cardPercentage-percentage"},e.percentage),r.a.createElement("span",{className:"cardPercentage-text"}," of total cases"))),r.a.createElement("div",{className:"containerMetricsChart"},r.a.createElement(N,{type:e.type,data:e.data,options:e.options})))}),x=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={chartDataTotalCases:{labels:[],datasets:[{label:"Confirmed Cases",data:[],backgroundColor:"rgba(65,131,196,0.9)",hidden:!0}],options:{title:{display:!0,text:"Confirmed Cases"}}},chartDataDeathsVsRecovered:{labels:[],datasets:[{label:"Confirmed Cases",data:[],backgroundColor:"rgba(255, 99, 132, 0.6)"},{label:"Deaths",data:[],backgroundColor:"rgba(253, 179, 175, 0.8)"},{label:"Recovered",data:[],backgroundColor:"rgba(255, 99, 132, 0.6)"}],options:{title:{display:!0,text:"Recoveries VS Deaths"}}},chartDataActiveCasesLogarithmic:{labels:[],datasets:[{label:"Confirmed Cases",data:[],backgroundColor:"rgba(65,131,196,0.4)",hidden:!1}],options:{title:{display:!0,text:"Confirmed Cases"},scales:{yAxes:[{type:"logarithmic"}]}}},cardsData:{totalCases:0,activeCases:0,deceased:0,discharged:0,newCases:0,percentageActiveCases:0},cardsChartsData:{cardsChartsNewCases:{labels:"",datasets:[{label:"",data:[],backgroundColor:"rgba(220,53,69,0.9)"}]},cardsChartsActiveCases:{labels:"",datasets:[{label:"",data:[],backgroundColor:"rgba(220,53,69,0.9)"}]},cardsChartsDeaths:{labels:"",datasets:[{label:"",data:[],backgroundColor:"rgba(220,53,69,0.9)"}]},cardsChartsDischarged:{labels:"",datasets:[{label:"",data:[],backgroundColor:"rgba(220,53,69,0.9)"}]}},countryList:[]},e.changeCountryHandler=function(a,t,s){for(var r=[],l=[],c=[],o=[],i=[],d=[],h=[],m=[],b=[],p=0,g=0,u=Object.entries(s);g<u.length;g++){var C=Object(n.a)(u[g],2),v=(C[0],C[1]);r[p]=v.confirmed,l[p]=v.deaths,c[p]=v.recovered,o[p]=v.date,i[p]=v.confirmed-(v.deaths+v.recovered),d[p]=r[p]-r[p-1],h[p]=v.confirmed-(v.deaths+v.recovered),m[p]=l[p]-l[p-1],b[p]=c[p]-c[p-1],p+=1}e.setState({chartDataConfirmedCases:{labels:o,datasets:[{label:"Confirmed Cases",data:r,backgroundColor:"rgba(65,131,196,0.4)",hidden:!1}],options:{title:{display:!0,text:"Confirmed Cases"}}},chartDataDeathsVsRecovered:{labels:o,datasets:[{label:"Confirmed Cases",data:r,backgroundColor:"rgba(65,131,196,0.4)",hidden:!0},{label:"Deaths",data:l,backgroundColor:"rgba(249, 54, 80, 0.2)"},{label:"Recovered",data:b,backgroundColor:"rgba(249, 254, 239, 0.9)"}]},chartDataActiveCasesLogarithmic:{labels:o,datasets:[{label:"Active Cases (Logarithmic)",data:i,backgroundColor:"rgba(65,131,196,0.4)",hidden:!1}]},cardsData:{totalCasesWorldWide:1,activeCasesWorldWide:1,deceasedWordlWide:1,dischargedWorldWide:1,totalCases:r[r.length-1],activeCases:r[r.length-1]-c[c.length-1]-l[l.length-1],deceased:l[l.length-1],discharged:c[c.length-1],newCases:r[r.length-1]-r[r.length-2],percentageActiveCases:2},cardsChartsData:{cardsChartsNewCases:{labels:o,datasets:[{label:"New Cases",data:d,backgroundColor:"rgba(220,53,69,0.9)"}]},cardsChartsActiveCases:{labels:o,datasets:[{label:"Active Cases",data:h,backgroundColor:"rgba(220,53,69,0.9)"}]},cardsChartsDeaths:{labels:o,datasets:[{label:"Deaths",data:m,backgroundColor:"rgba(220,53,69,0.9)"}]},cardsChartsRecovered:{labels:o,datasets:[{label:"Recovered",data:b,backgroundColor:"rgba(220,53,69,0.9)"}]}},countryName:t})},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=new XMLHttpRequest;a.open("GET","https://pomber.github.io/covid19/timeseries.json"),a.responseType="json",a.onload=function(){var t=Object(o.a)(a.response.China),s=a.response,r=[],l=[],c=[],i=[],d=[],h=[],m=0,b=[],p=[],g=[],u=[],C=0;for(var v in s)r.push({countryId:C,countryName:v,countryData:s[v]}),C++;for(var y=0,E=Object.entries(t);y<E.length;y++){var D=Object(n.a)(E[y],2),f=(D[0],D[1]);0===f.recovered&&0===f.deaths||(l[m]=f.confirmed,i[m]=f.deaths,d[m]=f.recovered,h[m]=f.date,c[m]=f.confirmed-(f.deaths+f.recovered),l[m]-l[m-1],b[m]=l[m]-l[m-1],p[m]=f.confirmed-(f.deaths+f.recovered),g[m]=i[m]-i[m-1],u[m]=d[m]-d[m-1],m+=1)}e.setState({chartDataTotalCases:{labels:h,datasets:[{label:"Confirmed Cases",data:l,backgroundColor:"rgba(65,131,196,0.4)",hidden:!1}],options:{}},chartDataDeathsVsRecovered:{labels:h,datasets:[{label:"Confirmed Cases",data:l,backgroundColor:"rgba(65,131,196,0.4)",hidden:!0},{label:"Deaths",data:i,backgroundColor:"rgba(249, 54, 80, 0.2)"},{label:"Recovered",data:d,backgroundColor:"rgba(249, 254, 239, 0.9)"}],options:{title:{display:!0,text:"Recoveries VS Deaths"}}},chartDataActiveCasesLogarithmic:{labels:h,datasets:[{label:"Active Cases (Logarithmic)",data:c,backgroundColor:"rgba(65,131,196,0.4)",hidden:!1}],options:{title:{display:!0,text:"Confirmed Cases"},scales:{yAxes:[{type:"logarithmic"}]}}},cardsData:{totalCasesWorldWide:1,activeCasesWorldWide:1,deceasedWordlWide:1,dischargedWorldWide:1,totalCases:l[l.length-1],activeCases:l[l.length-1]-d[d.length-1]-i[i.length-1],deceased:i[i.length-1],discharged:d[d.length-1],newCases:l[l.length-1]-l[l.length-2],percentageActiveCases:2},cardsChartsData:{cardsChartsNewCases:{labels:h,datasets:[{label:"",data:b,backgroundColor:"rgba(220,53,69,0.9)"}]},cardsChartsActiveCases:{labels:h,datasets:[{label:"",data:p,backgroundColor:"rgba(220,53,69,0.9)"}]},cardsChartsDeaths:{labels:h,datasets:[{label:"",data:g,backgroundColor:"rgba(220,53,69,0.9)"}]},cardsChartsRecovered:{labels:h,datasets:[{label:"",data:u,backgroundColor:"rgba(220,53,69,0.9)"}]}},countryName:"USA",countryList:r})},a.send()}},{key:"render",value:function(){return console.log(this.state.chartDataActiveCasesLogarithmic),r.a.createElement("div",{className:"container-fluid app-container "},r.a.createElement("div",{className:"row col-12 header mx-auto mb-5",align:"center"},r.a.createElement("div",{className:"col-12 row"},r.a.createElement("div",{className:"col-md-4 logo-container"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),r.a.createElement("div",{className:"col-md-5 title"},r.a.createElement("h1",null,"Covid-19 Data Visualized"),r.a.createElement("small",null,"v0.03")))),r.a.createElement("div",{className:"row subHeader"},r.a.createElement("div",{className:"col mb-4 mt-4"},r.a.createElement("h3",null,this.state.countryName),r.a.createElement("small",null,"Last Update: ",this.state.chartDataTotalCases.labels[this.state.chartDataTotalCases.labels.length-1]))),r.a.createElement("div",{className:"row col-md-12 mx-auto mb-4 cardsContainer"},r.a.createElement("div",{className:"col-lg-2 mb-2 cardContainer"},r.a.createElement(A,{title:"Total Cases",metrics:this.state.cardsData.totalCases,class:"card totalCases",type:"Bar",data:this.state.chartDataTotalCases,options:{legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:1}},tooltips:{enabled:!1},maintainAspectRatio:!1}})),r.a.createElement("div",{className:"col-lg-2 mb-2 cardContainer"},r.a.createElement(A,{title:"New Cases",metrics:this.state.cardsData.newCases,percentage:(100*this.state.cardsData.newCases/this.state.cardsData.totalCases).toFixed(2),class:"card newCases",type:"Bar",labels:"New Cases Card Chart",data:this.state.cardsChartsData.cardsChartsNewCases,options:{legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0}},tooltips:{enabled:!1},maintainAspectRatio:!1}})),r.a.createElement("div",{className:"col-lg-2 mb-2 cardContainer","data-toggle":"tooltip","data-placement":"right",title:"Active Cases Diagram"},r.a.createElement(A,{title:"Active Cases",metrics:this.state.cardsData.activeCases,percentage:(100*this.state.cardsData.activeCases/this.state.cardsData.totalCases).toFixed(2),class:"card activeCases",type:"Bar",labels:"Active Cases",data:this.state.cardsChartsData.cardsChartsActiveCases,options:{legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0}},tooltips:{enabled:!1},maintainAspectRatio:!1}})),r.a.createElement("div",{className:"col-lg-2 mb-2 cardContainer"},r.a.createElement(A,{title:"Deceased",metrics:this.state.cardsData.deceased,percentage:(100*this.state.cardsData.deceased/this.state.cardsData.totalCases).toFixed(2),class:"card deceased",type:"Bar",labels:"Deaths",data:this.state.cardsChartsData.cardsChartsDeaths,options:{legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0}},tooltips:{enabled:!1},maintainAspectRatio:!1}})),r.a.createElement("div",{className:"col-lg-2 mb-2 cardContainer"},r.a.createElement(A,{title:"Discharged",metrics:this.state.cardsData.discharged,percentage:(100*this.state.cardsData.discharged/this.state.cardsData.totalCases).toFixed(2),class:"card discharged",type:"Bar",labels:"Discharged",data:this.state.cardsChartsData.cardsChartsRecovered,options:{legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0}},tooltips:{enabled:!1},maintainAspectRatio:!1}}))),r.a.createElement("div",{className:"row m-0  chartsContainer"},r.a.createElement("div",{className:"col-lg-6 p-1 chart"},r.a.createElement(N,{type:"Line",backgroundcolor:this.state.chartDataTotalCases.datasets.backgroundColor,label:this.state.chartDataTotalCases.datasets.label,data:this.state.chartDataTotalCases,options:{legend:{title:{display:!0,text:"Recoveries VS Deaths"}},scales:{xAxes:[{display:!0}],yAxes:[{display:!0}]},tooltips:{enabled:!0,callbacks:{label:function(e){return e.yLabel}}},maintainAspectRatio:!1}})),r.a.createElement("div",{className:"col-lg-6 p-1 chart"},r.a.createElement(N,{type:"Line",backgroundcolor:this.state.chartDataDeathsVsRecovered.datasets.backgroundColor,label:this.state.chartDataDeathsVsRecovered.datasets.label,data:this.state.chartDataDeathsVsRecovered,options:{legend:{title:{text:"Recoveries VS Deaths",display:!0}},scales:{xAxes:[{display:!0}],yAxes:[{display:!0}]},tooltips:{enabled:!0,callbacks:{label:function(e){return e.yLabel}}},maintainAspectRatio:!1}}))),r.a.createElement("div",{className:"row m-0 chartsContainer"},r.a.createElement("div",{className:"col-lg-6 p-1 chart"},r.a.createElement(N,{type:"Line",backgroundcolor:this.state.chartDataActiveCasesLogarithmic.datasets.backgroundColor,label:this.state.chartDataActiveCasesLogarithmic.datasets.label,data:this.state.chartDataActiveCasesLogarithmic,options:this.state.chartDataActiveCasesLogarithmic.options})),r.a.createElement("div",{className:"col-lg-6 p-1 chart"},r.a.createElement(N,{type:"Bar",backgroundcolor:this.state.chartDataDeathsVsRecovered.datasets.backgroundColor,label:this.state.chartDataDeathsVsRecovered.datasets.label,data:this.state.chartDataDeathsVsRecovered,options:{legend:{title:{display:!0,text:"Recoveries VS Deaths"}},scales:{xAxes:[{display:!0}],yAxes:[{display:!0}]},tooltips:{enabled:!0,callbacks:{label:function(e){return e.yLabel}}},maintainAspectRatio:!1}}))),r.a.createElement("div",{className:"cardContainer countryList"},r.a.createElement(f,{countryList:this.state.countryList,click:this.changeCountryHandler})),r.a.createElement("div",{className:"container footer"},r.a.createElement("div",{className:"row"},r.a.createElement("hr",{className:"col-10 footer-hr"}),r.a.createElement("div",{className:"col-12"},r.a.createElement("p",null,"Find the code of the project on ",r.a.createElement("a",{href:"https://github.com/TheoKondak/covid-19-cata-visualized",target:"_blank",rel:"noopener noreferrer",title:"Find project on GitHub"},"GitHub")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/TheoKondak/Covid-19-Data-Visualized/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},"Changelog")),r.a.createElement("p",null,"This project is created with",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/facebook/create-react-app#readme",target:"_blank",rel:"noopener noreferrer",title:"React Chart js 2"},"React"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/jerairrest/react-chartjs-2",target:"_blank",rel:"noopener noreferrer",title:"React Chart js 2"},"React Chart js 2"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/yjose/reactjs-popup-burger-menu",target:"_blank",rel:"noopener noreferrer",title:"React JS popup burger menu"},"React js popup burger menu")),r.a.createElement("p",null,"Copyright 2020 Theodoros Kondakos. All rights reserved",r.a.createElement("a",{href:"https://github.com/TheoKondak/Covid-19-Data-Visualized/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer",title:"Fight Covid-19 with Folding @home"}," View Licence information"))))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,a,t){e.exports=t.p+"static/media/logo.76a6cc0d.png"},54:function(e,a,t){e.exports=t(162)},59:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.b92a191b.chunk.js.map