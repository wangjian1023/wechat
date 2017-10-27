'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '男士流行发型指南攻略'
    }, _this.data = {
      src: '',
      first: 'http://img3.imgtn.bdimg.com/it/u=2018604086,3396175811&fm=27&gp=0.jpg',
      like: 'http://img1.imgtn.bdimg.com/it/u=3646739628,3754451969&fm=27&gp=0.jpg',
      finish: 'http://img0.imgtn.bdimg.com/it/u=3648111392,3800836706&fm=27&gp=0.jpg',
      camera: 'http://img3.imgtn.bdimg.com/it/u=224577337,661239680&fm=27&gp=0.jpg',
      ring: 'http://img4.imgtn.bdimg.com/it/u=3008906123,2795163675&fm=27&gp=0.jpg',
      lipstrick: 'http://img3.imgtn.bdimg.com/it/u=55332879,3071999040&fm=27&gp=0.jpg',
      flower: 'http://img1.imgtn.bdimg.com/it/u=1518098098,299892681&fm=27&gp=0.jpg',
      elder: 'http://img4.imgtn.bdimg.com/it/u=3003144187,2202981715&fm=27&gp=0.jpg',
      color: 'gray',
      color1: '#303030',
      color2: '#303030',
      color3: '#303030',
      wife: '短寸',
      sister: '侧分',
      sister1: '个性侧分',
      mother: '碎发',
      son: '侧分',
      wepyy: '侧分短发',
      direction: '学生短发',
      from: '硬朗寸头',
      star: '../image/star1.png',
      ss: '../image/star1.png',
      sw: '../image/star1.png',
      size: '../image/star1.png',
      saction: '../image/star1.png',
      class: '../image/star1.png',
      sad: '../image/star1.png',
      wonder: '../image/star1.png'
    }, _this.methods = {
      zuire: function zuire() {
        var self = this;
        self.first = 'http://img3.imgtn.bdimg.com/it/u=2018604086,3396175811&fm=27&gp=0.jpg';
        self.like = 'http://img1.imgtn.bdimg.com/it/u=3646739628,3754451969&fm=27&gp=0.jpg';
        self.finish = 'http://img0.imgtn.bdimg.com/it/u=3648111392,3800836706&fm=27&gp=0.jpg';
        self.camera = 'http://img3.imgtn.bdimg.com/it/u=224577337,661239680&fm=27&gp=0.jpg';
        self.ring = 'http://img4.imgtn.bdimg.com/it/u=3008906123,2795163675&fm=27&gp=0.jpg';
        self.lipstrick = 'http://img3.imgtn.bdimg.com/it/u=55332879,3071999040&fm=27&gp=0.jpg';
        self.flower = 'http://img1.imgtn.bdimg.com/it/u=1518098098,299892681&fm=27&gp=0.jpg';
        self.elder = 'http://img4.imgtn.bdimg.com/it/u=3003144187,2202981715&fm=27&gp=0.jpg';
        self.wife = '短寸';
        self.sister = '侧分';
        self.sister2 = '个性侧分';
        self.mother = '碎发';
        self.son = '侧分';
        self.wepyy = '侧发短发';
        self.direction = '学生短发';
        self.from = '硬朗寸头';
        self.color = 'gray';
        self.color1 = '#303030';
        self.color2 = '#303030';
        self.color3 = '#303030';
      },
      wanzi: function wanzi() {
        var self = this;
        self.first = 'http://img5.imgtn.bdimg.com/it/u=2324381960,334055715&fm=27&gp=0.jpg';
        self.like = 'http://img0.imgtn.bdimg.com/it/u=3518332654,3312239238&fm=27&gp=0.jpg';
        self.finish = 'http://img5.imgtn.bdimg.com/it/u=3001537372,1800865211&fm=27&gp=0.jpg';
        self.camera = 'http://img1.imgtn.bdimg.com/it/u=2256597494,2632907235&fm=27&gp=0.jpg';
        self.ring = 'http://img5.imgtn.bdimg.com/it/u=779607317,3060524226&fm=27&gp=0.jpg';
        self.lipstrick = 'http://img4.imgtn.bdimg.com/it/u=338765134,764807790&fm=27&gp=0.jpg';
        self.flower = 'http://img5.imgtn.bdimg.com/it/u=179926000,1914516841&fm=27&gp=0.jpg';
        self.elder = 'http://img1.imgtn.bdimg.com/it/u=2733570217,82520676&fm=27&gp=0.jpg';
        this.wife = '侧分';
        this.sister = '个性侧分';
        this.sister1 = '侧分';
        this.mother = '短发侧分';
        this.son = '侧分短发';
        self.wepyy = '欧美侧分';
        self.direction = '帅气短发';
        self.from = '侧分';
        self.color1 = 'gray';
        self.color = '#303030';
        self.color2 = '#303030';
        self.color3 = '#303030';
      },
      c: function c() {
        var self = this;
        self.first = 'http://img4.imgtn.bdimg.com/it/u=596214836,2625048494&fm=27&gp=0.jpg';
        self.like = 'http://img4.imgtn.bdimg.com/it/u=1613807729,2259636467&fm=27&gp=0.jpg';
        self.finish = 'http://img0.imgtn.bdimg.com/it/u=3169526301,2123157523&fm=27&gp=0.jpg';
        self.camera = 'http://img1.imgtn.bdimg.com/it/u=2426038206,751842745&fm=27&gp=0.jpg';
        self.ring = 'http://img3.imgtn.bdimg.com/it/u=2749696380,808091379&fm=27&gp=0.jpg';
        self.lipstrick = 'http://img0.imgtn.bdimg.com/it/u=3648111392,3800836706&fm=27&gp=0.jpg';
        self.flower = 'http://img4.imgtn.bdimg.com/it/u=2424614084,1307111708&fm=27&gp=0.jpg';
        self.elder = 'http://img5.imgtn.bdimg.com/it/u=4206213456,747995667&fm=27&gp=0.jpg';
        self.wepyy = '短寸';
        self.sister = '时尚圆寸';
        self.sister1 = '硬朗寸头';
        self.mother = '个性寸头';
        self.son = '欧美帅气短发';
        self.wepyy = '卡寸头';
        self.direction = '杨梅头';
        self.from = '齐圆寸';
        self.color2 = 'gray';
        self.color = '#303030';
        self.color1 = '#303030';
        self.color3 = '#303030';
      },
      d: function d() {
        var self = this;
        self.first = 'http://img3.imgtn.bdimg.com/it/u=1954808038,3596469033&fm=27&gp=0.jpg';
        self.like = 'http://img1.imgtn.bdimg.com/it/u=1409817883,3625070554&fm=27&gp=0.jpg';
        self.finish = 'http://img4.imgtn.bdimg.com/it/u=3630551466,2788256912&fm=27&gp=0.jpg';
        self.camera = 'http://img3.imgtn.bdimg.com/it/u=1838322082,1840134719&fm=27&gp=0.jpg';
        self.ring = 'http://img2.imgtn.bdimg.com/it/u=128788352,4171344772&fm=27&gp=0.jpg';
        self.lipstrick = 'http://img4.imgtn.bdimg.com/it/u=338765134,764807790&fm=27&gp=0.jpg';
        self.flower = 'http://img4.imgtn.bdimg.com/it/u=3103086333,1016447137&fm=27&gp=0.jpg';
        self.elder = 'http://img1.imgtn.bdimg.com/it/u=563877793,947915874&fm=27&gp=0.jpg';
        self.wife = '碎发';
        self.sister = '学生碎发';
        self.sister2 = '碎发';
        self.mother = '微卷碎发';
        self.son = '学生短发';
        self.wepyy = '侧分短碎发';
        self.direction = '清爽短发';
        self.from = '短碎发';
        self.color3 = 'gray';
        self.color = '#303030';
        self.color1 = '#303030';
        self.color2 = '#303030';
      },
      star: function star() {
        var self = this;
        self.collect = !self.collect;
        if (self.collect) {
          self.star = '../image/star2.png';
        } else {
          self.star = '../image/star1.png';
        }
      },
      study: function study() {
        var self = this;
        self.cat = !self.cat;
        if (self.cat) {
          self.ss = '../image/star2.png';
        } else {
          self.ss = '../image/star1.png';
        }
      },
      sw: function sw() {
        var self = this;
        self.sa = !self.sa;
        if (self.sa) {
          self.sw = '../image/star2.png';
        } else {
          self.sw = '../image/star1.png';
        }
      },
      size: function size() {
        var self = this;
        self.ab = !self.ab;
        if (self.ab) {
          self.size = '../image/star2.png';
        } else {
          self.size = '../image/star1.png';
        }
      },
      saction: function saction() {
        var self = this;
        self.find = !self.find;
        if (self.find) {
          self.saction = '../image/star2.png';
        } else {
          self.saction = '../image/star1.png';
        }
      },
      clas: function clas() {
        var self = this;
        self.sun = !self.sun;
        if (self.sun) {
          self.class = '../image/star2.png';
        } else {
          self.class = '../image/star1.png';
        }
      },
      sad: function sad() {
        var self = this;
        self.back = !self.back;
        if (self.back) {
          self.sad = '../image/star2.png';
        } else {
          self.sad = '../image/star1.png';
        }
      },
      wonder: function wonder() {
        var self = this;
        self.rain = !self.rain;
        if (self.rain) {
          self.wonder = '../image/star2.png';
        } else {
          self.wonder = '../image/star1.png';
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/duanfa'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1YW5mYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiZmlyc3QiLCJsaWtlIiwiZmluaXNoIiwiY2FtZXJhIiwicmluZyIsImxpcHN0cmljayIsImZsb3dlciIsImVsZGVyIiwiY29sb3IiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJ3aWZlIiwic2lzdGVyIiwic2lzdGVyMSIsIm1vdGhlciIsInNvbiIsIndlcHl5IiwiZGlyZWN0aW9uIiwiZnJvbSIsInN0YXIiLCJzcyIsInN3Iiwic2l6ZSIsInNhY3Rpb24iLCJjbGFzcyIsInNhZCIsIndvbmRlciIsIm1ldGhvZHMiLCJ6dWlyZSIsInNlbGYiLCJzaXN0ZXIyIiwid2FuemkiLCJjIiwiZCIsImNvbGxlY3QiLCJzdHVkeSIsImNhdCIsInNhIiwiYWIiLCJmaW5kIiwiY2xhcyIsInN1biIsImJhY2siLCJyYWluIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxhQUFPLHVFQUZGO0FBR0xDLFlBQU0sdUVBSEQ7QUFJTEMsY0FBUSx1RUFKSDtBQUtMQyxjQUFRLHFFQUxIO0FBTUxDLFlBQU0sdUVBTkQ7QUFPTEMsaUJBQVcscUVBUE47QUFRTEMsY0FBUSxzRUFSSDtBQVNMQyxhQUFPLHVFQVRGO0FBVUxDLGFBQU8sTUFWRjtBQVdMQyxjQUFRLFNBWEg7QUFZTEMsY0FBUSxTQVpIO0FBYUxDLGNBQVEsU0FiSDtBQWNMQyxZQUFNLElBZEQ7QUFlTEMsY0FBUSxJQWZIO0FBZ0JMQyxlQUFTLE1BaEJKO0FBaUJMQyxjQUFRLElBakJIO0FBa0JMQyxXQUFLLElBbEJBO0FBbUJMQyxhQUFPLE1BbkJGO0FBb0JMQyxpQkFBVyxN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QUFLTixPQUFMLEdBQWUsb0JBQWY7QUFDRCxTQUZELE1BRU87QUFDTE0sZUFBS04sT0FBTCxHQUFlLG9CQUFmO0FBQ0Q7QUFDRixPQXpJTztBQTBJUmlCLFVBMUlRLGtCQTBJRDtBQUNMLFlBQUlYLE9BQU8sSUFBWDtBQUNBQSxhQUFLWSxHQUFMLEdBQVcsQ0FBQ1osS0FBS1ksR0FBakI7QUFDQSxZQUFJWixLQUFLWSxHQUFULEVBQWM7QUFDWlosZUFBS0wsS0FBTCxHQUFhLG9CQUFiO0FBQ0QsU0FGRCxNQUVPO0FBQ0xLLGVBQUtMLEtBQUwsR0FBYSxvQkFBYjtBQUNEO0FBQ0YsT0FsSk87QUFtSlJDLFNBbkpRLGlCQW1KRjtBQUNKLFlBQUlJLE9BQU8sSUFBWDtBQUNBQSxhQUFLYSxJQUFMLEdBQVksQ0FBQ2IsS0FBS2EsSUFBbEI7QUFDQSxZQUFJYixLQUFLYSxJQUFULEVBQWU7QUFDYmIsZUFBS0osR0FBTCxHQUFXLG9CQUFYO0FBQ0QsU0FGRCxNQUVPO0FBQ0xJLGVBQUtKLEdBQUwsR0FBVyxvQkFBWDtBQUNEO0FBQ0YsT0EzSk87QUE0SlJDLFlBNUpRLG9CQTRKQztBQUNQLFlBQUlHLE9BQU8sSUFBWDtBQUNBQSxhQUFLYyxJQUFMLEdBQVksQ0FBQ2QsS0FBS2MsSUFBbEI7QUFDQSxZQUFJZCxLQUFLYyxJQUFULEVBQWU7QUFDYmQsZUFBS0gsTUFBTCxHQUFjLG9CQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xHLGVBQUtILE1BQUwsR0FBYyxvQkFBZDtBQUNEO0FBQ0Y7QUFwS08sSzs7Ozs7NkJBc0tELENBQUc7Ozs7RUF6TXFCLGVBQUtrQixJOztrQkFBbkJsRCxLIiwiZmlsZSI6ImR1YW5mYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUt+Wjq+a1geihjOWPkeWei+aMh+WNl+aUu+eVpSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgZmlyc3Q6ICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT0yMDE4NjA0MDg2LDMzOTYxNzU4MTEmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGxpa2U6ICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT0zNjQ2NzM5NjI4LDM3NTQ0NTE5NjkmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGZpbmlzaDogJ2h0dHA6Ly9pbWcwLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM2NDgxMTEzOTIsMzgwMDgzNjcwNiZmbT0yNyZncD0wLmpwZycsXG4gICAgY2FtZXJhOiAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjI0NTc3MzM3LDY2MTIzOTY4MCZmbT0yNyZncD0wLmpwZycsXG4gICAgcmluZzogJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTMwMDg5MDYxMjMsMjc5NTE2MzY3NSZmbT0yNyZncD0wLmpwZycsXG4gICAgbGlwc3RyaWNrOiAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9NTUzMzI4NzksMzA3MTk5OTA0MCZmbT0yNyZncD0wLmpwZycsXG4gICAgZmxvd2VyOiAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MTUxODA5ODA5OCwyOTk4OTI2ODEmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGVsZGVyOiAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9MzAwMzE0NDE4NywyMjAyOTgxNzE1JmZtPTI3JmdwPTAuanBnJyxcbiAgICBjb2xvcjogJ2dyYXknLFxuICAgIGNvbG9yMTogJyMzMDMwMzAnLFxuICAgIGNvbG9yMjogJyMzMDMwMzAnLFxuICAgIGNvbG9yMzogJyMzMDMwMzAnLFxuICAgIHdpZmU6ICfnn63lr7gnLFxuICAgIHNpc3RlcjogJ+S+p+WIhicsXG4gICAgc2lzdGVyMTogJ+S4quaAp+S+p+WIhicsXG4gICAgbW90aGVyOiAn56KO5Y+RJyxcbiAgICBzb246ICfkvqfliIYnLFxuICAgIHdlcHl5OiAn5L6n5YiG55+t5Y+RJyxcbiAgICBkaXJlY3Rpb246ICflrabnlJ/nn63lj5EnLFxuICAgIGZyb206ICfnoazmnJflr7jlpLQnLFxuICAgIHN0YXI6ICcuLi9pbWFnZS9zdGFyMS5wbmcnLFxuICAgIHNzOiAnLi4vaW1hZ2Uvc3RhcjEucG5nJyxcbiAgICBzdzogJy4uL2ltYWdlL3N0YXIxLnBuZycsXG4gICAgc2l6ZTogJy4uL2ltYWdlL3N0YXIxLnBuZycsXG4gICAgc2FjdGlvbjogJy4uL2ltYWdlL3N0YXIxLnBuZycsXG4gICAgY2xhc3M6ICcuLi9pbWFnZS9zdGFyMS5wbmcnLFxuICAgIHNhZDogJy4uL2ltYWdlL3N0YXIxLnBuZycsXG4gICAgd29uZGVyOiAnLi4vaW1hZ2Uvc3RhcjEucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgenVpcmUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZmlyc3QgPSAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjAxODYwNDA4NiwzMzk2MTc1ODExJmZtPTI3JmdwPTAuanBnJ1xuICAgICAgc2VsZi5saWtlID0gJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM2NDY3Mzk2MjgsMzc1NDQ1MTk2OSZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYuZmluaXNoID0gJ2h0dHA6Ly9pbWcwLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM2NDgxMTEzOTIsMzgwMDgzNjcwNiZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYuY2FtZXJhID0gJ2h0dHA6Ly9pbWczLmltZ3RuLmJkaW1nLmNvbS9pdC91PTIyNDU3NzMzNyw2NjEyMzk2ODAmZm09MjcmZ3A9MC5qcGcnXG4gICAgICBzZWxmLnJpbmcgPSAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9MzAwODkwNjEyMywyNzk1MTYzNjc1JmZtPTI3JmdwPTAuanBnJ1xuICAgICAgc2VsZi5saXBzdHJpY2sgPSAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9NTUzMzI4NzksMzA3MTk5OTA0MCZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTE1MTgwOTgwOTgsMjk5ODkyNjgxJmZtPTI3JmdwPTAuanBnJ1xuICAgICAgc2VsZi5lbGRlciA9ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0zMDAzMTQ0MTg3LDIyMDI5ODE3MTUmZm09MjcmZ3A9MC5qcGcnXG4gICAgICBzZWxmLndpZmUgPSAn55+t5a+4J1xuICAgICAgc2VsZi5zaXN0ZXIgPSAn5L6n5YiGJ1xuICAgICAgc2VsZi5zaXN0ZXIyID0gJ+S4quaAp+S+p+WIhidcbiAgICAgIHNlbGYubW90aGVyID0gJ+eijuWPkSdcbiAgICAgIHNlbGYuc29uID0gJ+S+p+WIhidcbiAgICAgIHNlbGYud2VweXkgPSAn5L6n5Y+R55+t5Y+RJ1xuICAgICAgc2VsZi5kaXJlY3Rpb24gPSAn5a2m55Sf55+t5Y+RJ1xuICAgICAgc2VsZi5mcm9tID0gJ+ehrOacl+WvuOWktCdcbiAgICAgIHNlbGYuY29sb3IgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IxID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMiA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnIzMwMzAzMCdcbiAgICB9LFxuICAgIHdhbnppKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmZpcnN0ID0gJ2h0dHA6Ly9pbWc1LmltZ3RuLmJkaW1nLmNvbS9pdC91PTIzMjQzODE5NjAsMzM0MDU1NzE1JmZtPTI3JmdwPTAuanBnJ1xuICAgICAgc2VsZi5saWtlID0gJ2h0dHA6Ly9pbWcwLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM1MTgzMzI2NTQsMzMxMjIzOTIzOCZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYuZmluaXNoID0gJ2h0dHA6Ly9pbWc1LmltZ3RuLmJkaW1nLmNvbS9pdC91PTMwMDE1MzczNzIsMTgwMDg2NTIxMSZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYuY2FtZXJhID0gJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTIyNTY1OTc0OTQsMjYzMjkwNzIzNSZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYucmluZyA9ICdodHRwOi8vaW1nNS5pbWd0bi5iZGltZy5jb20vaXQvdT03Nzk2MDczMTcsMzA2MDUyNDIyNiZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYubGlwc3RyaWNrID0gJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTMzODc2NTEzNCw3NjQ4MDc3OTAmZm09MjcmZ3A9MC5qcGcnXG4gICAgICBzZWxmLmZsb3dlciA9ICdodHRwOi8vaW1nNS5pbWd0bi5iZGltZy5jb20vaXQvdT0xNzk5MjYwMDAsMTkxNDUxNjg0MSZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYuZWxkZXIgPSAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjczMzU3MDIxNyw4MjUyMDY3NiZmbT0yNyZncD0wLmpwZydcbiAgICAgIHRoaXMud2lmZSA9ICfkvqfliIYnXG4gICAgICB0aGlzLnNpc3RlciA9ICfkuKrmgKfkvqfliIYnXG4gICAgICB0aGlzLnNpc3RlcjEgPSAn5L6n5YiGJ1xuICAgICAgdGhpcy5tb3RoZXIgPSAn55+t5Y+R5L6n5YiGJ1xuICAgICAgdGhpcy5zb24gPSAn5L6n5YiG55+t5Y+RJ1xuICAgICAgc2VsZi53ZXB5eSA9ICfmrKfnvo7kvqfliIYnXG4gICAgICBzZWxmLmRpcmVjdGlvbiA9ICfluIXmsJTnn63lj5EnXG4gICAgICBzZWxmLmZyb20gPSAn5L6n5YiGJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IyID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMyA9ICcjMzAzMDMwJ1xuICAgIH0sXG4gICAgYygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5maXJzdCA9ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT01OTYyMTQ4MzYsMjYyNTA0ODQ5NCZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYubGlrZSA9ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0xNjEzODA3NzI5LDIyNTk2MzY0NjcmZm09MjcmZ3A9MC5qcGcnXG4gICAgICBzZWxmLmZpbmlzaCA9ICdodHRwOi8vaW1nMC5pbWd0bi5iZGltZy5jb20vaXQvdT0zMTY5NTI2MzAxLDIxMjMxNTc1MjMmZm09MjcmZ3A9MC5qcGcnXG4gICAgICBzZWxmLmNhbWVyYSA9ICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT0yNDI2MDM4MjA2LDc1MTg0Mjc0NSZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYucmluZyA9ICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT0yNzQ5Njk2MzgwLDgwODA5MTM3OSZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYubGlwc3RyaWNrID0gJ2h0dHA6Ly9pbWcwLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM2NDgxMTEzOTIsMzgwMDgzNjcwNiZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTI0MjQ2MTQwODQsMTMwNzExMTcwOCZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYuZWxkZXIgPSAnaHR0cDovL2ltZzUuaW1ndG4uYmRpbWcuY29tL2l0L3U9NDIwNjIxMzQ1Niw3NDc5OTU2NjcmZm09MjcmZ3A9MC5qcGcnXG4gICAgICBzZWxmLndlcHl5ID0gJ+efreWvuCdcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+aXtuWwmuWchuWvuCdcbiAgICAgIHNlbGYuc2lzdGVyMSA9ICfnoazmnJflr7jlpLQnXG4gICAgICBzZWxmLm1vdGhlciA9ICfkuKrmgKflr7jlpLQnXG4gICAgICBzZWxmLnNvbiA9ICfmrKfnvo7luIXmsJTnn63lj5EnXG4gICAgICBzZWxmLndlcHl5ID0gJ+WNoeWvuOWktCdcbiAgICAgIHNlbGYuZGlyZWN0aW9uID0gJ+adqOaiheWktCdcbiAgICAgIHNlbGYuZnJvbSA9ICfpvZDlnIblr7gnXG4gICAgICBzZWxmLmNvbG9yMiA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvciA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyMzMDMwMzAnXG4gICAgfSxcbiAgICBkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmZpcnN0ID0gJ2h0dHA6Ly9pbWczLmltZ3RuLmJkaW1nLmNvbS9pdC91PTE5NTQ4MDgwMzgsMzU5NjQ2OTAzMyZmbT0yNyZncD0wLmpwZydcbiAgICAgIHNlbGYubGlrZSA9ICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT0xNDA5ODE3ODgzLDM2MjUwNzA1NTQmZm09MjcmZ3A9MC5qcGcnXG4gICAgICBzZWxmLmZpbmlzaCA9ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0zNjMwNTUxNDY2LDI3ODgyNTY5MTImZm09MjcmZ3A9MC5qcGcnXG4gICAgICBzZWxmLmNhbWVyYSA9ICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT0xODM4MzIyMDgyLDE4NDAxMzQ3MTkmZm09MjcmZ3A9MC5qcGcnXG4gICAgICBzZWxmLnJpbmcgPSAnaHR0cDovL2ltZzIuaW1ndG4uYmRpbWcuY29tL2l0L3U9MTI4Nzg4MzUyLDQxNzEzNDQ3NzImZm09MjcmZ3A9MC5qcGcnXG4gICAgICBzZWxmLmxpcHN0cmljayA9ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0zMzg3NjUxMzQsNzY0ODA3NzkwJmZtPTI3JmdwPTAuanBnJ1xuICAgICAgc2VsZi5mbG93ZXIgPSAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9MzEwMzA4NjMzMywxMDE2NDQ3MTM3JmZtPTI3JmdwPTAuanBnJ1xuICAgICAgc2VsZi5lbGRlciA9ICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT01NjM4Nzc3OTMsOTQ3OTE1ODc0JmZtPTI3JmdwPTAuanBnJ1xuICAgICAgc2VsZi53aWZlID0gJ+eijuWPkSdcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+WtpueUn+eijuWPkSdcbiAgICAgIHNlbGYuc2lzdGVyMiA9ICfnoo7lj5EnXG4gICAgICBzZWxmLm1vdGhlciA9ICflvq7ljbfnoo7lj5EnXG4gICAgICBzZWxmLnNvbiA9ICflrabnlJ/nn63lj5EnXG4gICAgICBzZWxmLndlcHl5ID0gJ+S+p+WIhuefreeijuWPkSdcbiAgICAgIHNlbGYuZGlyZWN0aW9uID0gJ+a4heeIveefreWPkSdcbiAgICAgIHNlbGYuZnJvbSA9ICfnn63noo7lj5EnXG4gICAgICBzZWxmLmNvbG9yMyA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvciA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IyID0gJyMzMDMwMzAnXG4gICAgfSxcbiAgICBzdGFyKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbGxlY3QgPSAhc2VsZi5jb2xsZWN0XG4gICAgICBpZiAoc2VsZi5jb2xsZWN0KSB7XG4gICAgICAgIHNlbGYuc3RhciA9ICcuLi9pbWFnZS9zdGFyMi5wbmcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnN0YXIgPSAnLi4vaW1hZ2Uvc3RhcjEucG5nJ1xuICAgICAgfVxuICAgIH0sXG4gICAgc3R1ZHkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY2F0ID0gIXNlbGYuY2F0XG4gICAgICBpZiAoc2VsZi5jYXQpIHtcbiAgICAgICAgc2VsZi5zcyA9ICcuLi9pbWFnZS9zdGFyMi5wbmcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnNzID0gJy4uL2ltYWdlL3N0YXIxLnBuZydcbiAgICAgIH1cbiAgICB9LFxuICAgIHN3KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNhID0gIXNlbGYuc2FcbiAgICAgIGlmIChzZWxmLnNhKSB7XG4gICAgICAgIHNlbGYuc3cgPSAnLi4vaW1hZ2Uvc3RhcjIucG5nJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5zdyA9ICcuLi9pbWFnZS9zdGFyMS5wbmcnXG4gICAgICB9XG4gICAgfSxcbiAgICBzaXplKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmFiID0gIXNlbGYuYWJcbiAgICAgIGlmIChzZWxmLmFiKSB7XG4gICAgICAgIHNlbGYuc2l6ZSA9ICcuLi9pbWFnZS9zdGFyMi5wbmcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnNpemUgPSAnLi4vaW1hZ2Uvc3RhcjEucG5nJ1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FjdGlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5maW5kID0gIXNlbGYuZmluZFxuICAgICAgaWYgKHNlbGYuZmluZCkge1xuICAgICAgICBzZWxmLnNhY3Rpb24gPSAnLi4vaW1hZ2Uvc3RhcjIucG5nJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5zYWN0aW9uID0gJy4uL2ltYWdlL3N0YXIxLnBuZydcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsYXMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc3VuID0gIXNlbGYuc3VuXG4gICAgICBpZiAoc2VsZi5zdW4pIHtcbiAgICAgICAgc2VsZi5jbGFzcyA9ICcuLi9pbWFnZS9zdGFyMi5wbmcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmNsYXNzID0gJy4uL2ltYWdlL3N0YXIxLnBuZydcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5iYWNrID0gIXNlbGYuYmFja1xuICAgICAgaWYgKHNlbGYuYmFjaykge1xuICAgICAgICBzZWxmLnNhZCA9ICcuLi9pbWFnZS9zdGFyMi5wbmcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnNhZCA9ICcuLi9pbWFnZS9zdGFyMS5wbmcnXG4gICAgICB9XG4gICAgfSxcbiAgICB3b25kZXIoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYucmFpbiA9ICFzZWxmLnJhaW5cbiAgICAgIGlmIChzZWxmLnJhaW4pIHtcbiAgICAgICAgc2VsZi53b25kZXIgPSAnLi4vaW1hZ2Uvc3RhcjIucG5nJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi53b25kZXIgPSAnLi4vaW1hZ2Uvc3RhcjEucG5nJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==