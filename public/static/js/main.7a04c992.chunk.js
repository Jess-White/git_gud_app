(this["webpackJsonpgit-gud-react-app"]=this["webpackJsonpgit-gud-react-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);a(33),a(34);var n=a(0),l=a.n(n),r=a(30),o=a.n(r),i=a(3),s=a(4),c=a(1),u=a(6),m=a(5),d=a(8),h=a(7),v=a(10),g=a(2),p=a.n(g),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={first_name:"",last_name:"",email:"",user_name:"",password:"",password_confirmation:"",errors:[]},n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this,a=this.state,n=a.first_name,l=a.last_name,r=a.email,o=a.user_name,i=a.password,s=a.password_confirmation;p.a.post("/api/users",{first_name:n,last_name:l,email:r,user_name:o,password:i,password_confirmation:s}).then((function(e){"User created successfully!"===e.data.message&&t.props.history.push("/login")})).catch((function(e){t.setState({errors:e.response.data.errors}),console.log(t.state.errors)})),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"first_name",placeholder:"First Name",value:this.state.first_name,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"last_name",placeholder:"Last Name",value:this.state.last_name,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"user_name",placeholder:"User Name",value:this.state.user_name,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",name:"password_confirmation",placeholder:"Password Confirmation",value:this.state.password_confirmation,onChange:this.handleChange,required:!0})),l.a.createElement("div",null,this.state.errors.map((function(e,t){return l.a.createElement("span",{key:t,style:{color:"red"}},e,","," ")}))),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn-lg",type:"submit"},"Signup")))))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",errorMessage:""},n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this,a=this.state,n=a.email,l=a.password;p.a.post("/api/sessions",{email:n,password:l}).then((function(e){e.data.jwt&&(localStorage.setItem("token",e.data.jwt),localStorage.setItem("user_id",e.data.user_id),t.props.history.push("/dashboard"))})).catch((function(e){console.log(t.state.errorMessage),console.log(e.response.data),console.log(e.response.status),console.log(e.response)})),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange,required:!0})),l.a.createElement("div",null,l.a.createElement("span",{style:{color:"red"}},this.state.errorMessage)),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn-lg"},"Login")))))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={first_name:"",last_name:"",user_name:"",email:"",isHidden:!1},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/users/"+localStorage.user_id,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.setState({first_name:t.data.first_name,last_name:t.data.last_name,user_name:t.data.user_name,email:t.data.email})})).catch((function(e){console.log(e)}))}},{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(v.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this,a=this.state,n=a.first_name,l=a.last_name,r=a.user_name,o=a.email;p.a.patch("/api/users/"+localStorage.user_id,{first_name:n,last_name:l,user_name:r,email:o},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return t.toggleHidden()})).catch((function(e){console.log("user update error",e)})),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:10}},l.a.createElement("h1",null,"Welcome to your Dashboard ",this.state.first_name),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.toggleHidden.bind(this),className:"btn-lg"},"Update Account Info"),l.a.createElement("br",null),l.a.createElement("br",null),this.state.isHidden?l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",value:this.state.first_name,name:"first_name",placeholder:this.state.first_name,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",value:this.state.last_name,name:"last_name",placeholder:this.state.last_name,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"User Name"),l.a.createElement("input",{type:"text",value:this.state.user_name,name:"user_name",placeholder:this.state.user_name,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"text",value:this.state.email,name:"email",placeholder:this.state.email,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn-lg"},"Submit"),l.a.createElement("button",{onClick:this.toggleHidden.bind(this),className:"btn-lg"},"Close"))),l.a.createElement("br",null))):null))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={favorites:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/favorites",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.setState({favorites:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h1",null,"Your Favorites:"),this.state.favorites.map((function(e){return l.a.createElement("div",{className:"card bg-light mb-3",key:e.id},l.a.createElement("div",{className:"card-header",style:{backgroundColor:"black"}},l.a.createElement(d.b,{className:"inapp-link",to:"/resources/"+e.resource.id},e.resource.name)),l.a.createElement("div",{className:"card-body",style:{backgroundColor:"#009B00"}},e.resource.author?l.a.createElement("h4",{style:{color:"black"}},"By: ",e.resource.author):null,l.a.createElement("a",{href:e.resource.url},e.resource.url),l.a.createElement("br",null)))})))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(f,{history:this.props.history}),l.a.createElement("br",null),l.a.createElement(d.b,{to:"/resources-new"},l.a.createElement("button",{className:"btn-lg"},"Add New Learning Resource")),l.a.createElement(y,null))}}]),a}(n.Component);var S=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"./git_gud_finished.png",className:"img-fluid",alt:""}),l.a.createElement("h1",null,"Read and Create reviews on your journey into coding"))))},N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n.handleLogoutClick=n.handleLogoutClick.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"handleLogoutClick",value:function(){localStorage.removeItem("token"),localStorage.removeItem("user_id"),this.props.history.push("/login")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light",style:{backgroundColor:"#00E000"}},l.a.createElement("div",{className:"navbar-nav"},localStorage.token&&localStorage.user_id?l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{style:{color:"black"},className:"navbar-brand",to:"/dashboard"},"Dashboard")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{style:{color:"black"},className:"navbar-brand",to:"/resources"},"Resources")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{style:{color:"black"},className:"navbar-brand",to:"/resources-new"},"Add Resource")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{className:"logout-btn navbar-brand",onClick:this.handleLogoutClick},"Logout"))):l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{style:{color:"black"},className:"navbar-brand",to:"/signup"},"Signup")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{style:{color:"black"},className:"navbar-brand",to:"/login"},"Login"))))))}}]),a}(n.Component),_=Object(h.g)(N);var k=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright J/M Productions"))};function w(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Search For A Coding Resource"),l.a.createElement("form",{className:"searchForm"},l.a.createElement("input",{value:e.query,onChange:e.handleChange,type:"text",className:"search other",placeholder:"Type in a tag to search",name:"query"})))}var O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(v.a)({},a,l))},n.state={loading:!0,resources:[],query:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),p.a.get("/api/resources",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.setState({resources:t.data,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;if(this.state.loading)return l.a.createElement("h1",null,"Loading....");var t=this.state.resources.filter((function(t){return!e.state.query||t.tags.some((function(t){return t.toLowerCase().includes(e.state.query.toLowerCase())}))}));return l.a.createElement("div",{className:"container"},l.a.createElement(w,{query:this.query,handleChange:this.handleChange}),l.a.createElement("br",null),t.map((function(e){return l.a.createElement("div",{className:"card bg-light mb-3",key:e.id},l.a.createElement("div",{className:"card-header",style:{backgroundColor:"black"}},l.a.createElement(d.c,{className:"inapp-link",to:"/resources/".concat(e.id)},e.name)),l.a.createElement("div",{className:"card-body",style:{backgroundColor:"#009B00"}},e.author?l.a.createElement("h4",{style:{color:"black"}},"By: ",e.author):null,l.a.createElement("a",{href:e.url},e.url),l.a.createElement("br",null),l.a.createElement("div",null,"Tags:"," ",e.tags.map((function(e,t){return l.a.createElement("span",{key:t},e,", ")})))))})))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSelect=function(e){var t=n.state.tag_list;t+=" ".concat(e.target.value,","),n.setState({tag_list:t})},n.state={name:"",url:"",author:"",description:"",resource_type:"",format:"",difficulty:"",cost:"",user_id:localStorage.user_id,tag_list:"",tags:[],errors:[]},n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),p.a.get("/api/tags",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){console.log(t),e.setState({tags:t.data})})).catch((function(e){return console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this,a=this.state,n=a.name,l=a.url,r=a.author,o=a.description,i=a.resource_type,s=a.format,c=a.difficulty,u=a.cost,m=a.user_id,d=a.tag_list;p.a.post("/api/resources",{name:n,url:l,author:r,description:o,resource_type:i,format:s,difficulty:c,cost:u,user_id:m,tag_list:d},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){e.data&&t.props.history.push("/resources")})).catch((function(e){console.log("resource creation error",e)})),e.preventDefault()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Resource Name"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"URL or Web Address"),l.a.createElement("input",{type:"text",name:"url",value:this.state.url,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Author"),l.a.createElement("input",{type:"text",name:"author",value:this.state.author,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Resource Type"),l.a.createElement("select",{name:"resource_type",value:this.state.resource_type,onChange:this.handleChange,required:!0},l.a.createElement("option",{value:"",disabled:!0},"Select a Resource Type"),l.a.createElement("option",{value:"channel"},"Channel"),l.a.createElement("option",{value:"cheat_sheet"},"Cheat Sheet"),l.a.createElement("option",{value:"deep_dive"},"Deep Dive"),l.a.createElement("option",{value:"tutorial"},"Tutorial"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Format:"),l.a.createElement("select",{name:"format",value:this.state.format,onChange:this.handleChange,required:!0},l.a.createElement("option",{value:"",disabled:!0},"Select a Format"),l.a.createElement("option",{value:"text"},"Text"),l.a.createElement("option",{value:"video"},"Video"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Difficulty:"),l.a.createElement("select",{name:"difficulty",value:this.state.difficulty,onChange:this.handleChange,required:!0},l.a.createElement("option",{value:"",disabled:!0},"Select a Level of Difficulty"),l.a.createElement("option",{value:"basic"},"Basic"),l.a.createElement("option",{value:"beginner"},"Beginner"),l.a.createElement("option",{value:"intermediate"},"Intermediate"),l.a.createElement("option",{value:"advanced"},"Advanced"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Cost:"),l.a.createElement("select",{name:"cost",value:this.state.cost,onChange:this.handleChange,required:!0},l.a.createElement("option",{value:"",disabled:!0},"Select a Cost $"),l.a.createElement("option",{value:"0"},"Free"),l.a.createElement("option",{value:"1"},"$"),l.a.createElement("option",{value:"2"},"$$"),l.a.createElement("option",{value:"3"},"$$$"),l.a.createElement("option",{value:"4"},"$$$$"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("textarea",{name:"description",value:this.state.description,onChange:this.handleChange,rows:"4",cols:"50",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Add Your Own Tags:"),l.a.createElement("input",{type:"text",name:"tag_list",placeholder:"Javascript, CSS, ....",value:this.state.tag_list,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Existing Tags To Choose From:"),l.a.createElement("select",{name:"tag_list",onChange:this.handleSelect},l.a.createElement("option",{value:"",disabled:!0},"Select Multiple 1 or More Tags"),this.state.tags.map((function(t){return l.a.createElement("option",{key:t.id,value:t.name,onChange:e.handleChange},t.name)})))),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn-lg"},"Add Your Resource")))))}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={reviews:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/reviews",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){console.log(t),e.setState({reviews:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Reviews:"),this.state.reviews.map((function(e){return l.a.createElement("div",{className:"tile",key:e.id},l.a.createElement(d.c,{style:{color:"green"},className:"navbar-brand",to:"/reviews/".concat(e.id)},e.title),l.a.createElement("p",{style:{color:"green"}},e.body))})))}}]),a}(n.Component),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"",body:"",rating:"",resource_id:"",id:"",user_name:"",loading:!0,canEdit:!1},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.showEditAbility=n.showEditAbility.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/reviews/".concat(this.props.match.params.id),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.setState({title:t.data.title,body:t.data.body,rating:t.data.rating,user_id:t.data.user_id,resource_id:t.data.resource_id,id:t.data.id,user_name:t.data.user.user_name,loading:!1})})).then((function(t){e.showEditAbility()})).catch((function(e){console.log(e)}))}},{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"showEditAbility",value:function(){this.state.user_id===parseInt(localStorage.user_id)&&this.setState({canEdit:!this.state.canEdit})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(v.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this,a=this.state,n=a.title,l=a.body,r=a.rating;p.a.patch("/api/reviews/"+this.state.id,{title:n,body:l,rating:r},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.toggleHidden()})).catch((function(e){console.log("review update error",e)})),e.preventDefault()}},{key:"render",value:function(){return this.state.loading?l.a.createElement("h1",null,"Loading...."):l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Rating: ",this.state.rating),l.a.createElement("h3",null,"Title: ",this.state.title),l.a.createElement("h3",null,"Author: ",this.state.user_name),l.a.createElement("br",null),l.a.createElement("h3",null,this.state.body),l.a.createElement("br",null),l.a.createElement("div",null,this.state.canEdit?l.a.createElement("div",{className:"container"},l.a.createElement("button",{onClick:this.toggleHidden.bind(this)},"Update Review"),l.a.createElement("br",null),l.a.createElement("br",null),this.state.isHidden?l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title"),l.a.createElement("input",{type:"text",value:this.state.title,name:"title",placeholder:this.state.title,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Body"),l.a.createElement("textarea",{type:"text",value:this.state.body,name:"body",placeholder:this.state.body,onChange:this.handleChange,required:!0,rows:"4",cols:"50"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"How Would You Rate This Resource?"),l.a.createElement("select",{name:"rating",value:this.state.rating,onChange:this.handleChange,required:!0},l.a.createElement("option",{value:"",disabled:!0},"Between 1 and 5 Stars"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"))),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn-lg"},"Submit"),l.a.createElement("button",{onClick:this.toggleHidden.bind(this),className:"btn-lg"},"Close"))))):null):null))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).clearForm=function(){n.setState({title:"",body:"",rating:""})},n.state={title:"",body:"",rating:"",user_id:localStorage.user_id,resource_id:n.props.resource_id},n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this,a=this.state;p.a.post("/api/reviews",a,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){e.data&&(t.props.updateReviews(e.data),t.clearForm())})).catch((function(e){console.log("review creation error",e)})),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title"),l.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Tell Us What You Think"),l.a.createElement("textarea",{name:"body",value:this.state.body,onChange:this.handleChange,rows:"4",cols:"50",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"How Would You Rate This Resource?"),l.a.createElement("select",{name:"rating",value:this.state.rating,onChange:this.handleChange,required:!0},l.a.createElement("option",{value:"",disabled:!0},"Between 1 and 5 Stars"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"))),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn-md"},"Add New Review")))))}}]),a}(n.Component),L=Object(h.g)(A),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateReviews=function(e){var t=n.state.reviews;t.push(e),n.setState({reviews:t})},n.state={loading:!0,user_id:"",id:"",url:"",name:"",author:"",description:"",resource_type:"",format:"",difficulty:"",cost:"",currentResourceId:"",favorite:"",canEdit:!1,reviews:[]},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.showEditAbility=n.showEditAbility.bind(Object(c.a)(n)),n.createStars=n.createStars.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),p.a.get("/api/resources/".concat(this.props.match.params.id),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.setState({user_id:t.data.user_id,id:t.data.id,url:t.data.url,name:t.data.name,author:t.data.author,description:t.data.description,resource_type:t.data.resource_type,format:t.data.format,difficulty:t.data.difficulty,cost:t.data.cost,reviews:t.data.reviews,favorite:t.data.favorite,loading:!1})})).then((function(t){e.showEditAbility()})).catch((function(e){console.log(e)}))}},{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"showEditAbility",value:function(){this.state.user_id===parseInt(localStorage.user_id)&&this.setState({canEdit:!this.state.canEdit})}},{key:"createFavorite",value:function(){var e=this;p.a.post("/api/favorites",{user_id:localStorage.user_id,resource_id:this.state.id},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.setState({favorite:!0})})).catch((function(e){console.log("favorite create error",e)}))}},{key:"handleFavoriteDelete",value:function(){var e=this;p.a.delete("/api/favorites/user_id="+localStorage.user_id+"&resource_id="+this.state.id,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.setState({favorite:!1}),console.log(t)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(v.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this,a=this.state,n=a.name,l=a.url,r=a.author,o=a.description,i=a.resource_type,s=a.format,c=a.difficulty,u=a.cost;p.a.patch("/api/resources/"+this.state.id,{name:n,url:l,author:r,description:o,resource_type:i,format:s,difficulty:c,cost:u},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.toggleHidden()})).catch((function(e){console.log("resource update error",e)})),e.preventDefault()}},{key:"createStars",value:function(e){return"\u2605".repeat(parseInt(e))+"\u2606".repeat(5-parseInt(e))}},{key:"render",value:function(){var e=this;return this.state.loading?l.a.createElement("h1",null,"Loading...."):l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:this.state.url,target:"_blank",className:"inapp-link",rel:"noopener noreferrer",style:{fontSize:30}},this.state.name),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{style:{fontSize:25}},this.state.author?l.a.createElement("li",null,"Author: ",this.state.author):null,l.a.createElement("li",null,"Type: ",this.state.resource_type),l.a.createElement("li",null,"Format: ",this.state.format),l.a.createElement("li",null,"Difficulty: ",this.state.difficulty),l.a.createElement("li",null,"Cost:"," ",0===this.state.cost?"Free":"$".repeat(parseInt(this.state.cost))),l.a.createElement("li",null,"Description: ",this.state.description)),l.a.createElement("br",null),!1===this.state.favorite?l.a.createElement("button",{onClick:this.createFavorite.bind(this)},"Add to Your Favorites"):l.a.createElement("button",{onClick:this.handleFavoriteDelete.bind(this)},"Remove from Favorites"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,"Add Your Own Review"),l.a.createElement("div",null,l.a.createElement(L,{resource_id:this.state.id,history:this.props.history,updateReviews:this.updateReviews})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("h1",null,"Reviews:"),this.state.reviews.map((function(t){return l.a.createElement("div",{className:"card bg-light mb-3",key:t.id},l.a.createElement("div",{className:"card-header",style:{backgroundColor:"black"}},l.a.createElement(d.b,{className:"inapp-link",to:"/reviews/".concat(t.id)},t.title),l.a.createElement("h3",null,e.createStars(t.rating)),t.body.length>100?l.a.createElement("h3",null,t.body.slice(0,100)," ..."):l.a.createElement("h3",null,t.body),l.a.createElement("h3",null,"By: ",t.user.user_name),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},l.a.createElement("symbol",{id:"star",viewBox:"214.7 0 182.6 792"}),l.a.createElement("svg",{className:"icon"},l.a.createElement("use",{xlinkHref:"#star"})))))}))),l.a.createElement("br",null),this.state.canEdit?l.a.createElement("div",{className:"container"},l.a.createElement("button",{onClick:this.toggleHidden.bind(this)},"Update Resource"),l.a.createElement("br",null),l.a.createElement("br",null),this.state.isHidden?l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Resource Name"),l.a.createElement("input",{type:"text",value:this.state.name,name:"name",placeholder:this.state.name,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"URL"),l.a.createElement("input",{type:"text",value:this.state.url,name:"url",placeholder:this.state.url,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Author"),l.a.createElement("input",{type:"text",value:this.state.author,name:"author",placeholder:this.state.author,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Resource Type"),l.a.createElement("select",{name:"resource_type",value:this.state.resource_type,onChange:this.handleChange},l.a.createElement("option",{value:"",disabled:!0},"Select a Resource Type"),l.a.createElement("option",{value:"channel"},"Channel"),l.a.createElement("option",{value:"cheat_sheet"},"Cheat Sheet"),l.a.createElement("option",{value:"deep_dive"},"Deep Dive"),l.a.createElement("option",{value:"tutorial"},"Tutorial"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Format:"),l.a.createElement("select",{name:"format",value:this.state.format,onChange:this.handleChange},l.a.createElement("option",{value:"",disabled:!0},"Select a Format"),l.a.createElement("option",{value:"text"},"Text"),l.a.createElement("option",{value:"video"},"Video"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Difficulty:"),l.a.createElement("select",{name:"difficulty",value:this.state.difficulty,onChange:this.handleChange},l.a.createElement("option",{value:"",disabled:!0},"Select a Level of Difficulty"),l.a.createElement("option",{value:"basic"},"Basic"),l.a.createElement("option",{value:"beginner"},"Beginner"),l.a.createElement("option",{value:"intermediate"},"Intermediate"),l.a.createElement("option",{value:"advanced"},"Advanced"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Cost:"),l.a.createElement("select",{name:"cost",value:this.state.cost,onChange:this.handleChange},l.a.createElement("option",{value:"",disabled:!0},"Select a Cost $"),l.a.createElement("option",{value:"0"},"Free"),l.a.createElement("option",{value:"1"},"$"),l.a.createElement("option",{value:"2"},"$$"),l.a.createElement("option",{value:"3"},"$$$"),l.a.createElement("option",{value:"4"},"$$$$"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("textarea",{name:"description",value:this.state.description,onChange:this.handleChange,rows:"4",cols:"50",required:!0})),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn-lg"},"Submit Update"),l.a.createElement("button",{onClick:this.toggleHidden.bind(this),className:"btn-lg"},"Close"))),l.a.createElement("br",null))):null):null)}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e.handleLogin=e.handleLogin.bind(Object(c.a)(e)),e.handleLogout=e.handleLogout.bind(Object(c.a)(e)),e}return Object(s.a)(a,[{key:"checkLoginStatus",value:function(){localStorage.token&&"NOT_LOGGED_IN"===this.state.loggedInStatus?this.setState({loggedInStatus:"LOGGED_IN"}):localStorage.token||"LOGGED_IN"!==this.state.loggedInStatus||this.setState({loggedInStatus:"NOT_LOGGED_IN",user:{}})}},{key:"componentDidMount",value:function(){this.checkLoginStatus()}},{key:"handleLogout",value:function(){this.setState({loggedInStatus:"NOT_LOGGED_IN",user:{}})}},{key:"handleLogin",value:function(e){this.setState({loggedInStatus:"LOGGED_IN",user:e.user})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app"},l.a.createElement(d.a,null,l.a.createElement(_,{loggedInStatus:this.state.loggedInStatus}),l.a.createElement(S,null),l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/"},l.a.createElement(h.a,{to:"/signup"})),l.a.createElement(h.b,{exact:!0,path:"/signup",component:E}),l.a.createElement(h.b,{exact:!0,path:"/login",component:b}),l.a.createElement(h.b,{exact:!0,path:"/dashboard",render:function(t){return l.a.createElement(C,Object.assign({},t,{loggedInStatus:e.state.loggedInStatus}))}}),l.a.createElement(h.b,{exact:!0,path:"/resources",component:O}),l.a.createElement(h.b,{exact:!0,path:"/resources/:id",component:T}),l.a.createElement(h.b,{exact:!0,path:"/resources-new",component:j}),l.a.createElement(h.b,{exact:!0,path:"/reviews",component:x}),l.a.createElement(h.b,{exact:!0,path:"/reviews/:id",component:D}),l.a.createElement(h.b,{exact:!0,path:"/reviews-new",component:L}))),l.a.createElement(k,null))}}]),a}(n.Component);a(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.defaults.baseURL="/",o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7a04c992.chunk.js.map