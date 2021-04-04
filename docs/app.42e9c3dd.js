parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RRrM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dungeonMap=void 0;var W={1:"\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nW............WW............W\nW.WWWW.iWWWi.WW.iWWWi.WWWW.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW.WWWW.WWWWW.ii.WWWWW.WWWW.W\nW..........................W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW......WW....WW....WW......W\nW.iWWi.WWWWi.WW.iWWWW.iWWi.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW.WWWW.WW..........WW.WWWW.W\nW.WWWW.WW.iWWWWWWi.WW.WWWW.W\nW.iWWi.WW.WeeeeeeW.WW.iWWi.W\nW.........WeeSeeeW.........W\nW.WWWW.WW.WeeeeeeW.WW.WWWW.W\nW.WWWW.WW.WWieeiWW.WW.WWWW.W\nW.WWWW.WW..........WW.WWWW.W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW............WW............W\nW.iWWi.WWWWW.WW.WWWWW.iWWi.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW...WW................WW...W\nWWW.WW.WW.iWWWWWWi.WW.WW.WWW\nWWW.WW.WW.WWWWWWWW.WW.WW.WWW\nW......WW....WW....WW......W\nW.iWWWWWWWWW.WW.WWWWWWWWWi.W\nW.WWWWWWWWWW.WW.WWWWWWWWWW.W\nW..........................W\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n",2:"\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nW......WW....WW....WW......W\nW.iWWi.WW.Wi.WW.iW.WW.iWWi.W\nW.WWWW.WW.WW.WW.WW.WW.WWWW.W\nW.iWWi.WW.WW.ii.WW.WW.iWWi.W\nW......WW..........WW......W\nWWWWWW.WW.iWWWWWWi.WW.WWWWWW\nWWWWWW.WW.WWWWWWWW.WW.WWWWWW\nW......WW....WW....WW......W\nWWWWWi.WWWWi.WW.iWWWW.iWWWWW\nWWWWWi.WWWWW.WW.WWWWW.iWWWWW\nW......WW..........WW......W\nW.iWWi.WW.iWWeeWWi.WW.iWWi.W\nW.WWWW.WW.WeeeeeeW.WW.WWWW.W\nW.WWWW....eeeSeeee....WWWW.W\nW.WWWWWWi.WeeeeeeW.iWWWWWW.W\nW.iWWWWWW.WWieeiWW.WWWWWWi.W\nW......WW..........WW......W\nW.WWWW.WW.WWWWWWWW.WW.WWWWWW\nW.WWWW.WW.WWWWWWWW.WW.WWWWWW\nW............WW............W\nW.iWWi.WWWWW.WW.WWWWW.iWWi.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW...WW.......WW.......WW...W\nWWi.WWWWi.iWWWWWWi.iWWWW.iWW\nWWi.WWWWi.iWWWWWWi.iWWWW.iWW\nW............WW............W\nW.iWWWWWWWWi.WW.iWWWWWWWWi.W\nW.iWWWWWWWWi.WW.iWWWWWWWWi.W\nW............WW............W\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n",3:"\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\ni......ii....ii....ii......i\ni.iiii.ii.ii.ii.ii.ii.iiii.i\ni.iiii.ii.ii.ii.ii.ii.iiii.i\ni.iiii.ii.ii.ii.ii.ii.iiii.i\ni......ii..........ii......i\ni.iiiiiii.iiiiiiii.iiiiiii.i\ni.iiiiiii.iiiiiiii.iiiiiii.i\ni......ii....ii....ii......i\niiiiii.iiiii.ii.iiiii.iiiiii\niiiiii.iiiii.ii.iiiii.iiiiii\ni......ii....ii....ii......i\ni.iiii.ii.iiiiiiii.ii.iiii.i\ni.iiii.ii.ieeeeeei.ii.iiii.i\ni......ii.eeeSeeee.ii......i\ni.iiiiiii.ieeeeeei.iiiiiii.i\ni.iiiiiii.iiiiiiii.iiiiiii.i\ni......ii....ii....ii......i\ni.iiii.ii.iiiiiiii.ii.iiiiii\ni.iiii.ii.iiiiiiii.ii.iiiiii\ni............ii............i\ni.iiii.iiiii.ii.iiiii.iiii.i\ni.iiii.iiiii.ii.iiiii.iiii.i\ni...ii.......ii.......ii...i\niii.iiiii.iiiiiiii.iiiii.iii\niii.iiiii.iiiiiiii.iiiii.iii\ni............ii............i\ni.iiiiiiiiii.ii.iiiiiiiiii.i\ni.iiiiiiiiii.ii.iiiiiiiiii.i\ni............ii............i\niiiiiiiiiiiiiiiiiiiiiiiiiiii\n"};exports.dungeonMap=W;
},{}],"patA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.myGameMaster=void 0;var e=require("../../public/assets/maps/dungeonMaps");function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}var i={1:{heroSpeed:50,heroNumber:4,myDungeonMap:e.dungeonMap[1],viewField:250},2:{heroSpeed:70,heroNumber:6,myDungeonMap:e.dungeonMap[2],viewField:200},3:{heroSpeed:80,heroNumber:8,myDungeonMap:e.dungeonMap[3],viewField:150}},o=function(){function e(){return n(this,e),this.level=1,this.heroSpeed=i[this.level].heroSpeed,this.heroNumber=i[this.level].heroNumber,this.myDungeonMap=i[this.level].myDungeonMap,this.viewField=i[this.level].viewField,this.skeletonPosition={},this.allChestsOpen=!1,this.isSkeletonDead=!1,this.debug=!1,this}return r(e,[{key:"update",value:function(e){}},{key:"keyboardEvent",value:function(e){}},{key:"draw",value:function(e,n){}}]),e}(),a=new o;exports.myGameMaster=a;
},{"../../public/assets/maps/dungeonMaps":"RRrM"}],"gDYW":[function(require,module,exports) {
module.exports="/ZeldasRupeeRace/dungeonStuffs4.4618f19f.png";
},{}],"3Hxq":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.myDrawManager=void 0;var n={rock:{sheet:"dungeon",pos:{x:0,y:207},size:{x:18,y:16},dest:{x:40,y:30},offset:{x:0,y:0}},water:{sheet:"dungeon",pos:{x:16,y:207},size:{x:18,y:16},dest:{x:40,y:30},offset:{x:0,y:0}},fire:{sheet:"dungeon",pos:{x:32,y:207},size:{x:18,y:16},dest:{x:40,y:30},offset:{x:0,y:0}},closedChest:{sheet:"dungeon",pos:{x:240,y:174},size:{x:30,y:18},dest:{x:45,y:30},offset:{x:0,y:8}},openChest:{sheet:"dungeon",pos:{x:240,y:208},size:{x:30,y:18},dest:{x:45,y:30},offset:{x:0,y:8}},wall:{sheet:"dungeon",pos:{x:0,y:16},size:{x:20,y:18},dest:{x:30,y:30},offset:{x:0,y:0}},floor:{sheet:"dungeon",pos:{x:64,y:96},size:{x:20,y:18},dest:{x:30,y:30},offset:{x:0,y:0}},torch:{sheet:"dungeon",frames:8,pos:{x:132,y:153},size:{x:16,y:13},dest:{x:26,y:23},offset:{x:-5,y:8}}},s=function(e){var t=new Image;return t.src=e,t},r={dungeon:s(require("../../public/images/dungeonStuffs4.png"))},y=function(){function t(){e(this,t),this.render_torch_time=0}return o(t,[{key:"getObject",value:function(e){var t=n[e];if(t)return t;throw new Error("No object to draw with name ".concat(e))}},{key:"getDrawElements",value:function(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.render_torch_time+=n;var y=Math.floor(this.render_torch_time+s/8),x=this.getObject(t),a=x.pos,i=x.size,f=x.dest,u=x.frames,d=x.offset,c=u?y%u:0;e.drawImage(r.dungeon,a.x+i.x*c,a.y,i.x,i.y,o.x-d.x,o.y-d.y,f.x,f.y)}},{key:"drawHalf",value:function(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=this.getObject(t),y=s.pos,x=s.size,a=s.dest,i=s.offset;e.drawImage(r.dungeon,n?y.x+x.x/2:y.x,y.y-x.y,x.x/2,x.y,n?o.x+48-i.x:o.x+20-i.x,o.y-8,a.x-12,a.y)}},{key:"getDrawHeaders",value:function(e,t,o){var n=450,s=10,r={rock:{x:0,y:0},fire:{x:50,y:0},water:{x:100,y:0}};this.drawHalf(e,t,{x:n+r[t].x,y:s+r[t].y},o)}}]),t}(),x=new y;exports.myDrawManager=x;
},{"../../public/images/dungeonStuffs4.png":"gDYW"}],"c+Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.myMap=void 0;var t=require("../effects/DrawManager"),e=require("./GameMaster");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}var n=function(){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:23;i(this,r),this.position={x:0,y:0},this.tileSize=t,this.level=e.myGameMaster.level;var a=e.myGameMaster.myDungeonMap.trim().split("\n");return this.map=a.map(function(t){return t.split("")}),this}return a(r,[{key:"GetDungeonStart",value:function(){for(var t=0;t<this.map.length;t+=1)for(var e=0;e<this.map[t].length;e+=1)if("S"===this.map[t][e])return this.editedTilePos(t,e);throw new Error("Set the S for skeleton start")}},{key:"getRandomLocations",value:function(t){for(var e=[],i=0;i<this.map.length;i+=1)for(var r=0;r<this.map[i].length;r+=1)"."===this.map[i][r]&&("chest"===t?e.push(this.tilePos(i,r)):e.push(this.editedTilePos(i,r)));return e}},{key:"posToTile",value:function(t){var e=Math.floor((t.x-this.position.x)/this.tileSize);return[Math.floor((t.y-this.position.y)/this.tileSize),e]}},{key:"tileAtIndex",value:function(t){try{return this.map[t[0]][t[1]]}catch(e){return!1}}},{key:"tile",value:function(t,e){var i=this.posToTile(t),r=[i[0]+e[1],i[1]+e[0]],a=this.tileAtIndex(r);return a}},{key:"tilePos",value:function(t,e){return{x:this.position.x+e*this.tileSize,y:this.position.y+t*this.tileSize}}},{key:"editedTilePos",value:function(t,e){return{x:this.position.x+this.tileSize*e+this.tileSize/2,y:this.position.y+this.tileSize*t+this.tileSize/2}}},{key:"drawWall",value:function(e,i,r){t.myDrawManager.getDrawElements(e,"wall",this.tilePos(i,r))}},{key:"drawFloor",value:function(e,i,r){t.myDrawManager.getDrawElements(e,"floor",this.tilePos(i,r))}},{key:"drawTorch",value:function(e,i,r,a){this.drawWall(i,r,a);var n=Math.floor(8*Math.random());t.myDrawManager.getDrawElements(i,"torch",this.tilePos(r,a),e,n)}},{key:"keyboardEvent",value:function(){}},{key:"update",value:function(){}},{key:"draw",value:function(t,e){for(var i=0;i<this.map.length;i+=1)for(var r=0;r<this.map[i].length;r+=1){var a=this.map[i][r];"W"===a&&this.drawWall(e,i,r),"i"===a&&this.drawTorch(t,e,i,r),"."!==a&&"S"!==a&&"e"!==a||this.drawFloor(e,i,r)}}}]),r}(),o=new n;exports.myMap=o;
},{"../effects/DrawManager":"3Hxq","./GameMaster":"patA"}],"lYDq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Chest=void 0;var e=require("../effects/DrawManager"),t=require("./GameMaster");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}var n=function(){function r(e,t,s,n){a(this,r),this.position={x:e.x,y:e.y},this.headerPosition={x:10,y:10},this.value=t,this.num=s,this.isChestOpen=n}return s(r,[{key:"draw",value:function(a,r){if(this.isChestOpen||t.myGameMaster.debug)switch(e.myDrawManager.getDrawElements(r,"openChest",this.position,a),this.value){case"AA":e.myDrawManager.getDrawElements(r,"rock",this.position,a),e.myDrawManager.getDrawHeaders(r,"rock",this.num);break;case"BB":e.myDrawManager.getDrawElements(r,"water",this.position,a),e.myDrawManager.getDrawHeaders(r,"water",this.num);break;case"CC":e.myDrawManager.getDrawElements(r,"fire",this.position,a),e.myDrawManager.getDrawHeaders(r,"fire",this.num)}else e.myDrawManager.getDrawElements(r,"closedChest",this.position)}}]),r}();exports.Chest=n;
},{"../effects/DrawManager":"3Hxq","./GameMaster":"patA"}],"cvl1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.myChestManager=void 0;var t=require("./GameMaster"),e=require("./Map"),n=require("./Chest");function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var i=function(){function r(){return s(this,r),this.chests=[new n.Chest(this.chestStartOptions(),"AA",0,!1),new n.Chest(this.chestStartOptions(),"AA",1,!1),new n.Chest(this.chestStartOptions(),"BB",0,!1),new n.Chest(this.chestStartOptions(),"BB",1,!1),new n.Chest(this.chestStartOptions(),"CC",0,!1),new n.Chest(this.chestStartOptions(),"CC",1,!1)],this.latestOpenedChest="",this.chestInfo=[],this}return a(r,[{key:"update",value:function(t){}},{key:"keyboardEvent",value:function(t){}},{key:"draw",value:function(t,e){}},{key:"chestStartOptions",value:function(){var t;return(t=e.myMap.getRandomLocations("chest"))[Math.floor(Math.random()*t.length)]}},{key:"checkChestsStatus",value:function(){t.myGameMaster.allChestsOpen=this.chests.every(function(t){return!0===t.isChestOpen})}}]),r}(),h=new i;exports.myChestManager=h;
},{"./GameMaster":"patA","./Map":"c+Xi","./Chest":"lYDq"}],"QtyD":[function(require,module,exports) {
module.exports="/ZeldasRupeeRace/link.bf2c4f86.png";
},{}],"JkAH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Hero=void 0;var e=require("./GameMaster");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function s(e,t,s){return t&&i(e.prototype,t),s&&i(e,s),e}var n=require("../../public/images/link.png"),r={0:{currentSequence:"right",speedX:e.myGameMaster.heroSpeed,speedY:0},1:{currentSequence:"left",speedX:-e.myGameMaster.heroSpeed,speedY:0},2:{currentSequence:"up",speedX:0,speedY:-e.myGameMaster.heroSpeed},3:{currentSequence:"down",speedX:0,speedY:e.myGameMaster.heroSpeed}},o=function(){function i(e,s){t(this,i),this.position={x:e.x,y:e.y},this.heroSize=10,this.spritesheet=new Image,this.spritesheet.src=n,this.sequences=[{name:"still-down",numFrames:1,ySeqPos:0},{name:"still-left",numFrames:1,ySeqPos:1},{name:"still-up",numFrames:1,ySeqPos:2},{name:"still-right",numFrames:1,ySeqPos:3},{name:"moving-down",numFrames:10,ySeqPos:4},{name:"moving-left",numFrames:10,ySeqPos:5},{name:"moving-up",numFrames:10,ySeqPos:6},{name:"moving-right",numFrames:10,ySeqPos:7}],this.framePos=0,this.time=0,this.currentSequence="down",this.speed={x:0,y:0},this.hypoDirections=[[1,0],[-1,0],[0,-1],[0,1]],this.abailablesDirections=[],this.current_direction=[],this.stop=!0,this.map=s}return s(i,[{key:"draw",value:function(e,t){var i=120,s=130,n=0===this.speed.x&&0===this.speed.y?"still-".concat(this.currentSequence):"moving-".concat(this.currentSequence),r=this.sequences.find(function(e){return e.name===n});if(!r)throw new Error("invalid seq");t.drawImage(this.spritesheet,i*this.framePos,s*r.ySeqPos,i,s,this.position.x-12,this.position.y-23,i-95,s-95),this.time+=e,1===r.numFrames?this.framePos=Math.floor(3*this.time)%r.numFrames:this.framePos=Math.floor(10*this.time)%r.numFrames,this.killSkeleton()}},{key:"update",value:function(t){e.myGameMaster.allChestsOpen?(this.currentSequence="down",this.speed={x:0,y:0}):(this.current_direction.length<1&&this.setDirection(),this.getMove(t))}},{key:"getAbailablesDirections",value:function(){var e=this,t={},i=this.hypoDirections;return i.filter(function(s,n){t={x:e.position.x-i[n][0]*e.heroSize,y:e.position.y-i[n][1]*e.heroSize};var r=e.map.tile(t,i[n]);if("W"!==r&&"i"!==r)return i[n]})}},{key:"setDirection",value:function(){this.abailablesDirections=this.getAbailablesDirections();var e;e=Math.floor(Math.random()*this.abailablesDirections.length),this.current_direction=this.abailablesDirections[e]}},{key:"getMove",value:function(e){var t=this,i=r[this.hypoDirections.findIndex(function(e){return e===t.current_direction})],s=i.currentSequence,n=i.speedX,o=i.speedY;this.currentSequence=s,this.speed.x=n,this.speed.y=o,this.nextTile(e)}},{key:"nextTile",value:function(e){var t=this.position.x+this.speed.x*e,i=this.position.y+this.speed.y*e,s=this.current_direction,n={x:this.position.x-s[0]*this.heroSize,y:this.position.y-s[1]*this.heroSize},r=this.map.tile(n,s);"W"!==r&&"i"!==r?(this.position.x=t,this.position.y=i):this.current_direction=[]}},{key:"killSkeleton",value:function(){Math.sqrt(Math.pow(this.position.x-e.myGameMaster.skeletonPosition.x,2)+Math.pow(this.position.y-e.myGameMaster.skeletonPosition.y,2))<15&&(e.myGameMaster.isSkeletonDead=!0)}}]),i}();exports.Hero=o;
},{"./GameMaster":"patA","../../public/images/link.png":"QtyD"}],"4dpR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.myHeroManager=void 0;var e=require("./GameMaster"),r=require("./Map"),t=require("./Hero");function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}var u=function(){function o(){return n(this,o),this.heroes=[],this}return a(o,[{key:"update",value:function(e){}},{key:"keyboardEvent",value:function(e){}},{key:"draw",value:function(e,r){}},{key:"setHeroes",value:function(){for(var n=0;n<e.myGameMaster.heroNumber;n+=1)this.heroes.push(new t.Hero(this.heroStartOptions(),r.myMap))}},{key:"heroStartOptions",value:function(){var e;return(e=r.myMap.getRandomLocations("hero"))[Math.floor(Math.random()*e.length)]}}]),o}(),i=new u;exports.myHeroManager=i;
},{"./GameMaster":"patA","./Map":"c+Xi","./Hero":"JkAH"}],"7NBB":[function(require,module,exports) {
module.exports="/ZeldasRupeeRace/skeleton.ba84e8c5.png";
},{}],"zUXn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Skeleton=void 0;var e=require("./GameMaster"),t=require("./ChestManager");function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,t,s){return t&&i(e.prototype,t),s&&i(e,s),e}var a=require("../../public/images/skeleton.png"),r=function(){function i(e,t){s(this,i),this.position={x:e.x,y:e.y},this.skeletonSize=10,this.spritesheet=new Image,this.spritesheet.src=a,this.sequences=[{name:"still-down",numFrames:2,ySeqPos:2},{name:"still-left",numFrames:2,ySeqPos:1},{name:"still-up",numFrames:2,ySeqPos:0},{name:"still-right",numFrames:2,ySeqPos:3},{name:"still-dead",numFrames:1,ySeqPos:20},{name:"still-dance",numFrames:5,ySeqPos:14},{name:"moving-down",numFrames:7,ySeqPos:10},{name:"moving-left",numFrames:7,ySeqPos:9},{name:"moving-up",numFrames:7,ySeqPos:8},{name:"moving-right",numFrames:7,ySeqPos:11}],this.framePos=0,this.time=0,this.currentSequence="down",this.speed={x:0,y:0},this.map=t}return n(i,[{key:"draw",value:function(s,i){var n=64,a=64,r=0===this.speed.x&&0===this.speed.y?"still-".concat(this.currentSequence):"moving-".concat(this.currentSequence),o=this.sequences.find(function(e){return e.name===r});if(!o)throw new Error("invalid seq");this.drawShadow(i),i.drawImage(this.spritesheet,n*this.framePos,a*o.ySeqPos,n,a,this.position.x-20,this.position.y-25,n-25,a-25),this.time+=s,this.framePos=Math.floor(this.time*o.numFrames)%o.numFrames,e.myGameMaster.skeletonPosition=this.position,t.myChestManager.checkChestsStatus()}},{key:"update",value:function(t){if(e.myGameMaster.isSkeletonDead&&!e.myGameMaster.debug)this.currentSequence="dead",this.speed={x:0,y:0},this.framePos=5;else if(e.myGameMaster.allChestsOpen&&"dance"!==this.currentSequence)this.currentSequence="dance",this.speed={x:0,y:0},this.framePos=2;else{var s=this.position.x+this.speed.x*t,i=this.position.y+this.speed.y*t,n=this.getDirection(),a={x:this.position.x-n[0]*this.skeletonSize,y:this.position.y-n[1]*this.skeletonSize},r=this.map.tile(a,n);"W"!==r&&"i"!==r&&(this.position.x=s,this.position.y=i)}}},{key:"getDirection",value:function(){var e=[1,0];return 0!==this.speed.x&&this.speed.x<0&&(e=[-1,0]),0!==this.speed.y&&this.speed.y>0&&(e=[0,1]),0!==this.speed.y&&this.speed.y<0&&(e=[0,-1]),e}},{key:"keyboardEvent",value:function(e){switch(e){case"ArrowLeft":this.currentSequence="left",this.speed.x=-100;break;case"ArrowRight":this.currentSequence="right",this.speed.x=100;break;case"ArrowUp":this.currentSequence="up",this.speed.y=-100;break;case"ArrowDown":this.currentSequence="down",this.speed.y=100;break;case"a":case"A":this.open()}}},{key:"keyboardEventUp",value:function(){this.speed.x=0,this.speed.y=0}},{key:"open",value:function(){var e=this;t.myChestManager.chests.forEach(function(s){if(0,Math.sqrt(Math.pow(e.position.x-s.position.x,2)+Math.pow(e.position.y-s.position.y,2))<30&&!s.isChestOpen)switch(t.myChestManager.latestOpenedChest){case"":s.isChestOpen=!0,t.myChestManager.latestOpenedChest=s.value;break;case s.value:s.isChestOpen=!0,t.myChestManager.latestOpenedChest="";break;default:t.myChestManager.chests.forEach(function(e){return e.isChestOpen=!1}),t.myChestManager.latestOpenedChest="",s.isChestOpen=!0,t.myChestManager.latestOpenedChest=s.value}})}},{key:"drawShadow",value:function(t){"dance"===this.currentSequence&&e.myGameMaster.viewField++;var s=document.getElementById("canvas"),i=document.getElementById("canvasShadow");i.width=s.width,i.height=s.height;var n=i.getContext("2d");n.fillStyle="black",n.fillRect(0,38,i.width,i.height),n.globalCompositeOperation="destination-out",n.arc(this.position.x,this.position.y,e.myGameMaster.viewField,0,2*Math.PI),n.fill(),t.drawImage(i,0,0)}}]),i}();exports.Skeleton=r;
},{"./GameMaster":"patA","./ChestManager":"cvl1","../../public/images/skeleton.png":"7NBB"}],"+pSR":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.FPSViewer=void 0;var i=function(){function t(n){e(this,t),this.position=n}return n(t,[{key:"keyboardEvent",value:function(){}},{key:"update",value:function(){}},{key:"draw",value:function(e,t){var n=(1/e).toFixed(2);t.font="15px Arial",t.fillStyle="white",t.fillText("FPS: ".concat(n),this.position.x,this.position.y)}}]),t}();exports.FPSViewer=i;
},{}],"lnC+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Chronometer=void 0;var e=require("./GameMaster");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}var o=function(){function n(e){t(this,n),this.position=e,this.seg=0,this.min=0}return i(n,[{key:"keyboardEvent",value:function(){}},{key:"update",value:function(){}},{key:"draw",value:function(t,n){e.myGameMaster.isSkeletonDead||e.myGameMaster.allChestsOpen||(this.seg+=t);var i=Math.floor(this.seg);this.seg<10&&(i="0".concat(i)),60===i&&(this.min+=1,this.seg=0);var o="Time: ".concat(this.min,":").concat(i);n.font="15px Arial",n.fillStyle="white",n.fillText("".concat(o," "),this.position.x,this.position.y)}}]),n}();exports.Chronometer=o;
},{"./GameMaster":"patA"}],"nCEz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UpperMessage=void 0;var e=require("./GameMaster");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}var o=function(){function n(e){t(this,n),this.position=e}return i(n,[{key:"keyboardEvent",value:function(){}},{key:"update",value:function(){}},{key:"draw",value:function(t,n){n.font="15px Arial",n.fillStyle="white",n.fillText("Press 'a' to open the chests",this.position.x+100,this.position.y),n.fillText("Level ".concat(e.myGameMaster.level),this.position.x+300,this.position.y)}}]),n}();exports.UpperMessage=o;
},{"./GameMaster":"patA"}],"vZyd":[function(require,module,exports) {
"use strict";var e=require("./actors/ChestManager"),r=require("./actors/HeroManager"),t=require("./actors/Map"),n=require("./actors/Skeleton"),o=require("./actors/FPSViewer"),a=require("./actors/Chronometer"),i=require("./actors/UpperMessage");function u(e){return d(e)||y(e)||s(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,r){if(e){if("string"==typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,r):void 0}}function y(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function d(e){if(Array.isArray(e))return f(e)}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}window.onload=function(){var c=document.getElementById("canvas").getContext("2d"),s=t.myMap;r.myHeroManager.setHeroes();var y=s.GetDungeonStart(),d=[s,new o.FPSViewer({x:5,y:15}),new a.Chronometer({x:100,y:15}),new i.UpperMessage({x:100,y:15}),new n.Skeleton(y,s)].concat(u(e.myChestManager.chests),u(r.myHeroManager.heroes)),f=0;window.requestAnimationFrame(function e(r){var t=(r-f)/1e3;f=r,d.forEach(function(e){return e.update&&e.update(t)}),c.clearRect(0,0,650,720),d.sort(function(e,r){return e.position.y-r.position.y}).forEach(function(e){return e.draw(t,c)}),window.requestAnimationFrame(e)}),document.body.addEventListener("keydown",function(e){d.forEach(function(r){return r.keyboardEvent&&r.keyboardEvent(e.key)})}),document.body.addEventListener("keyup",function(e){d.forEach(function(r){return r.keyboardEventUp&&r.keyboardEventUp(e.key)})})};
},{"./actors/ChestManager":"cvl1","./actors/HeroManager":"4dpR","./actors/Map":"c+Xi","./actors/Skeleton":"zUXn","./actors/FPSViewer":"+pSR","./actors/Chronometer":"lnC+","./actors/UpperMessage":"nCEz"}]},{},["vZyd"], null)
//# sourceMappingURL=/ZeldasRupeeRace/app.42e9c3dd.js.map