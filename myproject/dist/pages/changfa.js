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
      navigationBarTitleText: '男人的魅力'
    }, _this.data = {
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
      wepy: '../image/欧美卷发3.jpg',
      extends: '../image/欧美个性潮男.jpg',
      star: '../image/五角星(2).png',
      star1: '../image/五角星(1).png',
      ax: '../image/个性丸子头.jpg',
      border: '../image/亚洲个性丸子头.jpg',
      cdi: '../image/完整丸子头.jpg',
      define: '../image/男士丸子头.jpg',
      default: '../image/男士丸子头.jpg',
      color: 'black',
      color1: 'black',
      color2: 'black',
      color3: 'black',
      wife: '欧美卷发',
      sister: '欧美长卷发',
      sister1: '欧美长卷发',
      mother: '白色卷发',
      son: '白色卷发',
      wepyy: '个性头扎',
      direction: '底切丸子头',
      from: '欧美丸子头扎发'

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
        self.wepyy = '个性头扎';
        self.direction = '底切丸子头';
        self.from = '欧美丸子头扎发';
        self.color = 'gray';
        self.color1 = 'black';
        self.color2 = 'black';
        self.color3 = 'black';
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
        self.wepyy = '个性扎头';
        self.direction = '底切丸子头';
        self.from = '欧美丸子头扎发';
        self.color1 = 'gray';
        self.color = 'black';
        self.color3 = 'black';
        self.color2 = 'black';
      },
      c: function c() {
        var self = this;
        self.first = '../image/欧美个性潮男.jpg';
        self.like = '../image/欧美卷发3.jpg';
        self.finish = '../image/亚洲卷发.jpg';
        self.camera = '../image/欧美卷发.jpg';
        self.ring = '../image/欧美长卷发.jpg';
        self.lipstrick = '../image/欧美长卷发1.png';
        self.flower = '../image/白色卷发.jpg';
        self.elder = '../image/亚洲长卷发.jpg';
        self.wepy = '欧美个性潮男';
        self.sister = '欧美卷发';
        self.sister1 = '欧美长发';
        self.mother = '欧美长卷发';
        self.son = '亚洲卷发';
        self.wepyy = '亚洲长卷发';
        self.direction = '欧美卷发';
        self.from = '亚洲长卷发';
        self.color2 = 'gray';
        self.color = 'black';
        self.color1 = 'black';
        self.color3 = 'black';
      },
      d: function d() {
        self.color3 = 'gray';
        self.color = 'black';
        self.color1 = 'black';
        self.color2 = 'black';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZmEuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImZpcnN0IiwibGlrZSIsImZpbmlzaCIsImNhbWVyYSIsInJpbmciLCJsaXBzdHJpY2siLCJmbG93ZXIiLCJlbGRlciIsInNtYWxsIiwibG9vZiIsIndlcHkiLCJleHRlbmRzIiwic3RhciIsInN0YXIxIiwiYXgiLCJib3JkZXIiLCJjZGkiLCJkZWZpbmUiLCJkZWZhdWx0IiwiY29sb3IiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJ3aWZlIiwic2lzdGVyIiwic2lzdGVyMSIsIm1vdGhlciIsInNvbiIsIndlcHl5IiwiZGlyZWN0aW9uIiwiZnJvbSIsIm1ldGhvZHMiLCJ6dWlyZSIsInNlbGYiLCJzaXN0ZXIyIiwid2FuemkiLCJjIiwiZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsYUFBTyxtQkFGRjtBQUdMQyxZQUFNLHFCQUhEO0FBSUxDLGNBQVEsdUJBSkg7QUFLTEMsY0FBUSxtQkFMSDtBQU1MQyxZQUFNLG9CQU5EO0FBT0xDLGlCQUFXLHFCQVBOO0FBUUxDLGNBQVEsbUJBUkg7QUFTTEMsYUFBTyxtQkFURjtBQVVMQyxhQUFPLG1CQVZGO0FBV0xDLFlBQU0sb0JBWEQ7QUFZTEMsWUFBTSxvQkFaRDtBQWFMQyxlQUFTLHFCQWJKO0FBY0xDLFlBQU0scUJBZEQ7QUFlTEMsYUFBTyxxQkFmRjtBQWdCTEMsVUFBSSxvQkFoQkM7QUFpQkxDLGNBQVEsc0JBakJIO0FBa0JMQyxXQUFLLG9CQWxCQTtBQW1CTEMsY0FBUSxvQkFuQkg7QUFvQkxDLGVBQVMsb0JBcEJKO0FBcUJMQyxhQUFPLE9BckJGO0FBc0JM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QWUsTUFBZjtBQUNBUSxhQUFLUCxNQUFMLEdBQWMsT0FBZDtBQUNBTyxhQUFLTixHQUFMLEdBQVcsTUFBWDtBQUNBTSxhQUFLTCxLQUFMLEdBQWEsT0FBYjtBQUNBSyxhQUFLSixTQUFMLEdBQWlCLE1BQWpCO0FBQ0FJLGFBQUtILElBQUwsR0FBWSxPQUFaO0FBQ0FHLGFBQUtaLE1BQUwsR0FBYyxNQUFkO0FBQ0FZLGFBQUtkLEtBQUwsR0FBYSxPQUFiO0FBQ0FjLGFBQUtiLE1BQUwsR0FBYyxPQUFkO0FBQ0FhLGFBQUtYLE1BQUwsR0FBYyxPQUFkO0FBQ0QsT0FyRU87QUFzRVJlLE9BdEVRLGVBc0VKO0FBQ0ZKLGFBQUtYLE1BQUwsR0FBYyxNQUFkO0FBQ0FXLGFBQUtkLEtBQUwsR0FBYSxPQUFiO0FBQ0FjLGFBQUtiLE1BQUwsR0FBYyxPQUFkO0FBQ0FhLGFBQUtaLE1BQUwsR0FBYyxPQUFkO0FBQ0Q7QUEzRU8sSzs7Ozs7NkJBNkVELENBQUc7Ozs7RUFwSHFCLGVBQUtpQixJOztrQkFBbkIzQyxLIiwiZmlsZSI6ImNoYW5nZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlLfkurrnmoTprYXlipsnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGZpcnN0OiAnLi4vaW1hZ2Uv5Liq5oCn5omO5aS0LmpwZycsXG4gICAgbGlrZTogJy4uL2ltYWdlL+W6leWIh+S4uOWtkOWktC5qcGVnJyxcbiAgICBmaW5pc2g6ICcuLi9pbWFnZS/mrKfnvo7kuLjlrZDlpLTmiY7lj5EuanBlZycsXG4gICAgY2FtZXJhOiAnLi4vaW1hZ2Uv5qyn576O5Y235Y+RLmpwZycsXG4gICAgcmluZzogJy4uL2ltYWdlL+asp+e+jumVv+WNt+WPkS5qcGcnLFxuICAgIGxpcHN0cmljazogJy4uL2ltYWdlL+asp+e+jumVv+WNt+WPkTEucG5nJyxcbiAgICBmbG93ZXI6ICcuLi9pbWFnZS/nmb3oibLljbflj5EuanBnJyxcbiAgICBlbGRlcjogJy4uL2ltYWdlL+mdkuW5tOmVv+WPkS5qcGcnLFxuICAgIHNtYWxsOiAnLi4vaW1hZ2Uv5Lqa5rSy5Y235Y+RLmpwZycsXG4gICAgbG9vZjogJy4uL2ltYWdlL+asp+e+juWNt+WPkTEuanBnJyxcbiAgICB3ZXB5OiAnLi4vaW1hZ2Uv5qyn576O5Y235Y+RMy5qcGcnLFxuICAgIGV4dGVuZHM6ICcuLi9pbWFnZS/mrKfnvo7kuKrmgKfmva7nlLcuanBnJyxcbiAgICBzdGFyOiAnLi4vaW1hZ2Uv5LqU6KeS5pifKDIpLnBuZycsXG4gICAgc3RhcjE6ICcuLi9pbWFnZS/kupTop5LmmJ8oMSkucG5nJyxcbiAgICBheDogJy4uL2ltYWdlL+S4quaAp+S4uOWtkOWktC5qcGcnLFxuICAgIGJvcmRlcjogJy4uL2ltYWdlL+S6mua0suS4quaAp+S4uOWtkOWktC5qcGcnLFxuICAgIGNkaTogJy4uL2ltYWdlL+WujOaVtOS4uOWtkOWktC5qcGcnLFxuICAgIGRlZmluZTogJy4uL2ltYWdlL+eUt+Wjq+S4uOWtkOWktC5qcGcnLFxuICAgIGRlZmF1bHQ6ICcuLi9pbWFnZS/nlLflo6vkuLjlrZDlpLQuanBnJyxcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICBjb2xvcjE6ICdibGFjaycsXG4gICAgY29sb3IyOiAnYmxhY2snLFxuICAgIGNvbG9yMzogJ2JsYWNrJyxcbiAgICB3aWZlOiAn5qyn576O5Y235Y+RJyxcbiAgICBzaXN0ZXI6ICfmrKfnvo7plb/ljbflj5EnLFxuICAgIHNpc3RlcjE6ICfmrKfnvo7plb/ljbflj5EnLFxuICAgIG1vdGhlcjogJ+eZveiJsuWNt+WPkScsXG4gICAgc29uOiAn55m96Imy5Y235Y+RJyxcbiAgICB3ZXB5eTogJ+S4quaAp+WktOaJjicsXG4gICAgZGlyZWN0aW9uOiAn5bqV5YiH5Li45a2Q5aS0JyxcbiAgICBmcm9tOiAn5qyn576O5Li45a2Q5aS05omO5Y+RJ1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB6dWlyZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5maXJzdCA9ICcuLi9pbWFnZS/kuKrmgKfmiY7lpLQuanBnJ1xuICAgICAgc2VsZi5saWtlID0gJy4uL2ltYWdlL+W6leWIh+S4uOWtkOWktC5qcGVnJ1xuICAgICAgc2VsZi5maW5pc2ggPSAnLi4vaW1hZ2Uv5qyn576O5Li45a2Q5aS05omO5Y+RLmpwZWcnXG4gICAgICBzZWxmLmNhbWVyYSA9ICcuLi9pbWFnZS/mrKfnvo7ljbflj5EuanBnJ1xuICAgICAgc2VsZi5yaW5nID0gJy4uL2ltYWdlL+asp+e+jumVv+WNt+WPkS5qcGcnXG4gICAgICBzZWxmLmxpcHN0cmljayA9ICcuLi9pbWFnZS/mrKfnvo7plb/ljbflj5ExLnBuZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJy4uL2ltYWdlL+eZveiJsuWNt+WPkS5qcGcnXG4gICAgICBzZWxmLmVsZGVyID0gJy4uL2ltYWdlL+mdkuW5tOmVv+WPkS5qcGcnXG4gICAgICBzZWxmLndpZmUgPSAn5qyn576O5Y235Y+RJ1xuICAgICAgc2VsZi5zaXN0ZXIgPSAn5qyn576O6ZW/5Y235Y+RJ1xuICAgICAgc2VsZi5zaXN0ZXIyID0gJ+asp+e+jumVv+WNt+WPkSdcbiAgICAgIHNlbGYubW90aGVyID0gJ+eZveiJsuWNt+WPkSdcbiAgICAgIHNlbGYuc29uID0gJ+eZveiJsuWNt+WPkSdcbiAgICAgIHNlbGYud2VweXkgPSAn5Liq5oCn5aS05omOJ1xuICAgICAgc2VsZi5kaXJlY3Rpb24gPSAn5bqV5YiH5Li45a2Q5aS0J1xuICAgICAgc2VsZi5mcm9tID0gJ+asp+e+juS4uOWtkOWktOaJjuWPkSdcbiAgICAgIHNlbGYuY29sb3IgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IxID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMyA9ICdibGFjaydcbiAgICB9LFxuICAgIHdhbnppKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmZpcnN0ID0gJy4uL2ltYWdlL+S4quaAp+aJjuWktC5qcGcnXG4gICAgICBzZWxmLmxpa2UgPSAnLi4vaW1hZ2Uv5bqV5YiH5Li45a2Q5aS0LmpwZWcnXG4gICAgICBzZWxmLmZpbmlzaCA9ICcuLi9pbWFnZS/mrKfnvo7kuLjlrZDlpLTmiY7lj5EuanBlZydcbiAgICAgIHNlbGYuY2FtZXJhID0gJy4uL2ltYWdlL+S4quaAp+S4uOWtkOWktC5qcGcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2Uv5Lqa5rSy5Liq5oCn5Li45a2Q5aS0LmpwZydcbiAgICAgIHNlbGYubGlwc3RyaWNrID0gJy4uL2ltYWdlL+WujOaVtOS4uOWtkOWktC5wbmcnXG4gICAgICBzZWxmLmZsb3dlciA9ICcuLi9pbWFnZS/nlLflo6vkuLjlrZDlpLQuanBnJ1xuICAgICAgc2VsZi5lbGRlciA9ICcuLi9pbWFnZS/luIXmsJTmiY7lj5EucG5nJ1xuICAgICAgdGhpcy53aWZlID0gJ+S4quaAp+S4uOWtkOWktCdcbiAgICAgIHRoaXMuc2lzdGVyID0gJ+S6mua0suS4quaAp+S4uOWtkOWktCdcbiAgICAgIHRoaXMuc2lzdGVyMSA9ICfkuprmtLLkuKrmgKfkuLjlrZDlpLQnXG4gICAgICB0aGlzLm1vdGhlciA9ICflrozmlbTkuLjlrZDlpLQnXG4gICAgICB0aGlzLnNvbiA9ICfnlLflo6vkuLjlrZDlpLQnXG4gICAgICBzZWxmLndlcHl5ID0gJ+S4quaAp+aJjuWktCdcbiAgICAgIHNlbGYuZGlyZWN0aW9uID0gJ+W6leWIh+S4uOWtkOWktCdcbiAgICAgIHNlbGYuZnJvbSA9ICfmrKfnvo7kuLjlrZDlpLTmiY7lj5EnXG4gICAgICBzZWxmLmNvbG9yMSA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IzID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnYmxhY2snXG4gICAgfSxcbiAgICBjKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmZpcnN0ID0gJy4uL2ltYWdlL+asp+e+juS4quaAp+a9rueUty5qcGcnXG4gICAgICBzZWxmLmxpa2UgPSAnLi4vaW1hZ2Uv5qyn576O5Y235Y+RMy5qcGcnXG4gICAgICBzZWxmLmZpbmlzaCA9ICcuLi9pbWFnZS/kuprmtLLljbflj5EuanBnJ1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vaW1hZ2Uv5qyn576O5Y235Y+RLmpwZydcbiAgICAgIHNlbGYucmluZyA9ICcuLi9pbWFnZS/mrKfnvo7plb/ljbflj5EuanBnJ1xuICAgICAgc2VsZi5saXBzdHJpY2sgPSAnLi4vaW1hZ2Uv5qyn576O6ZW/5Y235Y+RMS5wbmcnXG4gICAgICBzZWxmLmZsb3dlciA9ICcuLi9pbWFnZS/nmb3oibLljbflj5EuanBnJ1xuICAgICAgc2VsZi5lbGRlciA9ICcuLi9pbWFnZS/kuprmtLLplb/ljbflj5EuanBnJ1xuICAgICAgc2VsZi53ZXB5ID0gJ+asp+e+juS4quaAp+a9rueUtydcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+asp+e+juWNt+WPkSdcbiAgICAgIHNlbGYuc2lzdGVyMSA9ICfmrKfnvo7plb/lj5EnXG4gICAgICBzZWxmLm1vdGhlciA9ICfmrKfnvo7plb/ljbflj5EnXG4gICAgICBzZWxmLnNvbiA9ICfkuprmtLLljbflj5EnXG4gICAgICBzZWxmLndlcHl5ID0gJ+S6mua0sumVv+WNt+WPkSdcbiAgICAgIHNlbGYuZGlyZWN0aW9uID0gJ+asp+e+juWNt+WPkSdcbiAgICAgIHNlbGYuZnJvbSA9ICfkuprmtLLplb/ljbflj5EnXG4gICAgICBzZWxmLmNvbG9yMiA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IxID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnYmxhY2snXG4gICAgfSxcbiAgICBkKCkge1xuICAgICAgc2VsZi5jb2xvcjMgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IyID0gJ2JsYWNrJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==