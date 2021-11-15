/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://react/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://react/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_global_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.global.less */ \"./src/main.global.less\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\n/* harmony import */ var _shared_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\n/* harmony import */ var _shared_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\n/* harmony import */ var _shared_CardsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\n/* harmony import */ var _shared_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\n\n\n\n\n\n\n\n // import {GenericList, MyList} from \"./shared/GenericList\";\n// import {GenericList} from \"./shared/GenericList\";\n// import {generateId, generateRandomString} from \"./utils/react/generateRandomIndex\";\n// import {merge} from \"./utils/js/merge\";\n// import {getValue} from \"./utils/react/pickFromSyntheticEvent\";\n// import {MyHooks, useIsMounted} from \"./HooksExample\";\n// import {MyHooks} from \"./HooksExample\";\n// const LIST = [\n// {value:'some'},\n// {value:'other some'},\n// {value:'some'},\n// {text:'some'},\n// {text:'other some'},\n// {text:'some'},\n// {As:'li' as const, text:'some'},\n// {As:'li' as const, text:'other some'},\n// {As:'li' as const, text:'some'},\n// {As:'a' as const, text:'some'},\n// {As:'a' as const, text:'other some'},\n// {As:'a' as const, text:'some'},\n// ].map((item)=>({ ...item, id: generateRandomString()}))\n// ].map(generateId)\n\nfunction AppComponent() {\n  // const [isVisible, setIsVisible] = React.useState(true)\n  // const [title, setTitle] = React.useState('')\n  // const [isVisible] = useIsMounted()\n  // const [list, setList] = React.useState(LIST)\n  // const handleItemClick = (id: string)=>{\n  // console.log(id)\n  // setList(list.filter((item)=> item.id !== id))\n  // }\n  // const handleAdd = ()=>{\n  // setList(list.concat(generateId({value: generateRandomString()})))\n  // setList(list.concat(generateId({text: generateRandomString()})))\n  // setList(list.concat(generateId({text: generateRandomString(), As:'li' as const})))\n  // setList(list.concat(generateId({text: generateRandomString(), As:'a' as const})))\n  // }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Header_Header__WEBPACK_IMPORTED_MODULE_4__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Content__WEBPACK_IMPORTED_MODULE_5__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_CardsList__WEBPACK_IMPORTED_MODULE_6__.CardsList, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      padding: 20\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {\n    onClose: function onClose() {\n      return console.log('closed');\n    },\n    onOpen: function onOpen() {\n      return console.log('opened');\n    },\n    isOpen: false,\n    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, \"Test\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_CardsList__WEBPACK_IMPORTED_MODULE_6__.CardsList, null)))));\n}\n\nvar App = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__.hot)(function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppComponent, null);\n});\n\n//# sourceURL=webpack://react/./src/App.tsx?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indexTemplate\": () => (/* binding */ indexTemplate)\n/* harmony export */ });\nvar indexTemplate = function indexTemplate(content) {\n  return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <title>Reddit to string</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n<body>\\n<div id=\\\"react-root\\\">\".concat(content, \"</div>\\n</body>\\n</html>\\n\");\n};\n\n//# sourceURL=webpack://react/./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _indexTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n // const express = require('express');\n\n // import {Header} from '../shared/Header'\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('./dist/client'));\napp.get('/', function (req, res) {\n  res.send( // indexTemplate(ReactDOM.renderToNodeStream(Header()))\n  (0,_indexTemplate__WEBPACK_IMPORTED_MODULE_2__.indexTemplate)(react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToNodeStream((0,_App__WEBPACK_IMPORTED_MODULE_3__.App)())));\n});\napp.listen(3000, function () {\n  console.log('Server started on http://localhost:3000');\n});\n\n//# sourceURL=webpack://react/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.less */ \"./src/shared/CardsList/Card/card.less\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\n\n\n\nfunction Card() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].textContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].metaData\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userLink\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://randomuser.me/api/portraits/thumb/men/75.jpg\",\n    alt: \"avatar\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"#user-url\",\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].username\n  }, \"Max Power\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createdAt\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publishedLabel\n  }, \"Published\"), \" 4 hours ago\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"#post-url\",\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].postLink\n  }, \"Need to mention, that the new model organisation the best organisation that I saw\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].preview\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://images.unsplash.com/photo-1525447153550-9b38670d8fcc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60\",\n    alt: \"\",\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].previewImg\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__.Menu, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].controls\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].karmaCounter\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].up\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"19\",\n    height: \"10\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 19 10\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M9.5 0L0 10H19L9.5 02\",\n    fill: \"#c4c4c4\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].karmaValue\n  }, \"234\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].down\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].down,\n    width: \"19\",\n    height: \"10\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 19 10\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M9.5 0L0 10H19L9.5 02\",\n    fill: \"#c4c4c4\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commentsButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"15\",\n    height: \"15\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 15 15\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commentsNumber\n  }, \"13\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].actions\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shareButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"20\",\n    height: \"20\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _card_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"20\",\n    height: \"20\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"10\",\n    cy: \"10\",\n    r: \"10\",\n    fill: \"#c4c4c4\"\n  }))))));\n}\n\n//# sourceURL=webpack://react/./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.less */ \"./src/shared/CardsList/Card/Menu/menu.less\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\n/* harmony import */ var _MenuItemsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts\");\n\n\n\n\n\nfunction Menu() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _menu_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].menu\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {\n    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      className: _menu_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].menuButton\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.MenuIcon, null))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _menu_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dropdown\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItemsList__WEBPACK_IMPORTED_MODULE_4__.MenuItemsList, {\n    postId: \"1234\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _menu_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeButton\n  }, \"Close\"))));\n}\n\n//# sourceURL=webpack://react/./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuItemsList\": () => (/* binding */ MenuItemsList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menuitemslist_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuitemslist.less */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.less\");\n\n\nfunction MenuItemsList(_ref) {\n  var postId = _ref.postId;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: _menuitemslist_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].menuItemList\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: _menuitemslist_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].menuItem,\n    onClick: function onClick() {\n      return console.log(postId);\n    }\n  }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _menuitemslist_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].divider\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: _menuitemslist_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].menuItem,\n    onClick: function onClick() {\n      return console.log(postId);\n    }\n  }, \"Compliant\"));\n}\n\n//# sourceURL=webpack://react/./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuItemsList\": () => (/* reexport safe */ _MenuItemsList__WEBPACK_IMPORTED_MODULE_0__.MenuItemsList)\n/* harmony export */ });\n/* harmony import */ var _MenuItemsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx\");\n\n\n//# sourceURL=webpack://react/./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_0__.Menu)\n/* harmony export */ });\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\");\n\n\n//# sourceURL=webpack://react/./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__.Card)\n/* harmony export */ });\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\");\n\n\n//# sourceURL=webpack://react/./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsList\": () => (/* binding */ CardsList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardslist_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardslist.less */ \"./src/shared/CardsList/cardslist.less\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\n\n\n\nfunction CardsList() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: _cardslist_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cardsList\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.Card, null));\n}\n\n//# sourceURL=webpack://react/./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsList\": () => (/* reexport safe */ _CardsList__WEBPACK_IMPORTED_MODULE_0__.CardsList)\n/* harmony export */ });\n/* harmony import */ var _CardsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\n\n\n//# sourceURL=webpack://react/./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.less */ \"./src/shared/Content/content.less\");\n\n\nfunction Content(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", {\n    className: _content_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].content\n  }, children);\n}\n\n//# sourceURL=webpack://react/./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => (/* reexport safe */ _Content__WEBPACK_IMPORTED_MODULE_0__.Content)\n/* harmony export */ });\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\");\n\n\n//# sourceURL=webpack://react/./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dropdown\": () => (/* binding */ Dropdown)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dropdown_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.less */ \"./src/shared/Dropdown/dropdown.less\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar NOOP = function NOOP() {};\n\nfunction Dropdown(_ref) {\n  var button = _ref.button,\n      children = _ref.children,\n      isOpen = _ref.isOpen,\n      _ref$onOpen = _ref.onOpen,\n      onOpen = _ref$onOpen === void 0 ? NOOP : _ref$onOpen,\n      _ref$onClose = _ref.onClose,\n      onClose = _ref$onClose === void 0 ? NOOP : _ref$onClose;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(isOpen),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      isDropdownOpen = _React$useState2[0],\n      setIsDropdownOpen = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    return setIsDropdownOpen(isOpen);\n  }, [isOpen]);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    return isDropdownOpen ? onOpen() : onClose();\n  }, [isDropdownOpen]);\n\n  var handleOpen = function handleOpen() {\n    if (isOpen === undefined) {\n      setIsDropdownOpen(!isDropdownOpen);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _dropdown_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: handleOpen\n  }, button), isDropdownOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _dropdown_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _dropdown_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list,\n    onClick: function onClick() {\n      return setIsDropdownOpen(false);\n    }\n  }, children)));\n}\n\n//# sourceURL=webpack://react/./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dropdown\": () => (/* reexport safe */ _Dropdown__WEBPACK_IMPORTED_MODULE_0__.Dropdown)\n/* harmony export */ });\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\");\n\n\n//# sourceURL=webpack://react/./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.less */ \"./src/shared/Header/header.less\");\n/* harmony import */ var _SearchBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\n/* harmony import */ var _ThreadTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\n/* harmony import */ var _SortBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\n\n\n\n\n\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", {\n    className: _header_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SearchBlock__WEBPACK_IMPORTED_MODULE_2__.SearchBlock, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThreadTitle__WEBPACK_IMPORTED_MODULE_3__.ThreadTitle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SortBlock__WEBPACK_IMPORTED_MODULE_4__.SortBlock, null));\n}\n\n//# sourceURL=webpack://react/./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchBlock\": () => (/* binding */ SearchBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _searchblock_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchblock.less */ \"./src/shared/Header/SearchBlock/searchblock.less\");\n\n\nfunction SearchBlock() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _searchblock_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].searchBlock\n  }, \"search block\");\n}\n\n//# sourceURL=webpack://react/./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchBlock\": () => (/* reexport safe */ _SearchBlock__WEBPACK_IMPORTED_MODULE_0__.SearchBlock)\n/* harmony export */ });\n/* harmony import */ var _SearchBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\n\n\n//# sourceURL=webpack://react/./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SortBlock\": () => (/* binding */ SortBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sortblock_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortblock.less */ \"./src/shared/Header/SortBlock/sortblock.less\");\n\n\nfunction SortBlock() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _sortblock_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sortBlock\n  }, \"sorting dropdown\");\n}\n\n//# sourceURL=webpack://react/./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SortBlock\": () => (/* reexport safe */ _SortBlock__WEBPACK_IMPORTED_MODULE_0__.SortBlock)\n/* harmony export */ });\n/* harmony import */ var _SortBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\n\n\n//# sourceURL=webpack://react/./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThreadTitle\": () => (/* binding */ ThreadTitle)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _threadtitle_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./threadtitle.less */ \"./src/shared/Header/ThreadTitle/threadtitle.less\");\n\n\nfunction ThreadTitle() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: _threadtitle_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].threadTitle\n  }, \"Header\");\n}\n\n//# sourceURL=webpack://react/./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThreadTitle\": () => (/* reexport safe */ _ThreadTitle__WEBPACK_IMPORTED_MODULE_0__.ThreadTitle)\n/* harmony export */ });\n/* harmony import */ var _ThreadTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\");\n\n\n//# sourceURL=webpack://react/./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.less */ \"./src/shared/Layout/layout.less\");\n\n\nfunction Layout(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _layout_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].layout\n  }, children);\n}\n\n//# sourceURL=webpack://react/./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.Layout)\n/* harmony export */ });\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\");\n\n\n//# sourceURL=webpack://react/./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/BlockIcon.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlockIcon\": () => (/* binding */ BlockIcon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction BlockIcon() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"12\",\n    height: \"12\",\n    viewBox: \"0 0 12 12\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6\"\n  }));\n}\n\n//# sourceURL=webpack://react/./src/shared/icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/MenuIcon.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuIcon\": () => (/* binding */ MenuIcon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MenuIcon() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"5\",\n    height: \"20\",\n    viewBox: \"0 0 5 20\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"2.5\",\n    cy: \"2.5\",\n    r: \"2.5\",\n    fill: \"#D9D9D9\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"2.5\",\n    cy: \"10\",\n    r: \"2.5\",\n    fill: \"#D9D9D9\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"2.5\",\n    cy: \"17.5\",\n    r: \"2.5\",\n    fill: \"#D9D9D9\"\n  }));\n}\n\n//# sourceURL=webpack://react/./src/shared/icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/WarningIcon.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WarningIcon\": () => (/* binding */ WarningIcon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction WarningIcon() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"14\",\n    height: \"12\",\n    viewBox: \"0 0 14 12\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05\"\n  }));\n}\n\n//# sourceURL=webpack://react/./src/shared/icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuIcon\": () => (/* reexport safe */ _MenuIcon__WEBPACK_IMPORTED_MODULE_0__.MenuIcon),\n/* harmony export */   \"BlockIcon\": () => (/* reexport safe */ _BlockIcon__WEBPACK_IMPORTED_MODULE_1__.BlockIcon),\n/* harmony export */   \"WarningIcon\": () => (/* reexport safe */ _WarningIcon__WEBPACK_IMPORTED_MODULE_2__.WarningIcon)\n/* harmony export */ });\n/* harmony import */ var _MenuIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuIcon */ \"./src/shared/icons/MenuIcon.tsx\");\n/* harmony import */ var _BlockIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockIcon */ \"./src/shared/icons/BlockIcon.tsx\");\n/* harmony import */ var _WarningIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WarningIcon */ \"./src/shared/icons/WarningIcon.tsx\");\n\n\n\n\n//# sourceURL=webpack://react/./src/shared/icons/index.ts?");

/***/ }),

/***/ "./src/main.global.less":
/*!******************************!*\
  !*** ./src/main.global.less ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Roboto';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf) format('truetype');\\n}\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: hsl(0, 0%, calc(100% - 4%));\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', sans-serif;\\n}\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\na {\\n  text-decoration: none;\\n}\\nbutton {\\n  padding: 0;\\n  bottom: 0;\\n  background: transparent;\\n  cursor: pointer;\\n  border: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/main.global.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.less":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.less ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Roboto';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf) format('truetype');\\n}\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: hsl(0, 0%, calc(100% - 4%));\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', sans-serif;\\n}\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\na {\\n  text-decoration: none;\\n}\\nbutton {\\n  padding: 0;\\n  bottom: 0;\\n  background: transparent;\\n  cursor: pointer;\\n  border: 0;\\n}\\n.menuitemslist__menuItemList--d_sZO {\\n  padding: 0px 20px;\\n}\\n.menuitemslist__menuItem--_NgsB {\\n  padding: 12px 0;\\n  display: flex;\\n  flex-flow: row nowrap;\\n  align-items: center;\\n}\\n.menuitemslist__menuItem--_NgsB > svg + span {\\n  margin-left: 7px;\\n}\\n.menuitemslist__divider--FhBkw {\\n  height: 1px;\\n  width: 100%;\\n  background-color: hsl(0, 0%, calc(100% - 7%));\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"menuItemList\": \"menuitemslist__menuItemList--d_sZO\",\n\t\"menuItem\": \"menuitemslist__menuItem--_NgsB\",\n\t\"divider\": \"menuitemslist__divider--FhBkw\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.less":
/*!**************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.less ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Roboto';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf) format('truetype');\\n}\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: hsl(0, 0%, calc(100% - 4%));\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', sans-serif;\\n}\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\na {\\n  text-decoration: none;\\n}\\nbutton {\\n  padding: 0;\\n  bottom: 0;\\n  background: transparent;\\n  cursor: pointer;\\n  border: 0;\\n}\\n.menu__menu--CJz4v {\\n  position: absolute;\\n  top: 17px;\\n  right: 15px;\\n}\\n.menu__menuButton--rRrsL {\\n  width: 31px;\\n  height: 31px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transform: rotate(90deg);\\n  border-radius: 31px;\\n  background: transparent;\\n  border: 0;\\n}\\n.menu__menuButton--rRrsL:active,\\n.menu__menuButton--rRrsL:hover {\\n  background-color: rgba(51, 51, 51, 0.1);\\n}\\n.menu__dropdown--UnkMs {\\n  position: absolute;\\n  right: 0;\\n  top: 10px;\\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\\n  border-radius: 3px;\\n  background-color: hsl(0, 0%, 100%);\\n}\\n.menu__closeButton--DHtDF {\\n  background-color: hsl(0, 0%, calc(100% - 15%));\\n  padding: 12px 23px;\\n  border-radius: 0 0 3px 3px;\\n  width: 100%;\\n}\\n@media all and (max-width: 1024px) {\\n  .menu__menu--CJz4v {\\n    position: relative;\\n    order: 2;\\n    display: flex;\\n    align-items: center;\\n    flex: 0 0;\\n    top: unset;\\n  }\\n  .menu__menuButton--rRrsL {\\n    align-self: center;\\n    transform: unset;\\n  }\\n}\\n@media all and (min-width: 1540px) {\\n  .menu__menuButton--rRrsL:hover {\\n    background-color: rgba(51, 51, 51, 0.1);\\n  }\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"menu\": \"menu__menu--CJz4v\",\n\t\"menuButton\": \"menu__menuButton--rRrsL\",\n\t\"dropdown\": \"menu__dropdown--UnkMs\",\n\t\"closeButton\": \"menu__closeButton--DHtDF\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/CardsList/Card/Menu/menu.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.less":
/*!*********************************************!*\
  !*** ./src/shared/CardsList/Card/card.less ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Roboto';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf) format('truetype');\\n}\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: hsl(0, 0%, calc(100% - 4%));\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', sans-serif;\\n}\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\na {\\n  text-decoration: none;\\n}\\nbutton {\\n  padding: 0;\\n  bottom: 0;\\n  background: transparent;\\n  cursor: pointer;\\n  border: 0;\\n}\\n.card__card--sCc8V {\\n  background-color: hsl(0, 0%, 100%);\\n  border-radius: 7px;\\n  display: flex;\\n  flex-flow: row wrap;\\n  position: relative;\\n}\\n.card__card--sCc8V > * {\\n  flex: 1 1 100%;\\n}\\n.card__textContent--BvEEI {\\n  display: flex;\\n  flex-flow: row wrap;\\n  padding: 22px 20px 13px;\\n}\\n.card__metaData--Lqxod {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  align-items: center;\\n  font-size: 10px;\\n  line-height: 12px;\\n}\\n.card__userLink--zjSWb {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  align-items: center;\\n  height: 20px;\\n  padding: 0 6px 0 0;\\n}\\n.card__userLink--zjSWb img {\\n  border-radius: 50%;\\n  height: 25px;\\n  width: 25px;\\n}\\n.card__avatar--tLzk2 {\\n  border-radius: 20px;\\n  width: 20px;\\n  height: 20px;\\n  margin: 0 7px 0 0;\\n}\\n.card__username--qHfjQ {\\n  color: #cc6633;\\n}\\n.card__createAt--gFzkH,\\n.card__createAt--gFzkH * {\\n  color: hsl(0, 0%, calc(100% - 40%));\\n}\\n.card__title--srRBf {\\n  font-size: 16px;\\n  line-height: 19px;\\n  font-weight: normal;\\n  margin: 0;\\n  padding: 7px 0 0;\\n}\\n.card__postLink--M7SqM {\\n  overflow: hidden;\\n  -webkit-line-clamp: 2;\\n  -webkit-box-orient: vertical;\\n  display: -webkit-box;\\n}\\n.card__preview--jex5i {\\n  max-height: 178px;\\n}\\n.card__previewImg--agoJz {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n.card__menu--x6Cup {\\n  position: absolute;\\n  top: 17px;\\n  right: 15px;\\n}\\n.card__menuButton--fTUB1 {\\n  width: 31px;\\n  height: 31px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transform: rotate(90deg);\\n  border-radius: 31px;\\n  background: transparent;\\n  border: 0;\\n}\\n.card__menuButton--fTUB1:active,\\n.card__menuButton--fTUB1:hover {\\n  background-color: rgba(51, 51, 51, 0.1);\\n}\\n.card__controls--KJ_ai {\\n  padding: 10px 20px;\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-between;\\n}\\n.card__karmaCounter--AZXyF > * + * {\\n  padding: 0 0 0 4px;\\n}\\n.card__karmaValue--EiKEa {\\n  color: hsl(0, 0%, calc(100% - 23%));\\n}\\nsvg.card__down--GNKKY {\\n  transform: rotate(180deg);\\n}\\n.card__commentsButton--xA7Py {\\n  display: flex;\\n  align-items: normal;\\n}\\n.card__commentsButton--xA7Py * {\\n  color: hsl(0, 0%, calc(100% - 23%));\\n}\\n.card__commentsNumber--AiLhY {\\n  padding: 0 0 0 6px;\\n  font-size: 12px;\\n  line-height: 14px;\\n}\\n.card__shareButton--dvfG_ {\\n  width: 20px;\\n  height: 20px;\\n}\\n.card__saveButton--af9Pt {\\n  width: 20px;\\n  height: 20px;\\n}\\n@media all and (max-width: 1024px) {\\n  .card__menuButton--fTUB1 {\\n    align-self: center;\\n    transform: unset;\\n  }\\n  .card__controls--KJ_ai {\\n    order: 3;\\n    flex: 0 0;\\n    margin: 0 0 0 24px;\\n    padding: 0;\\n  }\\n  .card__karmaCounter--AZXyF {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-flow: column nowrap;\\n  }\\n  .card__karmaCounter--AZXyF > * + * {\\n    padding: 7px 0 0;\\n  }\\n  .card__karmaValue--EiKEa {\\n    font-size: 14px;\\n    line-height: 16px;\\n    color: #333333;\\n  }\\n  .card__commentsButton--xA7Py {\\n    display: none;\\n  }\\n  .card__actions--usso6 {\\n    display: none;\\n  }\\n}\\n@media all and (min-width: 1540px) {\\n  .card__card--sCc8V {\\n    padding: 0 60px;\\n  }\\n  .card__textContent--BvEEI {\\n    flex-basis: 672px;\\n  }\\n  .card__card--sCc8V:hover,\\n  .card__card--sCc8V:focus-within {\\n    outline: 1px solid hsl(0, 0%, calc(100% - 15%));\\n  }\\n  .card__userLink--zjSWb:hover a {\\n    text-decoration: underline;\\n  }\\n  .card__menuButton--fTUB1:hover {\\n    background-color: rgba(51, 51, 51, 0.1);\\n  }\\n  .card__karmaCounter--AZXyF > button.card__up--z9sg9:hover > svg > path {\\n    fill: #a4cc33;\\n  }\\n  .card__karmaCounter--AZXyF > button.card__down--GNKKY:hover > svg > path {\\n    fill: #cc6633;\\n  }\\n  .card__controls--KJ_ai {\\n    position: relative;\\n  }\\n  .card__postLink--M7SqM::after {\\n    content: '';\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 0;\\n  }\\n  .card__username--qHfjQ {\\n    position: relative;\\n    z-index: 1;\\n  }\\n  .card__card--sCc8V:hover h2 a,\\n  .card__card--sCc8V:focus-within h2 a {\\n    color: #cc6633;\\n  }\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"card\": \"card__card--sCc8V\",\n\t\"textContent\": \"card__textContent--BvEEI\",\n\t\"metaData\": \"card__metaData--Lqxod\",\n\t\"userLink\": \"card__userLink--zjSWb\",\n\t\"avatar\": \"card__avatar--tLzk2\",\n\t\"username\": \"card__username--qHfjQ\",\n\t\"createAt\": \"card__createAt--gFzkH\",\n\t\"title\": \"card__title--srRBf\",\n\t\"postLink\": \"card__postLink--M7SqM\",\n\t\"preview\": \"card__preview--jex5i\",\n\t\"previewImg\": \"card__previewImg--agoJz\",\n\t\"menu\": \"card__menu--x6Cup\",\n\t\"menuButton\": \"card__menuButton--fTUB1\",\n\t\"controls\": \"card__controls--KJ_ai\",\n\t\"karmaCounter\": \"card__karmaCounter--AZXyF\",\n\t\"karmaValue\": \"card__karmaValue--EiKEa\",\n\t\"down\": \"card__down--GNKKY\",\n\t\"commentsButton\": \"card__commentsButton--xA7Py\",\n\t\"commentsNumber\": \"card__commentsNumber--AiLhY\",\n\t\"shareButton\": \"card__shareButton--dvfG_\",\n\t\"saveButton\": \"card__saveButton--af9Pt\",\n\t\"actions\": \"card__actions--usso6\",\n\t\"up\": \"card__up--z9sg9\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/CardsList/Card/card.less?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.less":
/*!*********************************************!*\
  !*** ./src/shared/CardsList/cardslist.less ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media all and (min-width: 1024px) {\\n  .cardslist__cardsList--uOGES {\\n    padding: 40px 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"cardsList\": \"cardslist__cardsList--uOGES\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/CardsList/cardslist.less?");

/***/ }),

/***/ "./src/shared/Content/content.less":
/*!*****************************************!*\
  !*** ./src/shared/Content/content.less ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Roboto';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf) format('truetype');\\n}\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: hsl(0, 0%, calc(100% - 4%));\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', sans-serif;\\n}\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\na {\\n  text-decoration: none;\\n}\\nbutton {\\n  padding: 0;\\n  bottom: 0;\\n  background: transparent;\\n  cursor: pointer;\\n  border: 0;\\n}\\n.content__content--y3uQ6 {\\n  background-color: hsl(0, 0%, 100%);\\n  border-radius: 7px 7px 0 0;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"content\": \"content__content--y3uQ6\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/Content/content.less?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.less":
/*!*******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.less ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".dropdown__container--_SnRo {\\n  width: 100%;\\n  flex: 1 1 0%;\\n}\\n.dropdown__listContainer--jTCOy {\\n  position: relative;\\n}\\n.dropdown__list--KP9_P {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"dropdown__container--_SnRo\",\n\t\"listContainer\": \"dropdown__listContainer--jTCOy\",\n\t\"list\": \"dropdown__list--KP9_P\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/Dropdown/dropdown.less?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.less":
/*!********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.less ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Roboto';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf) format('truetype');\\n}\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: hsl(0, 0%, calc(100% - 4%));\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', sans-serif;\\n}\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\na {\\n  text-decoration: none;\\n}\\nbutton {\\n  padding: 0;\\n  bottom: 0;\\n  background: transparent;\\n  cursor: pointer;\\n  border: 0;\\n}\\n.searchblock__searchBlock--ahmUr {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 14px 20px;\\n  background-color: hsl(0, 0%, 100%);\\n  border-radius: 0 0 7px 7px;\\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\\n  margin: 0 0 38px;\\n}\\n@media all and (min-width: 1024px) {\\n  .searchblock__searchBlock--ahmUr {\\n    padding: 0;\\n    margin: 0 0 0 auto;\\n    background-color: transparent;\\n    border-radius: 0;\\n    box-shadow: none;\\n    order: 3;\\n  }\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"searchBlock\": \"searchblock__searchBlock--ahmUr\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/Header/SearchBlock/searchblock.less?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.less":
/*!****************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.less ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Roboto';\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf) format('truetype');\\n}\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: hsl(0, 0%, calc(100% - 4%));\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', sans-serif;\\n}\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\na {\\n  text-decoration: none;\\n}\\nbutton {\\n  padding: 0;\\n  bottom: 0;\\n  background: transparent;\\n  cursor: pointer;\\n  border: 0;\\n}\\n.sortblock__sortBlock--O2cf4 {\\n  background-color: hsl(0, 0%, 100%);\\n  padding: 11px 20px;\\n  border-radius: 7px;\\n  margin: 0 0 20px;\\n}\\n@media all and (min-width: 1024px) {\\n  .sortblock__sortBlock--O2cf4 {\\n    background-color: transparent;\\n    padding: 0;\\n    margin: 0;\\n    border-radius: 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"sortBlock\": \"sortblock__sortBlock--O2cf4\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/Header/SortBlock/sortblock.less?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.less":
/*!********************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.less ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".threadtitle__threadTitle--c98Au {\\n  font-weight: normal;\\n  padding: 0 20px;\\n  font-size: 20px;\\n  line-height: 23px;\\n  margin: 0 0 15px;\\n}\\n@media all and (min-width: 1024px) {\\n  .threadtitle__threadTitle--c98Au {\\n    padding: 0;\\n    margin: 0 27px 0 0;\\n    font-size: 28px;\\n    line-height: 33px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"threadTitle\": \"threadtitle__threadTitle--c98Au\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/Header/ThreadTitle/threadtitle.less?");

/***/ }),

/***/ "./src/shared/Header/header.less":
/*!***************************************!*\
  !*** ./src/shared/Header/header.less ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media all and (min-width: 1024px) {\\n  .header__header--PaK8P {\\n    display: flex;\\n    flex-flow: row nowrap;\\n    align-items: center;\\n    padding: 40px;\\n  }\\n}\\n@media all and (min-width: 1540px) {\\n  .header__header--PaK8P {\\n    padding: 67px 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"header__header--PaK8P\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/Header/header.less?");

/***/ }),

/***/ "./src/shared/Layout/layout.less":
/*!***************************************!*\
  !*** ./src/shared/Layout/layout.less ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".layout__layout--ISMd2 {\\n  max-width: 1400px;\\n  margin: 0 auto;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"layout\": \"layout__layout--ISMd2\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react/./src/shared/Layout/layout.less?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-hot-loader/root");

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
/******/ 			id: moduleId,
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;