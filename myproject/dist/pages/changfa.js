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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      src: '',
      first: '../image/个性扎头.jpg',
      like: '../image/底切丸子头.jpeg',
      finish: '../image/欧美丸子头扎发.jpeg',
      camera: '../image/欧美卷发.jpg',
      ring: '../image/欧美长卷发.jpg',
      lipstrick: '../image/欧美长卷发1.png',
      flower: '../image/白色卷发.jpg',
      elder: '../image/青年长发.jpg',
      small: '../image/亚洲卷发.jpg',
      loof: '../image/欧美卷发1.jpg',
      // star: '../image/五角星-2.jpg',
      // star1: '../image/五角星.jpg'
      ax: '../image/个性丸子头.jpg',
      border: '../image/亚洲个性丸子头.jpg',
      cdi: '../image/完整丸子头.jpg',
      define: '../image/男士丸子头.jpg',
      default: '../image/男士丸子头.jpg',
      color: 'white',
      color1: 'white',
      color2: 'white',
      color3: 'white',
      wife: '欧美卷发',
      sister: '欧美长卷发',
      sister1: '欧美长卷发',
      mother: '白色卷发',
      son: '白色卷发'

    }, _this.methods = {
      zuire: function zuire() {
        var self = this;
        self.first = '../image/个性扎头.jpg';
        self.like = '../image/底切丸子头.jpeg';
        self.finish = '../image/欧美丸子头扎发.jpeg';
        self.camera = '../image/欧美卷发.jpg';
        self.ring = '../image/欧美长卷发.jpg';
        self.lipstrick = '../image/欧美长卷发1.png';
        self.flower = '../image/白色卷发.jpg';
        self.elder = '../image/青年长发.jpg';
        self.wife = '欧美卷发';
        self.sister = '欧美长卷发';
        self.sister2 = '欧美长卷发';
        self.mother = '白色卷发';
        self.son = '白色卷发';
        self.color = 'gray';
        self.color1 = 'white';
        self.color2 = 'white';
        self.color3 = 'white';
      },
      wanzi: function wanzi() {
        var self = this;
        self.first = '../image/个性扎头.jpg';
        self.like = '../image/底切丸子头.jpeg';
        self.finish = '../image/欧美丸子头扎发.jpeg';
        self.camera = '../image/个性丸子头.jpg';
        self.ring = '../image/亚洲个性丸子头.jpg';
        self.lipstrick = '../image/完整丸子头.png';
        self.flower = '../image/男士丸子头.jpg';
        self.elder = '../image/帅气扎发.png';
        this.wife = '个性丸子头';
        this.sister = '亚洲个性丸子头';
        this.sister1 = '亚洲个性丸子头';
        this.mother = '完整丸子头';
        this.son = '男士丸子头';
        self.color1 = 'gray';
        self.color = 'white';
        self.color3 = 'white';
      },
      c: function c() {
        var self = this;
        self.first = '../image/个性扎头.jpg';
        self.like = '../image/底切丸子头.jpeg';
        self.finish = '../image/欧美丸子头扎发.jpeg';
        self.camera = '../image/个性丸子头.jpg';
        self.ring = '../image/亚洲个性丸子头.jpg';
        self.lipstrick = '../image/完整丸子头.png';
        self.flower = '../image/男士丸子头.jpg';
        self.elder = '../image/帅气扎发.png';
        this.wife = '个性丸子头';
        this.sister = '亚洲个性丸子头';
        this.mother = '完整丸子头';
        this.son = '男士丸子头';
        self.color1 = 'gray';
        self.color = 'white';
        self.color3 = 'white';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/changfa'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZmEuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwic3JjIiwiZmlyc3QiLCJsaWtlIiwiZmluaXNoIiwiY2FtZXJhIiwicmluZyIsImxpcHN0cmljayIsImZsb3dlciIsImVsZGVyIiwic21hbGwiLCJsb29mIiwiYXgiLCJib3JkZXIiLCJjZGkiLCJkZWZpbmUiLCJkZWZhdWx0IiwiY29sb3IiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJ3aWZlIiwic2lzdGVyIiwic2lzdGVyMSIsIm1vdGhlciIsInNvbiIsIm1ldGhvZHMiLCJ6dWlyZSIsInNlbGYiLCJzaXN0ZXIyIiwid2FuemkiLCJjIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGFBQU8sbUJBRkY7QUFHTEMsWUFBTSxxQkFIRDtBQUlMQyxjQUFRLHVCQUpIO0FBS0xDLGNBQVEsbUJBTEg7QUFNTEMsWUFBTSxvQkFORDtBQU9MQyxpQkFBVyxxQkFQTjtBQVFMQyxjQUFRLG1CQVJIO0FBU0xDLGFBQU8sbUJBVEY7QUFVTEMsYUFBTyxtQkFWRjtBQVdMQyxZQUFNLG9CQVhEO0FBWUw7QUFDQTtBQUNBQyxVQUFJLG9CQWRDO0FBZUxDLGNBQVEsc0JBZkg7QUFnQkxDLFdBQUssb0JBaEJBO0FBaUJMQyxjQUFRLG9CQWpCSDtBQWtCTEMsZUFBUyxvQkFsQko7QUFtQkxDLGFBQU8sT0FuQkY7QUFvQkxDLGNBQVEsT0FwQkg7QUFxQkxDLGNBQVEsT0FyQkg7QUFzQkxDLGNBQVEsT0F0Qkg7QUF1QkxDLFlBQU0sTUF2QkQ7QUF3QkxDLGNBQVEsT0F4Qkg7QUF5QkxDLGVBQVMsT0F6Qko7QUEwQkxDLGNBQVEsTUExQkg7QUEyQkxDLFdBQUs7O0FBM0JBLEssUUE4QlBDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUsxQixLQUFMLEdBQWEsbUJBQWI7QUFDQTBCLGFBQUt6QixJQUFMLEdBQVkscUJBQVo7QUFDQXlCLGFBQUt4QixNQUFMLEdBQWMsdUJBQWQ7QUFDQXdCLGFBQUt2QixNQUFMLEdBQWMsbUJBQWQ7QUFDQXVCLGFBQUt0QixJQUFMLEdBQVksb0JBQVo7QUFDQXNCLGFBQUtyQixTQUFMLEdBQWlCLHFCQUFqQjtBQUNBcUIsYUFBS3BCLE1BQUwsR0FBYyxtQkFBZDtBQUNBb0IsYUFBS25CLEtBQUwsR0FBYSxtQkFBYjtBQUNBbUIsYUFBS1AsSUFBTCxHQUFZLE1BQVo7QUFDQU8sYUFBS04sTUFBTCxHQUFjLE9BQWQ7QUFDQU0sYUFBS0MsT0FBTCxHQUFlLE9BQWY7QUFDQUQsYUFBS0osTUFBTCxHQUFjLE1BQWQ7QUFDQUksYUFBS0gsR0FBTCxHQUFXLE1BQVg7QUFDQUcsYUFBS1gsS0FBTCxHQUFhLE1BQWI7QUFDQVcsYUFBS1YsTUFBTCxHQUFjLE9BQWQ7QUFDQVUsYUFBS1QsTUFBTCxHQUFjLE9BQWQ7QUFDQVMsYUFBS1IsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQXBCTztBQXFCUlUsV0FyQlEsbUJBcUJBO0FBQ04sWUFBSUYsT0FBTyxJQUFYO0FBQ0FBLGFBQUsxQixLQUFMLEdBQWEsbUJBQWI7QUFDQTBCLGFBQUt6QixJQUFMLEdBQVkscUJBQVo7QUFDQXlCLGFBQUt4QixNQUFMLEdBQWMsdUJBQWQ7QUFDQXdCLGFBQUt2QixNQUFMLEdBQWMsb0JBQWQ7QUFDQXVCLGFBQUt0QixJQUFMLEdBQVksc0JBQVo7QUFDQXNCLGFBQUtyQixTQUFMLEdBQWlCLG9CQUFqQjtBQUNBcUIsYUFBS3BCLE1BQUwsR0FBYyxvQkFBZDtBQUNBb0IsYUFBS25CLEtBQUwsR0FBYSxtQkFBYjtBQUNBLGFBQUtZLElBQUwsR0FBWSxPQUFaO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLFNBQWQ7QUFDQSxhQUFLQyxPQUFMLEdBQWUsU0FBZjtBQUNBLGFBQUtDLE1BQUwsR0FBYyxPQUFkO0FBQ0EsYUFBS0MsR0FBTCxHQUFXLE9BQVg7QUFDQUcsYUFBS1YsTUFBTCxHQUFjLE1BQWQ7QUFDQVUsYUFBS1gsS0FBTCxHQUFhLE9BQWI7QUFDQVcsYUFBS1IsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQXZDTztBQXdDUlcsT0F4Q1EsZUF3Q0o7QUFDRixZQUFJSCxPQUFPLElBQVg7QUFDQUEsYUFBSzFCLEtBQUwsR0FBYSxtQkFBYjtBQUNBMEIsYUFBS3pCLElBQUwsR0FBWSxxQkFBWjtBQUNBeUIsYUFBS3hCLE1BQUwsR0FBYyx1QkFBZDtBQUNBd0IsYUFBS3ZCLE1BQUwsR0FBYyxvQkFBZDtBQUNBdUIsYUFBS3RCLElBQUwsR0FBWSxzQkFBWjtBQUNBc0IsYUFBS3JCLFNBQUwsR0FBaUIsb0JBQWpCO0FBQ0FxQixhQUFLcEIsTUFBTCxHQUFjLG9CQUFkO0FBQ0FvQixhQUFLbkIsS0FBTCxHQUFhLG1CQUFiO0FBQ0EsYUFBS1ksSUFBTCxHQUFZLE9BQVo7QUFDQSxhQUFLQyxNQUFMLEdBQWMsU0FBZDtBQUNBLGFBQUtFLE1BQUwsR0FBYyxPQUFkO0FBQ0EsYUFBS0MsR0FBTCxHQUFXLE9BQVg7QUFDQUcsYUFBS1YsTUFBTCxHQUFjLE1BQWQ7QUFDQVUsYUFBS1gsS0FBTCxHQUFhLE9BQWI7QUFDQVcsYUFBS1IsTUFBTCxHQUFjLE9BQWQ7QUFDRDtBQXpETyxLOzs7Ozs2QkEyREQsQ0FBRzs7OztFQTFGcUIsZUFBS1ksSTs7a0JBQW5CakMsSyIsImZpbGUiOiJjaGFuZ2ZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBmaXJzdDogJy4uL2ltYWdlL+S4quaAp+aJjuWktC5qcGcnLFxuICAgIGxpa2U6ICcuLi9pbWFnZS/lupXliIfkuLjlrZDlpLQuanBlZycsXG4gICAgZmluaXNoOiAnLi4vaW1hZ2Uv5qyn576O5Li45a2Q5aS05omO5Y+RLmpwZWcnLFxuICAgIGNhbWVyYTogJy4uL2ltYWdlL+asp+e+juWNt+WPkS5qcGcnLFxuICAgIHJpbmc6ICcuLi9pbWFnZS/mrKfnvo7plb/ljbflj5EuanBnJyxcbiAgICBsaXBzdHJpY2s6ICcuLi9pbWFnZS/mrKfnvo7plb/ljbflj5ExLnBuZycsXG4gICAgZmxvd2VyOiAnLi4vaW1hZ2Uv55m96Imy5Y235Y+RLmpwZycsXG4gICAgZWxkZXI6ICcuLi9pbWFnZS/pnZLlubTplb/lj5EuanBnJyxcbiAgICBzbWFsbDogJy4uL2ltYWdlL+S6mua0suWNt+WPkS5qcGcnLFxuICAgIGxvb2Y6ICcuLi9pbWFnZS/mrKfnvo7ljbflj5ExLmpwZycsXG4gICAgLy8gc3RhcjogJy4uL2ltYWdlL+S6lOinkuaYny0yLmpwZycsXG4gICAgLy8gc3RhcjE6ICcuLi9pbWFnZS/kupTop5LmmJ8uanBnJ1xuICAgIGF4OiAnLi4vaW1hZ2Uv5Liq5oCn5Li45a2Q5aS0LmpwZycsXG4gICAgYm9yZGVyOiAnLi4vaW1hZ2Uv5Lqa5rSy5Liq5oCn5Li45a2Q5aS0LmpwZycsXG4gICAgY2RpOiAnLi4vaW1hZ2Uv5a6M5pW05Li45a2Q5aS0LmpwZycsXG4gICAgZGVmaW5lOiAnLi4vaW1hZ2Uv55S35aOr5Li45a2Q5aS0LmpwZycsXG4gICAgZGVmYXVsdDogJy4uL2ltYWdlL+eUt+Wjq+S4uOWtkOWktC5qcGcnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGNvbG9yMTogJ3doaXRlJyxcbiAgICBjb2xvcjI6ICd3aGl0ZScsXG4gICAgY29sb3IzOiAnd2hpdGUnLFxuICAgIHdpZmU6ICfmrKfnvo7ljbflj5EnLFxuICAgIHNpc3RlcjogJ+asp+e+jumVv+WNt+WPkScsXG4gICAgc2lzdGVyMTogJ+asp+e+jumVv+WNt+WPkScsXG4gICAgbW90aGVyOiAn55m96Imy5Y235Y+RJyxcbiAgICBzb246ICfnmb3oibLljbflj5EnXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHp1aXJlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmZpcnN0ID0gJy4uL2ltYWdlL+S4quaAp+aJjuWktC5qcGcnXG4gICAgICBzZWxmLmxpa2UgPSAnLi4vaW1hZ2Uv5bqV5YiH5Li45a2Q5aS0LmpwZWcnXG4gICAgICBzZWxmLmZpbmlzaCA9ICcuLi9pbWFnZS/mrKfnvo7kuLjlrZDlpLTmiY7lj5EuanBlZydcbiAgICAgIHNlbGYuY2FtZXJhID0gJy4uL2ltYWdlL+asp+e+juWNt+WPkS5qcGcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2Uv5qyn576O6ZW/5Y235Y+RLmpwZydcbiAgICAgIHNlbGYubGlwc3RyaWNrID0gJy4uL2ltYWdlL+asp+e+jumVv+WNt+WPkTEucG5nJ1xuICAgICAgc2VsZi5mbG93ZXIgPSAnLi4vaW1hZ2Uv55m96Imy5Y235Y+RLmpwZydcbiAgICAgIHNlbGYuZWxkZXIgPSAnLi4vaW1hZ2Uv6Z2S5bm06ZW/5Y+RLmpwZydcbiAgICAgIHNlbGYud2lmZSA9ICfmrKfnvo7ljbflj5EnXG4gICAgICBzZWxmLnNpc3RlciA9ICfmrKfnvo7plb/ljbflj5EnXG4gICAgICBzZWxmLnNpc3RlcjIgPSAn5qyn576O6ZW/5Y235Y+RJ1xuICAgICAgc2VsZi5tb3RoZXIgPSAn55m96Imy5Y235Y+RJ1xuICAgICAgc2VsZi5zb24gPSAn55m96Imy5Y235Y+RJ1xuICAgICAgc2VsZi5jb2xvciA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvcjEgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yMiA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3IzID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgd2FuemkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZmlyc3QgPSAnLi4vaW1hZ2Uv5Liq5oCn5omO5aS0LmpwZydcbiAgICAgIHNlbGYubGlrZSA9ICcuLi9pbWFnZS/lupXliIfkuLjlrZDlpLQuanBlZydcbiAgICAgIHNlbGYuZmluaXNoID0gJy4uL2ltYWdlL+asp+e+juS4uOWtkOWktOaJjuWPkS5qcGVnJ1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vaW1hZ2Uv5Liq5oCn5Li45a2Q5aS0LmpwZydcbiAgICAgIHNlbGYucmluZyA9ICcuLi9pbWFnZS/kuprmtLLkuKrmgKfkuLjlrZDlpLQuanBnJ1xuICAgICAgc2VsZi5saXBzdHJpY2sgPSAnLi4vaW1hZ2Uv5a6M5pW05Li45a2Q5aS0LnBuZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJy4uL2ltYWdlL+eUt+Wjq+S4uOWtkOWktC5qcGcnXG4gICAgICBzZWxmLmVsZGVyID0gJy4uL2ltYWdlL+W4heawlOaJjuWPkS5wbmcnXG4gICAgICB0aGlzLndpZmUgPSAn5Liq5oCn5Li45a2Q5aS0J1xuICAgICAgdGhpcy5zaXN0ZXIgPSAn5Lqa5rSy5Liq5oCn5Li45a2Q5aS0J1xuICAgICAgdGhpcy5zaXN0ZXIxID0gJ+S6mua0suS4quaAp+S4uOWtkOWktCdcbiAgICAgIHRoaXMubW90aGVyID0gJ+WujOaVtOS4uOWtkOWktCdcbiAgICAgIHRoaXMuc29uID0gJ+eUt+Wjq+S4uOWtkOWktCdcbiAgICAgIHNlbGYuY29sb3IxID0gJ2dyYXknXG4gICAgICBzZWxmLmNvbG9yID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnd2hpdGUnXG4gICAgfSxcbiAgICBjKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmZpcnN0ID0gJy4uL2ltYWdlL+S4quaAp+aJjuWktC5qcGcnXG4gICAgICBzZWxmLmxpa2UgPSAnLi4vaW1hZ2Uv5bqV5YiH5Li45a2Q5aS0LmpwZWcnXG4gICAgICBzZWxmLmZpbmlzaCA9ICcuLi9pbWFnZS/mrKfnvo7kuLjlrZDlpLTmiY7lj5EuanBlZydcbiAgICAgIHNlbGYuY2FtZXJhID0gJy4uL2ltYWdlL+S4quaAp+S4uOWtkOWktC5qcGcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2Uv5Lqa5rSy5Liq5oCn5Li45a2Q5aS0LmpwZydcbiAgICAgIHNlbGYubGlwc3RyaWNrID0gJy4uL2ltYWdlL+WujOaVtOS4uOWtkOWktC5wbmcnXG4gICAgICBzZWxmLmZsb3dlciA9ICcuLi9pbWFnZS/nlLflo6vkuLjlrZDlpLQuanBnJ1xuICAgICAgc2VsZi5lbGRlciA9ICcuLi9pbWFnZS/luIXmsJTmiY7lj5EucG5nJ1xuICAgICAgdGhpcy53aWZlID0gJ+S4quaAp+S4uOWtkOWktCdcbiAgICAgIHRoaXMuc2lzdGVyID0gJ+S6mua0suS4quaAp+S4uOWtkOWktCdcbiAgICAgIHRoaXMubW90aGVyID0gJ+WujOaVtOS4uOWtkOWktCdcbiAgICAgIHRoaXMuc29uID0gJ+eUt+Wjq+S4uOWtkOWktCdcbiAgICAgIHNlbGYuY29sb3IxID0gJ2dyYXknXG4gICAgICBzZWxmLmNvbG9yID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnd2hpdGUnXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHsgfVxufVxuIl19