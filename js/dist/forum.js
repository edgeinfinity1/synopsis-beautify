/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/common/extend.ts":
/*!******************************!*\
  !*** ./src/common/extend.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_tags_common_models_Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/tags/common/models/Tag */ "flarum/tags/common/models/Tag");
/* harmony import */ var flarum_tags_common_models_Tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_common_models_Tag__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Model)((flarum_tags_common_models_Tag__WEBPACK_IMPORTED_MODULE_1___default())) //
.attribute('richExcerpts').attribute('excerptLength')]);

/***/ }),

/***/ "./src/forum/addSummaryExcerpt.tsx":
/*!*****************************************!*\
  !*** ./src/forum/addSummaryExcerpt.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSummaryExcerpt)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/states/DiscussionListState */ "flarum/forum/states/DiscussionListState");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/DiscussionListItem */ "flarum/forum/components/DiscussionListItem");
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Excerpt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Excerpt */ "./src/forum/components/Excerpt.tsx");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }





function addSummaryExcerpt() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'requestParams', function (params) {
    if (typeof params.include === 'string') {
      params.include = [params.include];
    } else {
      params.include = params.include || [];
    }
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('synopsis.excerpt_type') === 'first') {
      params.include.push('firstPost');
    } else {
      params.include.push('lastPost');
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'infoItems', function (items) {
    var _app$session$user$pre, _tag, _tag2, _tag3, _tag4, _app$session$user$pre2;
    // Skip if we are searching to preserve most relevant post content as excerpt,
    // that way we also preserve highlighting of search terms in the most relevant post.
    // @ts-expect-error
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('synopsis.disable_when_searching') && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().discussions).params.q) return;
    var discussion = this.attrs.discussion;
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user && !((_app$session$user$pre = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.preferences()) != null && _app$session$user$pre.showSynopsisExcerpts)) {
      return;
    }
    var tags = discussion.tags();
    var tag;
    var disableSyno = false;
    if (tags) {
      for (var _iterator = _createForOfIteratorHelperLoose(tags), _step; !(_step = _iterator()).done;) {
        var tagTemp = _step.value;
        if ((tagTemp == null ? void 0 : tagTemp.excerptLength()) === 0) {
          disableSyno = true;
        }
      }
      tag = tags[tags.length - 1];
    }
    var excerptPost = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('synopsis.excerpt_type') === 'first' ? discussion.firstPost() : discussion.lastPost();
    var excerptLength = typeof ((_tag = tag) == null ? void 0 : _tag.excerptLength()) === 'number' ? (_tag2 = tag) == null ? void 0 : _tag2.excerptLength() : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('synopsis.excerpt_length');
    var richExcerpt = typeof ((_tag3 = tag) == null ? void 0 : _tag3.richExcerpts()) === 'number' ? (_tag4 = tag) == null ? void 0 : _tag4.richExcerpts() : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('synopsis.rich_excerpts');
    var onMobile = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user ? (_app$session$user$pre2 = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.preferences()) == null ? void 0 : _app$session$user$pre2.showSynopsisExcerptsOnMobile : false;

    // A length of zero means we don't want a synopsis for this discussion, so do nothing.
    if (excerptLength === 0 || disableSyno) {
      return;
    }
    if (excerptPost) {
      var excerpt = m(_components_Excerpt__WEBPACK_IMPORTED_MODULE_4__["default"], {
        post: excerptPost,
        length: excerptLength,
        richExcerpt: richExcerpt
      });
      items.add('excerpt', excerpt, -100);
      onMobile && items.add('excerptM', excerpt, -100);
    }
  });
}

/***/ }),

/***/ "./src/forum/addUserPreference.ts":
/*!****************************************!*\
  !*** ./src/forum/addUserPreference.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/SettingsPage */ "flarum/forum/components/SettingsPage");
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/FieldSet */ "flarum/common/components/FieldSet");
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oninit', function () {
    var _this$user, _this$user2;
    this.showSynopsisExcerpts = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()((_this$user = this.user) == null || (_this$user = _this$user.preferences()) == null ? void 0 : _this$user.showSynopsisExcerpts);
    this.showSynopsisExcerptsOnMobile = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()((_this$user2 = this.user) == null || (_this$user2 = _this$user2.preferences()) == null ? void 0 : _this$user2.showSynopsisExcerptsOnMobile);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'settingsItems', function (items) {
    items.add('synopsis', flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default().component({
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-synopsis.forum.user.settings.summaries-heading'),
      className: 'Settings-Synopsis'
    }, this.summariesItems().toArray()));
  });
  (flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default().prototype)['summariesItems'] = function () {
    var _this = this;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    if (!this.user) return items;
    var prefs = this.user.preferences();
    items.add('synopsis-excerpts', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default().component({
      state: prefs == null ? void 0 : prefs.showSynopsisExcerpts,
      onchange: function onchange(value) {
        var _this$user3;
        _this.showSynopsisExcerptsLoading = true;
        (_this$user3 = _this.user) == null || _this$user3.savePreferences({
          showSynopsisExcerpts: value
        }).then(function () {
          _this.showSynopsisExcerptsLoading = false;
          m.redraw();
        });
      },
      loading: this.showSynopsisExcerptsLoading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-synopsis.forum.user.settings.show-summaries')));
    if (prefs != null && prefs.showSynopsisExcerpts) {
      items.add('synopsis-excerpts-mobile', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default().component({
        state: prefs == null ? void 0 : prefs.showSynopsisExcerptsOnMobile,
        disabled: !(prefs != null && prefs.showSynopsisExcerpts),
        onchange: function onchange(value) {
          var _this$user4;
          _this.showSynopsisExcerptsOnMobileLoading = true;
          (_this$user4 = _this.user) == null || _this$user4.savePreferences({
            showSynopsisExcerptsOnMobile: value
          }).then(function () {
            _this.showSynopsisExcerptsOnMobileLoading = false;
            window.location.reload();
          });
        },
        loading: this.showSynopsisExcerptsOnMobileLoading
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-synopsis.forum.user.settings.show-summaries-mobile')));
    }
    return items;
  };
}

/***/ }),

/***/ "./src/forum/components/Excerpt.tsx":
/*!******************************************!*\
  !*** ./src/forum/components/Excerpt.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Excerpt)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/string */ "flarum/common/utils/string");
/* harmony import */ var flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_truncateHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/truncateHtml */ "./src/forum/utils/truncateHtml.ts");

function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var Excerpt = /*#__PURE__*/function (_Component) {
  function Excerpt() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.post = void 0;
    _this.length = void 0;
    _this.richExcerpt = void 0;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Excerpt, _Component);
  var _proto = Excerpt.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.post = this.attrs.post;
    this.length = this.attrs.length;
    this.richExcerpt = this.attrs.richExcerpt;
  };
  _proto.beautifyContent = function beautifyContent() {
    function containsOnlySpecificChild(parent, childSelector) {
      var children = parent.childNodes;
      var elementCount = 0;
      var foundElement = null;
      if (!childSelector) {
        if (!["p", "h1", "h2", "h3", "h4", "h5", "h6"].includes(parent.tagName.toLowerCase())) {
          return false;
        } else {
          return children.length ? false : true;
        }
      }
      for (var i = 0; i < children.length; i++) {
        var node = children[i];
        if (node.nodeType === Node.ELEMENT_NODE) {
          elementCount++;
          if (elementCount > 1 || !node.matches(childSelector)) {
            return false;
          }
          foundElement = node;
        } else if (node.nodeType === Node.TEXT_NODE && (node.textContent || '').trim() !== '') {
          return false;
        } else if (node.nodeType !== Node.TEXT_NODE) {
          return false;
        }
      }
      return elementCount === 1 && foundElement !== null;
    }
    function removeFirstChildBR(element) {
      var children = element.childNodes;
      for (var i = 0; i < children.length; i++) {
        var node = children[i];
        if (node.nodeType === 8) continue;
        if (node.nodeType === 3) {
          if (!((node.textContent || '').trim() in [''])) return;
        } else if (node.nodeType === 1) {
          if (node.tagName.toLowerCase() == 'img') continue;else if (node.tagName.toLowerCase() == 'br') {
            element.removeChild(node);
          } else return;
        }
      }
      return;
    }
    var htmlContent = '';
    var finalHtmlContent = '';
    if (this.richExcerpt) {
      var _this$contentRich;
      htmlContent = (0,_utils_truncateHtml__WEBPACK_IMPORTED_MODULE_3__["default"])((_this$contentRich = this.contentRich()) != null ? _this$contentRich : '', this.length);
      var parser = new DOMParser();
      var doc = parser.parseFromString(htmlContent, "text/html");
      var oneSynopsis = doc.body;
      var richContext = null;
      var directChildren = oneSynopsis.children;
      if (directChildren.length == 1 && directChildren[0].children.length) {
        richContext = false;
      } else {
        // poor context still breaks element when specials appear, like img
        // get that out
        for (var i = 0; i < directChildren.length - 1; i++) {
          var directChildNotLast = directChildren[i];
          if (directChildNotLast.children.length == 0) {
            richContext = true;
            break;
          }
        }
      }
      if (richContext) {
        var imgCount = 0;
        var nonImgCount = 0;
        var pending = [];
        var pending2 = [];
        for (var _iterator = _createForOfIteratorHelperLoose(directChildren), _step; !(_step = _iterator()).done;) {
          var directChild = _step.value;
          if (containsOnlySpecificChild(directChild, "img")) {
            // so this is a pure picture child
            imgCount += 1;
            if (imgCount >= 4) {
              directChild.style.setProperty("display", "none");
            }
            pending.push(directChild);
          } else if (directChild.tagName.toLowerCase() == "img") {
            imgCount += 1;
            if (imgCount >= 4) {
              directChild.style.setProperty("display", "none");
            }
            pending2.push(directChild);
          } else {
            nonImgCount += 1;
            if (nonImgCount >= 4) {
              directChild.style.setProperty("display", "none");
            }
          }
        }
        for (var _i = 0, _pending = pending; _i < _pending.length; _i++) {
          var pend = _pending[_i];
          oneSynopsis.appendChild(pend);
        }
        for (var _i2 = 0, _pending2 = pending2; _i2 < _pending2.length; _i2++) {
          var pend2 = _pending2[_i2];
          var imgWrapper = document.createElement("p");
          imgWrapper.appendChild(pend2);
          oneSynopsis.appendChild(imgWrapper);
        }
      } else {
        // ensured poor context
        var _imgCount = 0;
        var _nonImgCount = 0;
        var imgSets = [];
        for (var _iterator2 = _createForOfIteratorHelperLoose(directChildren), _step2; !(_step2 = _iterator2()).done;) {
          var _directChild = _step2.value;
          imgSets = imgSets.concat(_directChild.querySelectorAll("img"));
          var brSet = _directChild.querySelectorAll("br");
          for (var _i4 = 2; _i4 < brSet.length; _i4++) {
            var removeBr = brSet[_i4];
            removeBr.remove();
          }
          removeFirstChildBR(_directChild);
        }
        for (var _iterator3 = _createForOfIteratorHelperLoose(imgSets), _step3; !(_step3 = _iterator3()).done;) {
          var imgs = _step3.value;
          for (var _iterator5 = _createForOfIteratorHelperLoose(imgs), _step5; !(_step5 = _iterator5()).done;) {
            var img = _step5.value;
            _imgCount += 1;
            if (_imgCount >= 4) {
              img.style.setProperty("display", "none");
            }
            var _imgWrapper = document.createElement("p");
            _imgWrapper.appendChild(img);
            oneSynopsis.appendChild(_imgWrapper);
          }
        }
        _nonImgCount = directChildren.length - _imgCount;
        for (var _i3 = 3; _i3 < _nonImgCount; _i3++) {
          var nonDispChild = directChildren[_i3];
          nonDispChild.style.setProperty("display", "none");
        }
        var clearEmpty = oneSynopsis.querySelectorAll("*");
        for (var _iterator4 = _createForOfIteratorHelperLoose(clearEmpty), _step4; !(_step4 = _iterator4()).done;) {
          var ifEmpty = _step4.value;
          if (containsOnlySpecificChild(ifEmpty, "")) {
            ifEmpty.remove();
          }
        }
      }
      //console.log(oneSynopsis);
      finalHtmlContent = oneSynopsis.innerHTML;
    } else {
      var _this$contentPlain;
      htmlContent = (0,flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_2__.truncate)((_this$contentPlain = this.contentPlain()) != null ? _this$contentPlain : '', this.length);
      finalHtmlContent = htmlContent;
    }
    return finalHtmlContent;
  };
  _proto.view = function view() {
    return m("div", {
      className: "Synopsis-excerpt"
    }, this.getContent());
  };
  _proto.getContent = function getContent() {
    var _this$contentPlain2;
    if (this.richExcerpt) {
      return m.trust(this.beautifyContent());
    }
    return (0,flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_2__.truncate)((_this$contentPlain2 = this.contentPlain()) != null ? _this$contentPlain2 : '', this.length);
  };
  _proto.contentRich = function contentRich() {
    return this.post.contentHtml();
  };
  _proto.contentPlain = function contentPlain() {
    return this.post.contentPlain();
  };
  return Excerpt;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/index.ts":
/*!***************************************!*\
  !*** ./src/forum/components/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _Excerpt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Excerpt */ "./src/forum/components/Excerpt.tsx");

var components = {
  Excerpt: _Excerpt__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/forum/extend.ts":
/*!*****************************!*\
  !*** ./src/forum/extend.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/extend */ "./src/common/extend.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([].concat(_common_extend__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__.components),
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   utils: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.utils)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addSummaryExcerpt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addSummaryExcerpt */ "./src/forum/addSummaryExcerpt.tsx");
/* harmony import */ var _addUserPreference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addUserPreference */ "./src/forum/addUserPreference.ts");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extend */ "./src/forum/extend.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/forum/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/forum/utils/index.ts");






flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('fof-synopsis', function () {
  (0,_addSummaryExcerpt__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_addUserPreference__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/forum/utils/index.ts":
/*!**********************************!*\
  !*** ./src/forum/utils/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   utils: () => (/* binding */ utils)
/* harmony export */ });
/* harmony import */ var _truncateHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncateHtml */ "./src/forum/utils/truncateHtml.ts");

var utils = {
  truncateHtml: _truncateHtml__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/forum/utils/truncateHtml.ts":
/*!*****************************************!*\
  !*** ./src/forum/utils/truncateHtml.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Safely truncate an HTML string without breaking opening/closing tags
 * Only characters in text nodes count towards the length
 * @param html
 * @param length
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(html, length) {
  var parser = new DOMParser().parseFromString(html, 'text/html');

  // Safe HTML truncation
  // Loop through every node and shorten text nodes once the length is reached
  // After reaching the limit, start deleting other children we come across
  var _truncateNode = function truncateNode(node) {
    if (length === 0) {
      node.parentNode.removeChild(node);
      return;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.length < length) {
        length -= node.textContent.length;
      } else {
        node.textContent = node.textContent.substring(0, length) + '...';
        length = 0;
      }
      return;
    }

    // Need to create copy of the node list otherwise the loop gets messed up when a node is deleted
    Array.from(node.childNodes).forEach(_truncateNode);
  };
  _truncateNode(parser.body);
  return parser.body.innerHTML;
}

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/FieldSet":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/FieldSet']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/FieldSet'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/extenders":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/extenders']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extenders'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/string":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/string']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/string'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionListItem":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionListItem']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionListItem'];

/***/ }),

/***/ "flarum/forum/components/SettingsPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SettingsPage']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SettingsPage'];

/***/ }),

/***/ "flarum/forum/states/DiscussionListState":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/states/DiscussionListState']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/states/DiscussionListState'];

/***/ }),

/***/ "flarum/tags/common/models/Tag":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['tags/common/models/Tag']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['tags/common/models/Tag'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.components),
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.extend),
/* harmony export */   utils: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.utils)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map