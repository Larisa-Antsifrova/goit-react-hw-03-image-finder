(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1VSf7","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__3HHXg"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__LM-bU",Modal:"Modal_Modal__3dXgP"}},22:function(e,t,a){e.exports={Container:"Container_Container__kVN6r"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__13YIc"}},24:function(e,t,a){e.exports={Button:"Button_Button__2HL19"}},25:function(e,t,a){e.exports={error:"Error_error__2an3p"}},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),i=a(13),l=a(4),s=a(5),u=a(7),m=a(6),h=a(22),g=a.n(h),d=a(0),b=function(e){var t=e.children;return Object(d.jsx)("div",{className:g.a.Container,children:t})},p=a(8),j=a.n(p),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleInputChange=function(t){var a=t.currentTarget.value;e.setState({value:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.value;a&&e.props.onSubmit(a),e.reset()},e.reset=function(){e.setState({value:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.value;return Object(d.jsx)("header",{className:j.a.Searchbar,children:Object(d.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:j.a["SearchForm-button"],children:Object(d.jsx)("span",{className:j.a["SearchForm-button-label"],children:"Search"})}),Object(d.jsx)("input",{className:j.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleInputChange})]})})}}]),a}(n.Component),v=a(23),y=a.n(v),O=function(e){var t=e.children;return Object(d.jsx)("ul",{className:y.a.ImageGallery,children:t})},S=a(11),_=a.n(S),I=function(e){var t=e.image,a=e.setLargeImg,n=t.webformatURL,r=t.tags;return Object(d.jsx)("li",{className:_.a.ImageGalleryItem,onClick:function(){return a(t)},children:Object(d.jsx)("img",{src:n,alt:r,className:_.a["ImageGalleryItem-image"]})})},x=a(24),w=a.n(x),k=function(e){var t=e.onLoadMore;return Object(d.jsx)("button",{type:"button",className:w.a.Button,onClick:t,children:"Load more"})},C=a(12),L=a.n(C),M=document.querySelector("#modal-root"),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImgUrl;return Object(o.createPortal)(Object(d.jsx)("div",{className:L.a.Overlay,onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:L.a.Modal,children:Object(d.jsx)("img",{src:e,alt:"Gallery item"})})}),M)}}]),a}(n.Component),F=a(25),G=a.n(F),q=function(e){var t=e.message;return Object(d.jsx)("p",{className:G.a.error,children:t})},B=a(26),U=a.n(B);function D(e){var t=e.query,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n,o=e.perPage,c=void 0===o?12:o;return U.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(r,"&key=").concat("19692208-b21bb8a95ceb217f14156bc9c","&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits}))}var E=a(27),A=a.n(E),H=(a(71),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],query:"",page:1,isLoading:!1,error:null,selectedImg:""},e.handleSubmit=function(t){e.setState({images:[],query:t,page:1,error:null,selectedImg:"",showModal:!1})},e.getImages=function(){var t=e.state,a={query:t.query,page:t.page};e.setState({isLoading:!0}),D(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.setLargeImg=function(t){e.setState({selectedImg:t.largeImageURL}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.getImages()}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.error,r=t.isLoading,o=t.showModal,c=t.selectedImg;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(f,{onSubmit:this.handleSubmit}),Object(d.jsxs)(b,{children:[Object(d.jsx)(O,{children:a.map((function(t){return Object(d.jsx)(I,{image:t,setLargeImg:e.setLargeImg},t.id)}))}),n&&Object(d.jsx)(q,{message:n.message}),r&&Object(d.jsx)(A.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80,className:"loader"})]}),a.length>0&&!r&&Object(d.jsx)(k,{onLoadMore:this.getImages}),o&&Object(d.jsx)(N,{largeImgUrl:c,onClose:this.toggleModal})]})}}]),a}(n.Component));a(72),a(73);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3inQG",SearchForm:"Searchbar_SearchForm__2aNjO","SearchForm-button":"Searchbar_SearchForm-button__1E2U2","SearchForm-button-label":"Searchbar_SearchForm-button-label__3i4Dn","SearchForm-input":"Searchbar_SearchForm-input__1aSy-"}}},[[74,1,2]]]);
//# sourceMappingURL=main.619143ce.chunk.js.map