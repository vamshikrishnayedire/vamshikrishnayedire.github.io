(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,function(e,t,n){e.exports=n.p+"BurgerBuilder/static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={loader:"Spinner_loader__fTuX5",load3:"Spinner_load3__3VkKK"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_",Input:"ContactData_Input__2fK5-"}},function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_",Input:"Auth_Input__2LQ-q"}},,,function(e,t,n){e.exports=n(88)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),c=(n(65),n(4)),l=n(5),u=n(7),s=n(6),d=function(e){return e.children},p=n(44),m=n.n(p),h=n(45),g=n.n(h),f=function(e){return r.a.createElement("div",{className:g.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:m.a,alt:"BurgerBuilder"}))},v=n(15),b=n(28),E=n.n(b),_=function(e){return r.a.createElement("li",{className:E.a.NavigationItem},r.a.createElement(v.b,{to:e.link,exact:!0,activeClassName:E.a.active},e.children))},y=n(46),O=n.n(y),C=function(e){return r.a.createElement("ul",{className:O.a.NavigationItems},r.a.createElement(_,{link:"/"},"Burger Builder"),e.isAuthenticated?r.a.createElement(_,{link:"/orders"},"My Orders"):null,e.isAuthenticated?r.a.createElement(_,{link:"/logout"},"LOGOUT"):r.a.createElement(_,{link:"/auth"},"LOGIN"))},S=n(47),k=n.n(S),I=function(e){return r.a.createElement("div",{onClick:e.clicked,className:k.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},T=n(26),j=n.n(T),A=function(e){return r.a.createElement("header",{className:j.a.Toolbar},r.a.createElement(I,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:j.a.Logo},r.a.createElement(f,null)),r.a.createElement("nav",{className:j.a.DesktopOnly},r.a.createElement(C,{isAuthenticated:e.isAuth})))},N=n(48),D=n.n(N),w=function(e){return e.show?r.a.createElement("div",{className:D.a.Backdrop,onClick:e.clicked}):null},B=n(19),R=n.n(B),x=function(e){var t=[R.a.SideDrawer,R.a.Close];return e.open&&(t=[R.a.SideDrawer,R.a.Open]),r.a.createElement(d,null,r.a.createElement(w,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement("div",{className:R.a.Logo},r.a.createElement(f,null)),r.a.createElement("nav",null,r.a.createElement(C,{isAuthenticated:e.isAuth}))))},H=n(8),L=n(50),U=n.n(L),P=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerOpenHandler=function(){e.setState({showSideDrawer:!0})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(A,{drawerToggleClicked:this.sideDrawerToggleHandler,isAuth:this.props.isAuthenticated}),r.a.createElement(x,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler,isAuth:this.props.isAuthenticated}),r.a.createElement("main",{className:U.a.Content},this.props.children))}}]),n}(a.Component),F=Object(H.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(P),M=n(1),G=n(51),V=n.n(G),q=r.a.memo((function(e){return r.a.createElement(d,null,r.a.createElement(w,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:V.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))})),K=function(e,t){return function(n){Object(u.a)(o,n);var a=Object(s.a)(o);function o(){var e;Object(c.a)(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(l.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(q,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(a.Component)},Y=n(59),X=n(14),W=n.n(X),J=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:W.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:W.a.BreadTop},r.a.createElement("div",{className:W.a.Seeds1}),r.a.createElement("div",{className:W.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:W.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:W.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:W.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:W.a.Bacon});break;default:e=null}return e}}]),n}(a.Component),Z=n(52),z=n.n(Z),Q=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(Y.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(J,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding Ingredients!")),r.a.createElement("div",{className:z.a.Burger},r.a.createElement(J,{type:"bread-top"}),t,r.a.createElement(J,{type:"bread-bottom"}))},$=n(21),ee=n.n($),te=function(e){return r.a.createElement("div",{className:ee.a.BuildControl},r.a.createElement("div",{className:ee.a.Label},e.label),r.a.createElement("button",{className:ee.a.Less,onClick:e.remove,disabled:e.disabled},"Less"),r.a.createElement("button",{className:ee.a.More,onClick:e.added},"More"))},ne=n(32),ae=n.n(ne),re=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],oe=function(e){return r.a.createElement("div",{className:ae.a.BuildControls},r.a.createElement("p",null,"Current Price : $",r.a.createElement("strong",null,e.price.toFixed(2))),re.map((function(t){return r.a.createElement(te,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},remove:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:ae.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGNIN TO ORDER"))},ie=n(33),ce=n.n(ie),le=function(e){return r.a.createElement("button",{className:[ce.a.Button,ce.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)},ue=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}}," ",t," ")," : ",e.ingredients[t])}));return r.a.createElement(d,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"Delicious Burger with following ingredients :"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Total Price : ",r.a.createElement("strong",null,e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(le,{btnType:"Danger",clicked:e.purchaseCancel},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:e.purchaseContinue},"ORDER"))},se=n(53),de=n.n(se),pe=function(){return r.a.createElement("div",{className:de.a.loader},"Loading...")},me=n(25),he=n.n(me),ge=he.a.create({baseURL:"https://react-burger-builder-c9bc0.firebaseio.com/"}),fe=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},ve=function(){return localStorage.removeItem("burger_token"),localStorage.removeItem("burger_expirationDate"),localStorage.removeItem("burger_userId"),{type:"AUTH_LOGOUT"}},be=function(e){return function(t){setTimeout((function(){t(ve())}),1e3*e)}},Ee=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},_e=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={purchasable:!1,purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){console.log(e.props),e.props.onInitPurchase(),e.props.history.push("./checkout")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(M.a)({},this.props.ings);for(var t in e)e[t]=e[t]<1;var n=null,a=this.props.error?r.a.createElement("p",null,"There is a problem!",r.a.createElement("br",null),"Ingredients are not loaded"):r.a.createElement(pe,null);return this.props.ings&&(a=r.a.createElement(d,null,r.a.createElement(Q,{ingredients:this.props.ings}),r.a.createElement(oe,{ingredientAdded:this.props.onIngredientAdd,ingredientRemove:this.props.onIngredientRemove,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=r.a.createElement(ue,{ingredients:this.props.ings,price:this.props.price,purchaseCancel:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler})),r.a.createElement(d,null,r.a.createElement(q,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),n}(a.Component),ye=Object(H.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdd:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemove:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){ge.get("https://react-burger-builder-c9bc0.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(Ee(t))}}}))(K(_e,ge)),Oe=n(3),Ce=n(54),Se=n.n(Ce),ke=function(e){return r.a.createElement("div",{className:Se.a.CheckoutSummary},r.a.createElement("h1",null,"Your Yummy Burger is Ready to Chekout!"),r.a.createElement("div",{style:{width:"100%",height:"300px",margin:"auto"}},r.a.createElement(Q,{ingredients:e.ingredients})),r.a.createElement(le,{btnType:"Danger",clicked:e.checkoutCanceled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:e.checkoutContinue},"CONTINUE AND PAY "))},Ie=n(22),Te=n.n(Ie),je=function(e){var t=null,n=[Te.a.InputElement],a=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(n.push(Te.a.Invalid),a=r.a.createElement("span",{style:{color:"red"}},"Please Enter a valid value!")),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{onChange:e.changed,value:e.value}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{onChange:e.changed,value:e.value}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{onChange:e.changed,value:e.value}))}return r.a.createElement("div",{className:Te.a.Input},r.a.createElement("label",{className:Te.a.Label},e.label),t,a)},Ae=n(55),Ne=n.n(Ae),De=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zipcode"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0}},formIsValid:!1},e.orerHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:n,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,n){var a=Object(M.a)({},e.state.orderForm),r=Object(M.a)({},a[n]);r.value=t.target.value,r.touched=!0,r.valid=e.checkValidity(r.value,r.validation),a[n]=r;var o=!0;for(var i in a)o=a[i].valid&&o;e.setState({orderForm:a,formIsValid:o})},e}return Object(l.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return t&&t.required&&(n=""!==e.trim()&&n),t&&t.minLength&&(n=e.length>=t.minLength&&n),t&&t.maxLength&&(n=e.length<=t.maxLength&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orerHandler},t.map((function(t){return r.a.createElement(je,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),r.a.createElement(le,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(a=r.a.createElement(pe,null)),r.a.createElement("div",{className:Ne.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),n}(a.Component),we=Object(H.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),ge.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}}(t,n))}}}))(K(De,ge)),Be=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).checkoutCanceledHandler=function(){e.props.history.goBack()},e.checkoutContinueHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=r.a.createElement(Oe.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?r.a.createElement(Oe.a,{to:"/"}):null;e=r.a.createElement("div",null,t,r.a.createElement(ke,{ingredients:this.props.ings,checkoutCanceled:this.checkoutCanceledHandler,checkoutContinue:this.checkoutContinueHandler}),r.a.createElement(Oe.b,{path:this.props.match.path+"/contact-data",component:we}))}return e}}]),n}(a.Component),Re=Object(H.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}),(function(e){return{}}))(Be),xe=n(56),He=n.n(xe),Le=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{key:e.name,style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"}},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:He.a.Order},r.a.createElement("p",null,"Ingredients : ",a),r.a.createElement("p",null,"Price : ",r.a.createElement("strong",null,"$ ",e.price)))},Ue=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=r.a.createElement(pe,null);return this.props.loading||(e=this.props.orders.map((function(e){return r.a.createElement(Le,{key:e.id,ingredients:e.ingredients,price:e.price})}))),r.a.createElement("div",null,e)}}]),n}(a.Component),Pe=Object(H.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_ORDERS_START"});var a="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';ge.get("./orders.json"+a).then((function(e){var t=[];for(var a in e.data)t.push(Object(M.a)(Object(M.a)({},e.data[a]),{},{id:a}));n({type:"FETCH_ORDERS_SUCCESS",orders:t})})).catch((function(e){var t;n({type:"FETCH_ORDERS_FAIL",error:t})}))}}(t,n))}}}))(K(Ue,ge)),Fe=n(16),Me=n(57),Ge=n.n(Me),Ve=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.inputChangedHandler=function(t,n){var a=Object(M.a)(Object(M.a)({},e.state.controls),{},Object(Fe.a)({},n,Object(M.a)(Object(M.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:a})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"checkValidity",value:function(e,t){var n=!0;return t&&t.required&&(n=""!==e.trim()&&n),t&&t.minLength&&(n=e.length>=t.minLength&&n),t&&t.maxLength&&(n=e.length<=t.maxLength&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return r.a.createElement(je,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(a=r.a.createElement(pe,null));var o=null;this.props.error&&(o=r.a.createElement("p",{style:{color:"red"}},this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=r.a.createElement(Oe.a,{to:this.props.authRedirect})),r.a.createElement("div",{className:Ge.a.Auth},i,o,r.a.createElement("form",{onSubmit:this.submitHandler},a,r.a.createElement(le,{btnType:"Success"},this.state.isSignup?"SIGN UP":"LOGIN")),r.a.createElement(le,{btnType:"Danger",clicked:this.switchAuthModeHandler},"SWITCH TO ",this.state.isSignup?"LOGIN":"SIGN UP"))}}]),n}(a.Component),qe=Object(H.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirect:e.auth.authRedirect}}),(function(e){return{onAuth:function(t,n,a){return e(function(e,t,n){return function(a){a({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvUZwutUySwG49xysXGA0bkiQlloUxK18";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvUZwutUySwG49xysXGA0bkiQlloUxK18"),he.a.post(o,r).then((function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("burger_token",e.data.idToken),localStorage.setItem("burger_expirationDate",t),localStorage.setItem("burger_userId",e.data.localId),a(fe(e.data.idToken,e.data.localId)),a(be(e.data.expiresIn))})).catch((function(e){console.log(e),a(function(e){return{type:"AUTH_FAIL",error:e}}(e.response.data.error))}))}}(t,n,a))},onSetAuthRedirectPath:function(){return e(Ee("/"))}}}))(Ve),Ke=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(Oe.a,{to:"/auth"})}}]),n}(a.Component),Ye=Object(H.b)((function(e){return{}}),(function(e){return{onLogout:function(){return e(ve())}}}))(Ke),Xe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignin()}},{key:"render",value:function(){var e=r.a.createElement(Oe.d,null,r.a.createElement(Oe.b,{path:"/",exact:!0,component:ye}),r.a.createElement(Oe.b,{path:"/auth",exact:!0,component:qe}),r.a.createElement(Oe.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(Oe.d,null,r.a.createElement(Oe.b,{path:"/",exact:!0,component:ye}),r.a.createElement(Oe.b,{path:"/logout",exact:!0,component:Ye}),r.a.createElement(Oe.b,{path:"/orders",exact:!0,component:Pe}),r.a.createElement(Oe.b,{path:"/checkout",component:Re}))),r.a.createElement("div",null,r.a.createElement(F,null,e))}}]),n}(a.Component),We=Object(Oe.g)(Object(H.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignin:function(){return e((function(e){var t=localStorage.getItem("burger_token");if(t){var n=new Date(localStorage.getItem("burger_expirationDate"));if(n>new Date){var a=localStorage.getItem("burger_userId");e(fe(t,a)),e(be((n.getTime()-(new Date).getTime())/1e3))}else alert("test123"),e(ve())}else e(ve())}))}}}))(Xe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=function(e,t){return Object(M.a)(Object(M.a)({},e),t)},Ze={salad:.5,cheese:.4,meat:1.3,bacon:.7},ze={ingredients:null,totalPrice:4,error:!1,building:!1},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":var n=Object(Fe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),a=Je(e.ingredients,n),r=e.totalPrice+Ze[t.ingredientName],o=Je(e,{ingredients:a,totalPrice:r,building:!0});return o;case"REMOVE_INGREDIENT":return Object(M.a)(Object(M.a)({},e),{},{ingredients:Object(M.a)(Object(M.a)({},e.ingredients),{},Object(Fe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-Ze[t.ingredientName],building:!0});case"SET_INGREDIENTS":return Object(M.a)(Object(M.a)({},e),{},{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4,building:!1});case"FETCH_INGREDIENTS_FAILED":return Object(M.a)(Object(M.a)({},e),{},{error:!0});default:return e}return e},$e={orders:[],loading:!1,purchased:!1},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ORDERS_START":return Object(M.a)(Object(M.a)({},e),{},{loading:!0});case"FETCH_ORDERS_SUCCESS":return Object(M.a)(Object(M.a)({},e),{},{orders:t.orders,loading:!1});case"FETCH_ORDERS_FAIL":return Object(M.a)(Object(M.a)({},e),{},{loading:!1});case"PURCHASE_INIT":return Object(M.a)(Object(M.a)({},e),{},{purchased:!1});case"PURCHASE_BURGER_START":return Object(M.a)(Object(M.a)({},e),{},{loading:!0});case"PURCHASE_BURGER_SUCCESS":var n=Object(M.a)(Object(M.a)({},t.orderData),{},{id:t.orderId});return Object(M.a)(Object(M.a)({},e),{},{loading:!1,orders:e.orders.concat(n),purchased:!0});case"PURCHASE_BURGER_FAIL":return Object(M.a)(Object(M.a)({},e),{},{loading:!1});default:return e}},tt={token:null,userId:null,error:null,loading:!1,authRedirect:"/"},nt=function(e,t){return Je(e,{error:null,loading:!0})},at=function(e,t){return Je(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},rt=function(e,t){return Je(e,{loading:!1,error:t.error})},ot=function(e,t){return Je(e,{token:null,userId:null})},it=function(e,t){return Je(e,{authRedirect:t.path})},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return nt(e);case"AUTH_SUCCESS":return at(e,t);case"AUTH_FAIL":return rt(e,t);case"AUTH_LOGOUT":return ot(e);case"SET_AUTH_REDIRECT_PATH":return it(e,t);default:return e}},lt=n(17),ut=n(58),st=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||lt.d,dt=Object(lt.c)({burgerBuilder:Qe,order:et,auth:ct}),pt=Object(lt.e)(dt,st(Object(lt.a)(ut.a))),mt=r.a.createElement(H.a,{store:pt},r.a.createElement(v.a,{basename:"BurderBuilder/"},r.a.createElement(We,null)));i.a.render(r.a.createElement(r.a.StrictMode,null,mt),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[60,1,2]]]);
//# sourceMappingURL=main.41951b1a.chunk.js.map