import{r as _,o as x,a,c as o,b as t,F as y,d as F,e as d,w as I,f as w,T as j,_ as b,g as k}from"./index-DeFhh2Sm.js";const S={class:"h-screen flex flex-col"},T={class:"slider flex h-[50%]"},C={class:"flex mx-auto justify-center relative w-[500px] h-[300px] m-auto"},$=["src","alt"],D={__name:"ImageSlider1",setup(h){const e=[{src:"https://drive.google.com/file/d/1FPb9I4jx_CUmqdXwGknv62VVb9f-tgaS/view?usp=share_link",alt:"mobile home"},{src:"https://drive.google.com/file/d/1bc_EY_6VBcADk2GLY4Xxc4n0B_MxBJlw/view?usp=share_link",alt:"desktop create class page"},{src:"https://drive.google.com/file/d/1-6iUHYb4X8jKBmK4amOCa22TFqU0tGN_/view?usp=share_link",alt:"desktop create subject page"},{src:"https://drive.google.com/file/d/1XEjP6s3auanvrQCAHwJlvcw18BD0feeQ/view?usp=share_link",alt:"desktop subject search page"},{src:"https://drive.google.com/file/d/1yD31Fj3ZlMqinogd2rOR7FM2iAi4kWi8/view?usp=share_link",alt:"mobile class roster"},{src:"https://drive.google.com/file/d/1sRfVO81YdyhjRUGSkAOBL0a_v8lsgFz7/view?usp=share_link",alt:"mobile groups page"},{src:"https://drive.google.com/file/d/1Yyc_0ChDkBRt_iXVQ5jMw1awm4-TI7oW/view?usp=share_link",alt:"desktop create artifact page"},{src:"https://drive.google.com/file/d/1SwUv7sMsUVhm60gPhl0hWna43L78_jxs/view?usp=share_link",alt:"desktop subject page"},{src:"https://drive.google.com/file/d/1JNbwKIGmdokuFLltt2-D8enO1cqfFun8/view?usp=share_link",alt:"desktop student page"}],r=_(0);let n;const s=_(!1),l=()=>{r.value=(r.value+1)%e.length,s.value||i()},c=()=>{r.value=(r.value-1+e.length)%e.length,s.value||i()},i=()=>{n=setInterval(()=>{l()},3e3)},v=()=>{s.value=!1,i()},g=()=>{clearInterval(n),s.value=!0};return i(),x(()=>{clearInterval(n)}),(u,p)=>(a(),o("div",S,[p[0]||(p[0]=t("div",{class:"bg-slate-500 text-center p-4 uppercase text-gray-50"},null,-1)),t("div",T,[t("div",C,[(a(),o(y,null,F(e,(m,f)=>d(j,{key:f,name:"fade"},{default:I(()=>[f===r.value?(a(),o("img",{key:0,src:m.src,alt:m.alt,class:"photo"},null,8,$)):w("",!0)]),_:2},1024)),64)),t("i",{class:"fas fa-caret-right absolute right-0 top-1/3 text-4xl m-2 cursor-pointer text-white z-50",onClick:l}),t("i",{class:"fas fa-caret-left absolute left-0 top-1/3 text-4xl m-2 cursor-pointer text-white z-50",onClick:c}),s.value?(a(),o("i",{key:0,class:"fa-solid fa-circle-play absolute bottom-5 text-3xl m-2 cursor-pointer text-gray-500 z-50",onClick:v})):(a(),o("i",{key:1,class:"fa-solid fa-pause absolute bottom-5 text-3xl m-2 cursor-pointer shadow-2xl text-gray-500 z-50",onClick:g}))])])]))}},P={components:{ImageSlider1:D}};function J(h,e,r,n,s,l){const c=k("ImageSlider1");return a(),o(y,null,[e[0]||(e[0]=t("h1",null,"inFormative",-1)),e[1]||(e[1]=t("h4",null,"Classroom Mastery Tracking System",-1)),e[2]||(e[2]=t("p",null,"inFormative Teacher is a classroom proficency tracking system. The backend was created in IntelliJ using Java and Springboot to speak with a PostgreSQL database. The frontend is Vue.js. The goal of inFormative is to allow classroom teachers, specialists, and coaches to have a quick and easy way to track 'soft' data about their students continuing progress outside of the formalized gradebook and final assessments. Teachers are able to utilize pre-built subjects from our database for core curriculum, behavior tracking, etc or customize their own set of diagnostic criteria. They then assign artifacts to individual indicators. Artifacts recieve a numbered score that can then be used to create robust data maps showing how a student, class, or study group improves and develops their skills for that indicator. ",-1)),e[3]||(e[3]=t("p",null," Currently, the website is close to its first launch. Remaining tasks are unifying the styling, adding contact and about us information, and completing the data anaylsis module. ",-1)),e[4]||(e[4]=t("p",null," Future goals include building out an archive for past courses' data to be compared to future data, creating a print report option, and developing a full mobile app in addition to the current mobile web design. ",-1)),d(c)],64)}const A=b(P,[["render",J]]),B={class:"h-screen flex flex-col"},z={class:"slider flex h-[50%]"},U={class:"flex mx-auto justify-center relative w-[500px] h-[300px] m-auto"},q=["src","alt"],Q={__name:"ImageSlider2",setup(h){const e=[{src:"https://drive.google.com/file/d/1NvZXn10K2vgSq7KQcqW84t2CujytHea3/view?usp=share_link",alt:"view of admin page"},{src:"https://drive.google.com/file/d/1RQUM1JJJROnt9I_f6m1EJRXIDgBBtMhe/view?usp=share_link",alt:"view of user decks"},{src:"https://drive.google.com/file/d/1uvAUasocqZ50Uapi1V2yBqdUFuyFISuM/view?usp=share_link",alt:"view of update deck page"},{src:"https://drive.google.com/file/d/1oWj4dtyIxFhDkupYCmJ1ro3ppHvUmAmr/view?usp=share_link",alt:"view of create card page"},{src:"https://drive.google.com/file/d/1TmxJGbmhXcTW4wwmAY0uQHc8ANtBJdD1/view?usp=share_link",alt:"view of card page with search bar"},{src:"https://drive.google.com/file/d/1C23XhBqqCHF9M6y3ibwlcO6poT-nNr9r/view?usp=share_link",alt:"view of study session page"},{src:"https://drive.google.com/file/d/1AhXlrPvYgyAg4_pAiw2Y8bBL80cI1MKu/view?usp=share_link",alt:"view of study session page, back of card"}],r=_(0);let n;const s=_(!1),l=()=>{r.value=(r.value+1)%e.length,s.value||i()},c=()=>{r.value=(r.value-1+e.length)%e.length,s.value||i()},i=()=>{n=setInterval(()=>{l()},3e3)},v=()=>{s.value=!1,i()},g=()=>{clearInterval(n),s.value=!0};return i(),x(()=>{clearInterval(n)}),(u,p)=>(a(),o("div",B,[p[0]||(p[0]=t("div",{class:"bg-slate-500 text-center p-4 uppercase text-gray-50"},null,-1)),t("div",z,[t("div",U,[(a(),o(y,null,F(e,(m,f)=>d(j,{key:f,name:"fade"},{default:I(()=>[f===r.value?(a(),o("img",{key:0,src:m.src,alt:m.alt,class:"photo"},null,8,q)):w("",!0)]),_:2},1024)),64)),t("i",{class:"fas fa-caret-right absolute right-0 top-1/3 text-4xl m-2 cursor-pointer text-white z-50",onClick:l}),t("i",{class:"fas fa-caret-left absolute left-0 top-1/3 text-4xl m-2 cursor-pointer text-white z-50",onClick:c}),s.value?(a(),o("i",{key:0,class:"fa-solid fa-circle-play absolute bottom-5 text-3xl m-2 cursor-pointer text-gray-500 z-50",onClick:v})):(a(),o("i",{key:1,class:"fa-solid fa-pause absolute bottom-5 text-3xl m-2 cursor-pointer shadow-2xl text-gray-500 z-50",onClick:g}))])])]))}},Y={components:{ImageSlider2:Q}},L={class:"slider"};function M(h,e,r,n,s,l){const c=k("ImageSlider2");return a(),o(y,null,[e[0]||(e[0]=t("h1",null,"Flip Flash",-1)),e[1]||(e[1]=t("h4",null,"Build Your Own Flash Cards Website",-1)),e[2]||(e[2]=t("p",null,"Flip Flash is a flash card website designed for secondary and post secondary education. The backend was created in IntelliJ using Java and springboot to speak with a PostgreSQL database. The frontend is Vue.js. Users arrive at the site and are able to preview some admin-created flash card decks. After registering, they are able to then search existing decks and cards, create their own, and run study sessions. Using Cloudinary, the user can even upload images to correspond with their study terms. ",-1)),e[3]||(e[3]=t("p",null,"This project was created as a final capstone at Tech Elevator. The project was built over the course of 13 days by a four person team using a scrum structure. Detailed planning, frequent pair-programming, and meticulous documentation helped make this a truly successful project. ",-1)),t("div",L,[d(c)])],64)}const O=b(Y,[["render",M]]),V={class:"h-screen flex flex-col"},N={class:"slider flex h-[50%]"},E={class:"flex mx-auto justify-center relative w-[500px] h-[300px] m-auto"},X=["src","alt"],H={__name:"ImageSlider3",setup(h){const e=[{src:"https://drive.google.com/file/d/1o2OZ2b8Qa-Q5m9eJp12rAmPa_9Y50K3O/view?usp=share_link",alt:"menu"},{src:"https://drive.google.com/file/d/1sdyb5jcQof4ybIOno0EJq5YN45hLhbl9/view?usp=share_link",alt:"send"},{src:"https://drive.google.com/file/d/1YgIFoH-LjaZJDidUaA8ej8IDGc5aG3mQ/view?usp=share_link",alt:"request"},{src:"https://drive.google.com/file/d/13DBybLi6uE1kHwh_njnJjE1PHLgwZZQp/view?usp=share_link",alt:"approve a request"},{src:"https://drive.google.com/file/d/1NRT1evg1vAj-6a3O9kO8YiYkLPy_Qy1J/view?usp=share_link",alt:"history"}],r=_(0);let n;const s=_(!1),l=()=>{r.value=(r.value+1)%e.length,s.value||i()},c=()=>{r.value=(r.value-1+e.length)%e.length,s.value||i()},i=()=>{n=setInterval(()=>{l()},3e3)},v=()=>{s.value=!1,i()},g=()=>{clearInterval(n),s.value=!0};return i(),x(()=>{clearInterval(n)}),(u,p)=>(a(),o("div",V,[p[0]||(p[0]=t("div",{class:"bg-slate-500 text-center p-4 uppercase text-gray-50"},null,-1)),t("div",N,[t("div",E,[(a(),o(y,null,F(e,(m,f)=>d(j,{key:f,name:"fade"},{default:I(()=>[f===r.value?(a(),o("img",{key:0,src:m.src,alt:m.alt,class:"photo"},null,8,X)):w("",!0)]),_:2},1024)),64)),t("i",{class:"fas fa-caret-right absolute right-0 top-1/3 text-4xl m-2 cursor-pointer text-white z-50",onClick:l}),t("i",{class:"fas fa-caret-left absolute left-0 top-1/3 text-4xl m-2 cursor-pointer text-white z-50",onClick:c}),s.value?(a(),o("i",{key:0,class:"fa-solid fa-circle-play absolute bottom-5 text-3xl m-2 cursor-pointer text-gray-500 z-50",onClick:v})):(a(),o("i",{key:1,class:"fa-solid fa-pause absolute bottom-5 text-3xl m-2 cursor-pointer shadow-2xl text-gray-500 z-50",onClick:g}))])])]))}},R={components:{ImageSlider3:H}};function G(h,e,r,n,s,l){const c=k("ImageSlider3");return a(),o(y,null,[e[0]||(e[0]=t("h1",null,"Tenmo",-1)),e[1]||(e[1]=t("h4",null,"A Currency Exchange Server",-1)),e[2]||(e[2]=t("p",null," Tenmo is a two way server to mimic a currency exchange service. The project was created in IntelliJ using Java and PostgreSQL. Utilizing object-oriented programming, Tenmo allows a user to register their account, initiate transfers, and approve transfer requests from other users. An internal log is kept to record all transactions. Automated testing was also created for this system. This project was created as a pair assignment at Tech Elevator. ",-1)),d(c)],64)}const W=b(R,[["render",G]]),K={};function Z(h,e){return a(),o(y,null,[e[0]||(e[0]=t("h1",null,"Future Projects",-1)),e[1]||(e[1]=t("h4",null,"Cubris",-1)),e[2]||(e[2]=t("p",null,"A mobile idle game where strategic choices determine your success or failure in building the largest cube. Will you make the right choice or will your blocks come tumbling down? ",-1)),e[3]||(e[3]=t("h4",null,"Netherfield Ball",-1)),e[4]||(e[4]=t("p",null,"My very first coding project was a python choose-your-own-adventure game. I would love to give it a fancy dressing up and play with cool UI options.",-1)),e[5]||(e[5]=t("h4",null,"The Dozen Database",-1)),e[6]||(e[6]=t("p",null,"My family has a long history of silly videos but its becoming increasingly hard to keep track of home videos in the digital age. I want to make a server that can be privately accessed by family members to upload and share pictures and videos safely with each other only.",-1))],64)}const ee=b(K,[["render",Z]]),te={components:{InformativeDetails:A,FlipFlashDetails:O,TenmoDetails:W,FutureProjectDetails:ee},data(){return{informative:!0,flipFlash:!1,tenmo:!1,futureProjects:!1}},methods:{showInformative(){this.informative=!0,this.flipFlash=!1,this.tenmo=!1,this.futureProjects=!1},showFlip(){this.informative=!1,this.flipFlash=!0,this.tenmo=!1,this.futureProjects=!1},showTenmo(){this.informative=!1,this.flipFlash=!1,this.tenmo=!0,this.futureProjects=!1},showFuture(){this.informative=!1,this.flipFlash=!1,this.tenmo=!1,this.futureProjects=!0}}},se={class:"projects"},ae={class:"project-nav"},oe={key:0,id:"informative"},re={key:1,id:"flip-flash"},le={key:2,id:"tenmo"},ie={key:3,class:"future"};function ne(h,e,r,n,s,l){const c=k("InformativeDetails"),i=k("FlipFlashDetails"),v=k("TenmoDetails"),g=k("FutureProjectDetails");return a(),o("div",se,[t("nav",ae,[t("button",{onClick:e[0]||(e[0]=(...u)=>l.showInformative&&l.showInformative(...u))},"inFormative"),t("button",{onClick:e[1]||(e[1]=(...u)=>l.showFlip&&l.showFlip(...u))},"Flip Flash"),t("button",{onClick:e[2]||(e[2]=(...u)=>l.showTenmo&&l.showTenmo(...u))},"Tenmo"),t("button",{onClick:e[3]||(e[3]=(...u)=>l.showFuture&&l.showFuture(...u))},e[4]||(e[4]=[t("a",{id:"future"},"Future",-1),t("a",{id:"projects"}," Future Projects",-1)]))]),s.informative?(a(),o("div",oe,[d(c)])):w("",!0),s.flipFlash?(a(),o("div",re,[d(i)])):w("",!0),s.tenmo?(a(),o("div",le,[d(v)])):w("",!0),s.futureProjects?(a(),o("div",ie,[d(g)])):w("",!0)])}const ue=b(te,[["render",ne]]);export{ue as default};