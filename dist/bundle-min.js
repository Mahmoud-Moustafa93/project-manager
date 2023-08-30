"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(b,c){var d=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=d){var g,h,j,k,l=[],a=!0,m=!1;try{if(j=(d=d.call(b)).next,0===c){if(Object(d)!==d)return;a=!1}else for(;!(a=(g=j.call(d)).done)&&(l.push(g.value),l.length!==c);a=!0);}catch(a){m=!0,h=a}finally{try{if(!a&&null!=d["return"]&&(k=d["return"](),Object(k)!==k))return}finally{if(m)throw h}}return l}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function(){c=c.call(a)},n:function(){var a=c.next();return g=a.done,a},e:function(a){h=!0,f=a},f:function(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){if(b&&("object"===_typeof(b)||"function"==typeof b))return b;if(void 0!==b)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"===_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!==_typeof(a)||null===a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var d=c.call(a,b||"default");if("object"!==_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(function(){"use strict";function b(a){var b=!0;return a.required&&(b=b&&0!==a.value.toString().trim().length),null!=a.minLength&&"string"==typeof a.value&&(b=b&&a.value.length>=a.minLength),null!=a.maxLength&&"string"==typeof a.value&&(b=b&&a.value.length<=a.maxLength),null!=a.min&&"number"==typeof a.value&&(b=b&&a.value>=a.min),null!=a.max&&"number"==typeof a.value&&(b=b&&a.value<=a.max),b}function f(a,b,c){var d=c.value;return{configurable:!0,get:function(){return d.bind(this)}}}var g,h=function(){function a(b,c,d,e){_classCallCheck(this,a),this.templateElement=document.getElementById(b),this.hostElement=document.getElementById(c);var f=document.importNode(this.templateElement.content,!0);this.element=f.firstElementChild,e&&(this.element.id=e),this.attach(d)}return _createClass(a,[{key:"attach",value:function(a){this.hostElement.insertAdjacentElement(a?"afterbegin":"beforeend",this.element)}}]),a}();!function(a){a[a.Active=0]="Active",a[a.Finished=1]="Finished"}(g||(g={}));var j=_createClass(function f(a,b,c,d,e){_classCallCheck(this,f),this.id=a,this.title=b,this.description=c,this.people=d,this.status=e}),e=function(){function a(){_classCallCheck(this,a),this.listeners=[]}return _createClass(a,[{key:"addListener",value:function(a){this.listeners.push(a)}}]),a}(),i=function(a){function b(){var a;return _classCallCheck(this,b),a=c.call(this),a.projects=[],a}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"addProject",value:function(a,b,c){var d=new j(Math.random().toString(),a,b,c,g.Active);this.projects.push(d),this.updateListeners()}},{key:"moveProject",value:function(a,b){var c=this.projects.find(function(b){return b.id===a});c&&c.status!==b&&(c.status=b,this.updateListeners())}},{key:"updateListeners",value:function(){var a,b=_createForOfIteratorHelper(this.listeners);try{for(b.s();!(a=b.n()).done;){var c=a.value;c(this.projects.slice())}}catch(a){b.e(a)}finally{b.f()}}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new b),this.instance}}]),b}(e),k=i.getInstance(),l=function(c){function d(){var b;return _classCallCheck(this,d),b=a.call(this,"project-input","app",!0,"user-input"),b.titleInputElement=b.element.querySelector("#title"),b.descriptionInputElement=b.element.querySelector("#description"),b.peopleInputElement=b.element.querySelector("#people"),b.configure(),b}_inherits(d,c);var a=_createSuper(d);return _createClass(d,[{key:"configure",value:function(){this.element.addEventListener("submit",this.submitHandler)}},{key:"renderContent",value:function(){}},{key:"gatherUserInput",value:function(){var a=this.titleInputElement.value,c=this.descriptionInputElement.value,d=this.peopleInputElement.value;return b({value:a,required:!0})&&b({value:c,required:!0,minLength:5})&&b({value:+d,required:!0,min:1,max:10})?[a,c,+d]:void alert("Invalid input, please try again!")}},{key:"clearInputs",value:function(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.peopleInputElement.value=""}},{key:"submitHandler",value:function(a){a.preventDefault();var b=this.gatherUserInput();if(Array.isArray(b)){var c=_slicedToArray(b,3),d=c[0],e=c[1],f=c[2];k.addProject(d,e,f),this.clearInputs()}}}]),d}(h);!function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;0<=h;h--)(e=a[h])&&(g=(3>f?e(g):3<f?e(b,c,g):e(b,c))||g);3<f&&g&&Object.defineProperty(b,c,g)}([f],l.prototype,"submitHandler",null);var a=function(a){function b(a,d){var e;return _classCallCheck(this,b),e=c.call(this,"single-project",a,!1,d.id),e.project=d,e.configure(),e.renderContent(),e}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"persons",get:function(){return 1===this.project.people?"1 person":"".concat(this.project.people," persons")}},{key:"dragStartHandler",value:function(a){a.dataTransfer.setData("text/plain",this.project.id),a.dataTransfer.effectAllowed="move"}},{key:"dragEndHandler",value:function(){}},{key:"configure",value:function(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)}},{key:"renderContent",value:function(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.persons+" assigned",this.element.querySelector("p").textContent=this.project.description}}]),b}(h);!function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;0<=h;h--)(e=a[h])&&(g=(3>f?e(g):3<f?e(b,c,g):e(b,c))||g);3<f&&g&&Object.defineProperty(b,c,g)}([f],a.prototype,"dragStartHandler",null);var c=function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;0<=h;h--)(e=a[h])&&(g=(3>f?e(g):3<f?e(b,c,g):e(b,c))||g);return 3<f&&g&&Object.defineProperty(b,c,g),g},d=function(b){function c(a){var b;return _classCallCheck(this,c),b=d.call(this,"project-list","app",!1,"".concat(a,"-projects")),b.type=a,b.assignedProjects=[],b.configure(),b.renderContent(),b}_inherits(c,b);var d=_createSuper(c);return _createClass(c,[{key:"dragOverHandler",value:function(a){a.dataTransfer&&"text/plain"===a.dataTransfer.types[0]&&(a.preventDefault(),this.element.querySelector("ul").classList.add("droppable"))}},{key:"dropHandler",value:function(a){var b=a.dataTransfer.getData("text/plain");k.moveProject(b,"active"===this.type?g.Active:g.Finished)}},{key:"dragLeaveHandler",value:function(){this.element.querySelector("ul").classList.remove("droppable")}},{key:"configure",value:function(){var a=this;this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),this.element.addEventListener("drop",this.dropHandler),k.addListener(function(b){var c=b.filter(function(b){return"active"===a.type?b.status===g.Active:b.status===g.Finished});a.assignedProjects=c,a.renderProjects()})}},{key:"renderContent",value:function(){var a="".concat(this.type,"-projects-list");this.element.querySelector("ul").id=a,this.element.querySelector("h2").textContent=this.type.toUpperCase()+" PROJECTS"}},{key:"renderProjects",value:function(){document.getElementById("".concat(this.type,"-projects-list")).innerHTML="";var b,c=_createForOfIteratorHelper(this.assignedProjects);try{for(c.s();!(b=c.n()).done;){var d=b.value;new a(this.element.querySelector("ul").id,d)}}catch(a){c.e(a)}finally{c.f()}}}]),c}(h);c([f],d.prototype,"dragOverHandler",null),c([f],d.prototype,"dropHandler",null),c([f],d.prototype,"dragLeaveHandler",null),new l,new d("active"),new d("finished")})();