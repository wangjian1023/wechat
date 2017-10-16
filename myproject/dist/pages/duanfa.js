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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1YW5mYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiZmlyc3QiLCJsaWtlIiwiZmluaXNoIiwiY2FtZXJhIiwicmluZyIsImxpcHN0cmljayIsImZsb3dlciIsImVsZGVyIiwic21hbGwiLCJsb29mIiwid2VweSIsImV4dGVuZHMiLCJzdGFyIiwic3RhcjEiLCJheCIsImJvcmRlciIsImNkaSIsImRlZmluZSIsImRlZmF1bHQiLCJjb2xvciIsImNvbG9yMSIsImNvbG9yMiIsIndpZmUiLCJzaXN0ZXIiLCJzaXN0ZXIxIiwibW90aGVyIiwic29uIiwid2VweXkiLCJkaXJlY3Rpb24iLCJmcm9tIiwibWV0aG9kcyIsInp1aXJlIiwic2VsZiIsInNpc3RlcjIiLCJ3YW56aSIsImMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGFBQU8sbUJBRkY7QUFHTEMsWUFBTSxxQkFIRDtBQUlMQyxjQUFRLHVCQUpIO0FBS0xDLGNBQVEsbUJBTEg7QUFNTEMsWUFBTSxvQkFORDtBQU9MQyxpQkFBVyxxQkFQTjtBQVFMQyxjQUFRLG1CQVJIO0FBU0xDLGFBQU8sbUJBVEY7QUFVTEMsYUFBTyxtQkFWRjtBQVdMQyxZQUFNLG9CQVhEO0FBWUxDLFlBQU0sb0JBWkQ7QUFhTEMsZUFBUyxxQkFiSjtBQWNMQyxZQUFNLHFCQWREO0FBZUxDLGFBQU8scUJBZkY7QUFnQkxDLFVBQUksb0JBaEJDO0FBaUJMQyxjQUFRLHNCQWpCSDtBQWtCTEMsV0FBSyxvQkFsQkE7QUFtQkxDLGNBQVEsb0JBbkJIO0FBb0JMQyxlQUFTLG9CQXBCSjtBQXFCTEMsYUFBTyxPQXJCRjtBQXNCTEMsY0FBUSxPQXRCSDtB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YjtBQUNBSyxhQUFLSixTQUFMLEdBQWlCLE1BQWpCO0FBQ0FJLGFBQUtILElBQUwsR0FBWSxPQUFaO0FBQ0FHLGFBQUtYLE1BQUwsR0FBYyxNQUFkO0FBQ0FXLGFBQUtiLEtBQUwsR0FBYSxPQUFiO0FBQ0FhLGFBQUtaLE1BQUwsR0FBYyxPQUFkO0FBQ0Q7QUFsRU8sSzs7Ozs7NkJBb0VELENBQUc7Ozs7RUExR3FCLGVBQUtnQixJOztrQkFBbkJ6QyxLIiwiZmlsZSI6ImR1YW5mYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUt+S6uueahOmtheWKmydcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgZmlyc3Q6ICcuLi9pbWFnZS/kuKrmgKfmiY7lpLQuanBnJyxcbiAgICBsaWtlOiAnLi4vaW1hZ2Uv5bqV5YiH5Li45a2Q5aS0LmpwZWcnLFxuICAgIGZpbmlzaDogJy4uL2ltYWdlL+asp+e+juS4uOWtkOWktOaJjuWPkS5qcGVnJyxcbiAgICBjYW1lcmE6ICcuLi9pbWFnZS/mrKfnvo7ljbflj5EuanBnJyxcbiAgICByaW5nOiAnLi4vaW1hZ2Uv5qyn576O6ZW/5Y235Y+RLmpwZycsXG4gICAgbGlwc3RyaWNrOiAnLi4vaW1hZ2Uv5qyn576O6ZW/5Y235Y+RMS5wbmcnLFxuICAgIGZsb3dlcjogJy4uL2ltYWdlL+eZveiJsuWNt+WPkS5qcGcnLFxuICAgIGVsZGVyOiAnLi4vaW1hZ2Uv6Z2S5bm06ZW/5Y+RLmpwZycsXG4gICAgc21hbGw6ICcuLi9pbWFnZS/kuprmtLLljbflj5EuanBnJyxcbiAgICBsb29mOiAnLi4vaW1hZ2Uv5qyn576O5Y235Y+RMS5qcGcnLFxuICAgIHdlcHk6ICcuLi9pbWFnZS/mrKfnvo7ljbflj5EzLmpwZycsXG4gICAgZXh0ZW5kczogJy4uL2ltYWdlL+asp+e+juS4quaAp+a9rueUty5qcGcnLFxuICAgIHN0YXI6ICcuLi9pbWFnZS/kupTop5LmmJ8oMikucG5nJyxcbiAgICBzdGFyMTogJy4uL2ltYWdlL+S6lOinkuaYnygxKS5wbmcnLFxuICAgIGF4OiAnLi4vaW1hZ2Uv5Liq5oCn5Li45a2Q5aS0LmpwZycsXG4gICAgYm9yZGVyOiAnLi4vaW1hZ2Uv5Lqa5rSy5Liq5oCn5Li45a2Q5aS0LmpwZycsXG4gICAgY2RpOiAnLi4vaW1hZ2Uv5a6M5pW05Li45a2Q5aS0LmpwZycsXG4gICAgZGVmaW5lOiAnLi4vaW1hZ2Uv55S35aOr5Li45a2Q5aS0LmpwZycsXG4gICAgZGVmYXVsdDogJy4uL2ltYWdlL+eUt+Wjq+S4uOWtkOWktC5qcGcnLFxuICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIGNvbG9yMTogJ2JsYWNrJyxcbiAgICBjb2xvcjI6ICdibGFjaycsXG4gICAgd2lmZTogJ+asp+e+juWNt+WPkScsXG4gICAgc2lzdGVyOiAn5qyn576O6ZW/5Y235Y+RJyxcbiAgICBzaXN0ZXIxOiAn5qyn576O6ZW/5Y235Y+RJyxcbiAgICBtb3RoZXI6ICfnmb3oibLljbflj5EnLFxuICAgIHNvbjogJ+eZveiJsuWNt+WPkScsXG4gICAgd2VweXk6ICfkuKrmgKflpLTmiY4nLFxuICAgIGRpcmVjdGlvbjogJ+W6leWIh+S4uOWtkOWktCcsXG4gICAgZnJvbTogJ+asp+e+juS4uOWtkOWktOaJjuWPkSdcblxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgenVpcmUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZmlyc3QgPSAnLi4vaW1hZ2Uv5Liq5oCn5omO5aS0LmpwZydcbiAgICAgIHNlbGYubGlrZSA9ICcuLi9pbWFnZS/lupXliIfkuLjlrZDlpLQuanBlZydcbiAgICAgIHNlbGYuZmluaXNoID0gJy4uL2ltYWdlL+asp+e+juS4uOWtkOWktOaJjuWPkS5qcGVnJ1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vaW1hZ2Uv5qyn576O5Y235Y+RLmpwZydcbiAgICAgIHNlbGYucmluZyA9ICcuLi9pbWFnZS/mrKfnvo7plb/ljbflj5EuanBnJ1xuICAgICAgc2VsZi5saXBzdHJpY2sgPSAnLi4vaW1hZ2Uv5qyn576O6ZW/5Y235Y+RMS5wbmcnXG4gICAgICBzZWxmLmZsb3dlciA9ICcuLi9pbWFnZS/nmb3oibLljbflj5EuanBnJ1xuICAgICAgc2VsZi5lbGRlciA9ICcuLi9pbWFnZS/pnZLlubTplb/lj5EuanBnJ1xuICAgICAgc2VsZi53aWZlID0gJ+asp+e+juWNt+WPkSdcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+asp+e+jumVv+WNt+WPkSdcbiAgICAgIHNlbGYuc2lzdGVyMiA9ICfmrKfnvo7plb/ljbflj5EnXG4gICAgICBzZWxmLm1vdGhlciA9ICfnmb3oibLljbflj5EnXG4gICAgICBzZWxmLnNvbiA9ICfnmb3oibLljbflj5EnXG4gICAgICBzZWxmLndlcHl5ID0gJ+S4quaAp+WktOaJjidcbiAgICAgIHNlbGYuZGlyZWN0aW9uID0gJ+W6leWIh+S4uOWtkOWktCdcbiAgICAgIHNlbGYuZnJvbSA9ICfmrKfnvo7kuLjlrZDlpLTmiY7lj5EnXG4gICAgICBzZWxmLmNvbG9yID0gJ2dyYXknXG4gICAgICBzZWxmLmNvbG9yMSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IyID0gJ2JsYWNrJ1xuICAgIH0sXG4gICAgd2FuemkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZmlyc3QgPSAnLi4vaW1hZ2Uv5Liq5oCn5omO5aS0LmpwZydcbiAgICAgIHNlbGYubGlrZSA9ICcuLi9pbWFnZS/lupXliIfkuLjlrZDlpLQuanBlZydcbiAgICAgIHNlbGYuZmluaXNoID0gJy4uL2ltYWdlL+asp+e+juS4uOWtkOWktOaJjuWPkS5qcGVnJ1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vaW1hZ2Uv5Liq5oCn5Li45a2Q5aS0LmpwZydcbiAgICAgIHNlbGYucmluZyA9ICcuLi9pbWFnZS/kuprmtLLkuKrmgKfkuLjlrZDlpLQuanBnJ1xuICAgICAgc2VsZi5saXBzdHJpY2sgPSAnLi4vaW1hZ2Uv5a6M5pW05Li45a2Q5aS0LnBuZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJy4uL2ltYWdlL+eUt+Wjq+S4uOWtkOWktC5qcGcnXG4gICAgICBzZWxmLmVsZGVyID0gJy4uL2ltYWdlL+W4heawlOaJjuWPkS5wbmcnXG4gICAgICB0aGlzLndpZmUgPSAn5Liq5oCn5Li45a2Q5aS0J1xuICAgICAgdGhpcy5zaXN0ZXIgPSAn5Lqa5rSy5Liq5oCn5Li45a2Q5aS0J1xuICAgICAgdGhpcy5zaXN0ZXIxID0gJ+S6mua0suS4quaAp+S4uOWtkOWktCdcbiAgICAgIHRoaXMubW90aGVyID0gJ+WujOaVtOS4uOWtkOWktCdcbiAgICAgIHRoaXMuc29uID0gJ+eUt+Wjq+S4uOWtkOWktCdcbiAgICAgIHNlbGYud2VweXkgPSAn5Liq5oCn5omO5aS0J1xuICAgICAgc2VsZi5kaXJlY3Rpb24gPSAn5bqV5YiH5Li45a2Q5aS0J1xuICAgICAgc2VsZi5mcm9tID0gJ+asp+e+juS4uOWtkOWktOaJjuWPkSdcbiAgICAgIHNlbGYuY29sb3IxID0gJ2dyYXknXG4gICAgICBzZWxmLmNvbG9yID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnYmxhY2snXG4gICAgfSxcbiAgICBjKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmZpcnN0ID0gJy4uL2ltYWdlL+asp+e+juS4quaAp+a9rueUty5qcGcnXG4gICAgICBzZWxmLmxpa2UgPSAnLi4vaW1hZ2Uv5qyn576O5Y235Y+RMy5qcGcnXG4gICAgICBzZWxmLmZpbmlzaCA9ICcuLi9pbWFnZS/kuprmtLLljbflj5EuanBnJ1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vaW1hZ2Uv5qyn576O5Y235Y+RLmpwZydcbiAgICAgIHNlbGYucmluZyA9ICcuLi9pbWFnZS/mrKfnvo7plb/ljbflj5EuanBnJ1xuICAgICAgc2VsZi5saXBzdHJpY2sgPSAnLi4vaW1hZ2Uv5qyn576O6ZW/5Y235Y+RMS5wbmcnXG4gICAgICBzZWxmLmZsb3dlciA9ICcuLi9pbWFnZS/nmb3oibLljbflj5EuanBnJ1xuICAgICAgc2VsZi5lbGRlciA9ICcuLi9pbWFnZS/kuprmtLLplb/ljbflj5EuanBnJ1xuICAgICAgc2VsZi53ZXB5ID0gJ+asp+e+juS4quaAp+a9rueUtydcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+asp+e+juWNt+WPkSdcbiAgICAgIHNlbGYuc2lzdGVyMSA9ICfmrKfnvo7plb/lj5EnXG4gICAgICBzZWxmLm1vdGhlciA9ICfmrKfnvo7plb/ljbflj5EnXG4gICAgICBzZWxmLnNvbiA9ICfkuprmtLLljbflj5EnXG4gICAgICBzZWxmLndlcHl5ID0gJ+S6mua0sumVv+WNt+WPkSdcbiAgICAgIHNlbGYuZGlyZWN0aW9uID0gJ+asp+e+juWNt+WPkSdcbiAgICAgIHNlbGYuZnJvbSA9ICfkuprmtLLplb/ljbflj5EnXG4gICAgICBzZWxmLmNvbG9yMiA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IxID0gJ2JsYWNrJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==