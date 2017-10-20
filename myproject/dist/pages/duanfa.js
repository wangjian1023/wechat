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
      first: '../image/gexingzhatou.jpg',
      like: '../image/diqiewanzi.jpeg',
      finish: '../image/oumeiwanzitou.jpeg',
      camera: '../image/oumeijuanfa.jpg',
      ring: '../image/oumeichangjuan.jpg',
      lipstrick: '../image/oumeichangjuan1.png',
      flower: '../image/baisejuanfa.jpg',
      elder: '../image/qingnianchangfa.jpg',
      small: '../image/yazhoujuanfa.jpg',
      loof: '../image/oumeijuanfa1.jpg',
      wepy: '../image/oumiejuanfa3.jpg',
      extends: '../image/dexingchannan.jpg',
      star: '../image/五角星(2).png',
      star1: '../image/五角星(1).png',
      ax: '../image/gexingwanzi.jpg',
      border: '../image/yazhougexing.jpg',
      cdi: '../image/wanzhengwanzi.jpg',
      define: '../image/nanshiwanzi.jpg',
      default: '../image/nanshiwanzi.jpg',
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
        self.first = '../image/gexingzhatou.jpg';
        self.like = '../image/diqiewanzi.jpeg';
        self.finish = '../image/oumeiwanzitou.jpeg';
        self.camera = '../image/oumeijuanfa.jpg';
        self.ring = '../image/oumeichangjuan.jpg';
        self.lipstrick = '../image/oumeichangjuan1.png';
        self.flower = '../image/baisejuanfa.jpg';
        self.elder = '../image/qingnianchangfa.jpg';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1YW5mYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiZmlyc3QiLCJsaWtlIiwiZmluaXNoIiwiY2FtZXJhIiwicmluZyIsImxpcHN0cmljayIsImZsb3dlciIsImVsZGVyIiwic21hbGwiLCJsb29mIiwid2VweSIsImV4dGVuZHMiLCJzdGFyIiwic3RhcjEiLCJheCIsImJvcmRlciIsImNkaSIsImRlZmluZSIsImRlZmF1bHQiLCJjb2xvciIsImNvbG9yMSIsImNvbG9yMiIsIndpZmUiLCJzaXN0ZXIiLCJzaXN0ZXIxIiwibW90aGVyIiwic29uIiwid2VweXkiLCJkaXJlY3Rpb24iLCJmcm9tIiwibWV0aG9kcyIsInp1aXJlIiwic2VsZiIsInNpc3RlcjIiLCJ3YW56aSIsImMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGFBQU8sMkJBRkY7QUFHTEMsWUFBTSwwQkFIRDtBQUlMQyxjQUFRLDZCQUpIO0FBS0xDLGNBQVEsMEJBTEg7QUFNTEMsWUFBTSw2QkFORDtBQU9MQyxpQkFBVyw4QkFQTjtBQVFMQyxjQUFRLDBCQVJIO0FBU0xDLGFBQU8sOEJBVEY7QUFVTEMsYUFBTywyQkFWRjtBQVdMQyxZQUFNLDJCQVhEO0FBWUxDLFlBQU0sMkJBWkQ7QUFhTEMsZUFBUyw0QkFiSjtBQWNMQyxZQUFNLHFCQWREO0FBZUxDLGFBQU8scUJBZkY7QUFnQkxDLFVBQUksMEJBaEJDO0FBaUJMQyxjQUFRLDJCQWpCSDtBQWtCTEMsV0FBSyw0QkFsQkE7QUFtQkxDLGNBQVEsMEJBbkJIO0FBb0JMQyxlQUFTLDBCQXBCSjtBQXFCTEMsYUFBTyxPQXJCRjtBQXNCTEMsY0FBUSxPQXRCSDtB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YjtBQUNBSyxhQUFLSixTQUFMLEdBQWlCLE1BQWpCO0FBQ0FJLGFBQUtILElBQUwsR0FBWSxPQUFaO0FBQ0FHLGFBQUtYLE1BQUwsR0FBYyxNQUFkO0FBQ0FXLGFBQUtiLEtBQUwsR0FBYSxPQUFiO0FBQ0FhLGFBQUtaLE1BQUwsR0FBYyxPQUFkO0FBQ0Q7QUFsRU8sSzs7Ozs7NkJBb0VELENBQUc7Ozs7RUExR3FCLGVBQUtnQixJOztrQkFBbkJ6QyxLIiwiZmlsZSI6ImR1YW5mYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUt+S6uueahOmtheWKmydcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgZmlyc3Q6ICcuLi9pbWFnZS9nZXhpbmd6aGF0b3UuanBnJyxcbiAgICBsaWtlOiAnLi4vaW1hZ2UvZGlxaWV3YW56aS5qcGVnJyxcbiAgICBmaW5pc2g6ICcuLi9pbWFnZS9vdW1laXdhbnppdG91LmpwZWcnLFxuICAgIGNhbWVyYTogJy4uL2ltYWdlL291bWVpanVhbmZhLmpwZycsXG4gICAgcmluZzogJy4uL2ltYWdlL291bWVpY2hhbmdqdWFuLmpwZycsXG4gICAgbGlwc3RyaWNrOiAnLi4vaW1hZ2Uvb3VtZWljaGFuZ2p1YW4xLnBuZycsXG4gICAgZmxvd2VyOiAnLi4vaW1hZ2UvYmFpc2VqdWFuZmEuanBnJyxcbiAgICBlbGRlcjogJy4uL2ltYWdlL3FpbmduaWFuY2hhbmdmYS5qcGcnLFxuICAgIHNtYWxsOiAnLi4vaW1hZ2UveWF6aG91anVhbmZhLmpwZycsXG4gICAgbG9vZjogJy4uL2ltYWdlL291bWVpanVhbmZhMS5qcGcnLFxuICAgIHdlcHk6ICcuLi9pbWFnZS9vdW1pZWp1YW5mYTMuanBnJyxcbiAgICBleHRlbmRzOiAnLi4vaW1hZ2UvZGV4aW5nY2hhbm5hbi5qcGcnLFxuICAgIHN0YXI6ICcuLi9pbWFnZS/kupTop5LmmJ8oMikucG5nJyxcbiAgICBzdGFyMTogJy4uL2ltYWdlL+S6lOinkuaYnygxKS5wbmcnLFxuICAgIGF4OiAnLi4vaW1hZ2UvZ2V4aW5nd2FuemkuanBnJyxcbiAgICBib3JkZXI6ICcuLi9pbWFnZS95YXpob3VnZXhpbmcuanBnJyxcbiAgICBjZGk6ICcuLi9pbWFnZS93YW56aGVuZ3dhbnppLmpwZycsXG4gICAgZGVmaW5lOiAnLi4vaW1hZ2UvbmFuc2hpd2FuemkuanBnJyxcbiAgICBkZWZhdWx0OiAnLi4vaW1hZ2UvbmFuc2hpd2FuemkuanBnJyxcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICBjb2xvcjE6ICdibGFjaycsXG4gICAgY29sb3IyOiAnYmxhY2snLFxuICAgIHdpZmU6ICfmrKfnvo7ljbflj5EnLFxuICAgIHNpc3RlcjogJ+asp+e+jumVv+WNt+WPkScsXG4gICAgc2lzdGVyMTogJ+asp+e+jumVv+WNt+WPkScsXG4gICAgbW90aGVyOiAn55m96Imy5Y235Y+RJyxcbiAgICBzb246ICfnmb3oibLljbflj5EnLFxuICAgIHdlcHl5OiAn5Liq5oCn5aS05omOJyxcbiAgICBkaXJlY3Rpb246ICflupXliIfkuLjlrZDlpLQnLFxuICAgIGZyb206ICfmrKfnvo7kuLjlrZDlpLTmiY7lj5EnXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHp1aXJlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmZpcnN0ID0gJy4uL2ltYWdlL2dleGluZ3poYXRvdS5qcGcnXG4gICAgICBzZWxmLmxpa2UgPSAnLi4vaW1hZ2UvZGlxaWV3YW56aS5qcGVnJ1xuICAgICAgc2VsZi5maW5pc2ggPSAnLi4vaW1hZ2Uvb3VtZWl3YW56aXRvdS5qcGVnJ1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vaW1hZ2Uvb3VtZWlqdWFuZmEuanBnJ1xuICAgICAgc2VsZi5yaW5nID0gJy4uL2ltYWdlL291bWVpY2hhbmdqdWFuLmpwZydcbiAgICAgIHNlbGYubGlwc3RyaWNrID0gJy4uL2ltYWdlL291bWVpY2hhbmdqdWFuMS5wbmcnXG4gICAgICBzZWxmLmZsb3dlciA9ICcuLi9pbWFnZS9iYWlzZWp1YW5mYS5qcGcnXG4gICAgICBzZWxmLmVsZGVyID0gJy4uL2ltYWdlL3FpbmduaWFuY2hhbmdmYS5qcGcnXG4gICAgICBzZWxmLndpZmUgPSAn5qyn576O5Y235Y+RJ1xuICAgICAgc2VsZi5zaXN0ZXIgPSAn5qyn576O6ZW/5Y235Y+RJ1xuICAgICAgc2VsZi5zaXN0ZXIyID0gJ+asp+e+jumVv+WNt+WPkSdcbiAgICAgIHNlbGYubW90aGVyID0gJ+eZveiJsuWNt+WPkSdcbiAgICAgIHNlbGYuc29uID0gJ+eZveiJsuWNt+WPkSdcbiAgICAgIHNlbGYud2VweXkgPSAn5Liq5oCn5aS05omOJ1xuICAgICAgc2VsZi5kaXJlY3Rpb24gPSAn5bqV5YiH5Li45a2Q5aS0J1xuICAgICAgc2VsZi5mcm9tID0gJ+asp+e+juS4uOWtkOWktOaJjuWPkSdcbiAgICAgIHNlbGYuY29sb3IgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IxID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnYmxhY2snXG4gICAgfSxcbiAgICB3YW56aSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5maXJzdCA9ICcuLi9pbWFnZS/kuKrmgKfmiY7lpLQuanBnJ1xuICAgICAgc2VsZi5saWtlID0gJy4uL2ltYWdlL+W6leWIh+S4uOWtkOWktC5qcGVnJ1xuICAgICAgc2VsZi5maW5pc2ggPSAnLi4vaW1hZ2Uv5qyn576O5Li45a2Q5aS05omO5Y+RLmpwZWcnXG4gICAgICBzZWxmLmNhbWVyYSA9ICcuLi9pbWFnZS/kuKrmgKfkuLjlrZDlpLQuanBnJ1xuICAgICAgc2VsZi5yaW5nID0gJy4uL2ltYWdlL+S6mua0suS4quaAp+S4uOWtkOWktC5qcGcnXG4gICAgICBzZWxmLmxpcHN0cmljayA9ICcuLi9pbWFnZS/lrozmlbTkuLjlrZDlpLQucG5nJ1xuICAgICAgc2VsZi5mbG93ZXIgPSAnLi4vaW1hZ2Uv55S35aOr5Li45a2Q5aS0LmpwZydcbiAgICAgIHNlbGYuZWxkZXIgPSAnLi4vaW1hZ2Uv5biF5rCU5omO5Y+RLnBuZydcbiAgICAgIHRoaXMud2lmZSA9ICfkuKrmgKfkuLjlrZDlpLQnXG4gICAgICB0aGlzLnNpc3RlciA9ICfkuprmtLLkuKrmgKfkuLjlrZDlpLQnXG4gICAgICB0aGlzLnNpc3RlcjEgPSAn5Lqa5rSy5Liq5oCn5Li45a2Q5aS0J1xuICAgICAgdGhpcy5tb3RoZXIgPSAn5a6M5pW05Li45a2Q5aS0J1xuICAgICAgdGhpcy5zb24gPSAn55S35aOr5Li45a2Q5aS0J1xuICAgICAgc2VsZi53ZXB5eSA9ICfkuKrmgKfmiY7lpLQnXG4gICAgICBzZWxmLmRpcmVjdGlvbiA9ICflupXliIfkuLjlrZDlpLQnXG4gICAgICBzZWxmLmZyb20gPSAn5qyn576O5Li45a2Q5aS05omO5Y+RJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMiA9ICdibGFjaydcbiAgICB9LFxuICAgIGMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZmlyc3QgPSAnLi4vaW1hZ2Uv5qyn576O5Liq5oCn5r2u55S3LmpwZydcbiAgICAgIHNlbGYubGlrZSA9ICcuLi9pbWFnZS/mrKfnvo7ljbflj5EzLmpwZydcbiAgICAgIHNlbGYuZmluaXNoID0gJy4uL2ltYWdlL+S6mua0suWNt+WPkS5qcGcnXG4gICAgICBzZWxmLmNhbWVyYSA9ICcuLi9pbWFnZS/mrKfnvo7ljbflj5EuanBnJ1xuICAgICAgc2VsZi5yaW5nID0gJy4uL2ltYWdlL+asp+e+jumVv+WNt+WPkS5qcGcnXG4gICAgICBzZWxmLmxpcHN0cmljayA9ICcuLi9pbWFnZS/mrKfnvo7plb/ljbflj5ExLnBuZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJy4uL2ltYWdlL+eZveiJsuWNt+WPkS5qcGcnXG4gICAgICBzZWxmLmVsZGVyID0gJy4uL2ltYWdlL+S6mua0sumVv+WNt+WPkS5qcGcnXG4gICAgICBzZWxmLndlcHkgPSAn5qyn576O5Liq5oCn5r2u55S3J1xuICAgICAgc2VsZi5zaXN0ZXIgPSAn5qyn576O5Y235Y+RJ1xuICAgICAgc2VsZi5zaXN0ZXIxID0gJ+asp+e+jumVv+WPkSdcbiAgICAgIHNlbGYubW90aGVyID0gJ+asp+e+jumVv+WNt+WPkSdcbiAgICAgIHNlbGYuc29uID0gJ+S6mua0suWNt+WPkSdcbiAgICAgIHNlbGYud2VweXkgPSAn5Lqa5rSy6ZW/5Y235Y+RJ1xuICAgICAgc2VsZi5kaXJlY3Rpb24gPSAn5qyn576O5Y235Y+RJ1xuICAgICAgc2VsZi5mcm9tID0gJ+S6mua0sumVv+WNt+WPkSdcbiAgICAgIHNlbGYuY29sb3IyID0gJ2dyYXknXG4gICAgICBzZWxmLmNvbG9yID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnYmxhY2snXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHsgfVxufVxuIl19