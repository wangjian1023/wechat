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
        this.wife = '个性丸子头';
        this.sister = '亚洲个性丸子头';
        this.sister1 = '亚洲丸子头';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1YW5mYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiY29sb3IiLCJjb2xvcjEiLCJjb2xvcjIiLCJ3aWZlIiwic2lzdGVyIiwic2lzdGVyMSIsIm1vdGhlciIsInNvbiIsIndlcHl5IiwiZGlyZWN0aW9uIiwiZnJvbSIsIm1ldGhvZHMiLCJ6dWlyZSIsInNlbGYiLCJzaXN0ZXIyIiwid2FuemkiLCJjIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsYUFBTyxPQUZGO0FBR0xDLGNBQVEsT0FISDtBQUlMQyxjQUFRLE9BSkg7QUFLTEMsWUFBTSxNQUxEO0FBTUxDLGNBQVEsT0FOSDtBQU9MQyxlQUFTLE9BUEo7QUFRTEMsY0FBUSxNQVJIO0FBU0xDLFdBQUssTUFUQTtBQVVMQyxhQUFPLE1BVkY7QUFXTEMsaUJBQVcsT0FYTjtBQVlMQyxZQUFNOztBQVpELEssUUFlUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1YsSUFBTCxHQUFZLE1BQVo7QUFDQVUsYUFBS1QsTUFBTCxHQUFjLE9BQWQ7QUFDQVMsYUFBS0MsT0FBTCxHQUFlLE9BQWY7QUFDQUQsYUFBS1AsTUFBTCxHQUFjLE1BQWQ7QUFDQU8sYUFBS04sR0FBTCxHQUFXLE1BQVg7QUFDQU0sYUFBS0wsS0FBTCxHQUFhLE1BQWI7QUFDQUssYUFBS0osU0FBTCxHQUFpQixPQUFqQjtBQUNBSSxhQUFLSCxJQUFMLEdBQVksU0FBWjtBQUNBRyxhQUFLYixLQUFMLEdBQWEsTUFBYjtBQUNBYSxhQUFLWixNQUFMLEdBQWMsT0FBZDtBQUNBWSxhQUFLWCxNQUFMLEdBQWMsT0FBZDtBQUNELE9BZE87QUFlUmEsV0FmUSxtQkFlQTtBQUNOLFlBQUlGLE9BQU8sSUFBWDtBQUNBLGFBQUtWLElBQUwsR0FBWSxPQUFaO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLFNBQWQ7QUFDQSxhQUFLQyxPQUFMLEdBQWUsT0FBZjtBQUNBLGFBQUtDLE1BQUwsR0FBYyxPQUFkO0FBQ0EsYUFBS0MsR0FBTCxHQUFXLE9BQVg7QUFDQU0sYUFBS0wsS0FBTCxHQUFhLE1BQWI7QUFDQUssYUFBS0osU0FBTCxHQUFpQixPQUFqQjtBQUNBSSxhQUFLSCxJQUFMLEdBQVksU0FBWjtBQUNBRyxhQUFLWixNQUFMLEdBQWMsTUFBZDtBQUNBWSxhQUFLYixLQUFMLEdBQWEsT0FBYjtBQUNBYSxhQUFLWCxNQUFMLEdBQWMsT0FBZDtBQUNELE9BNUJPO0FBNkJSYyxPQTdCUSxlQTZCSjtBQUNGLFlBQUlILE9BQU8sSUFBWDtBQUNBQSxhQUFLSSxJQUFMLEdBQVksUUFBWjtBQUNBSixhQUFLVCxNQUFMLEdBQWMsTUFBZDtBQUNBUyxhQUFLUixPQUFMLEdBQWUsTUFBZjtBQUNBUSxhQUFLUCxNQUFMLEdBQWMsT0FBZDtBQUNBTyxhQUFLTixHQUFMLEdBQVcsTUFBWDtBQUNBTSxhQUFLTCxLQUFMLEdBQWEsT0FBYjtBQUNBSyxhQUFLSixTQUFMLEdBQWlCLE1BQWpCO0FBQ0FJLGFBQUtILElBQUwsR0FBWSxPQUFaO0FBQ0FHLGFBQUtYLE1BQUwsR0FBYyxNQUFkO0FBQ0FXLGFBQUtiLEtBQUwsR0FBYSxPQUFiO0FBQ0FhLGFBQUtaLE1BQUwsR0FBYyxPQUFkO0FBQ0Q7QUExQ08sSzs7Ozs7NkJBNENELENBQUc7Ozs7RUEvRHFCLGVBQUtpQixJOztrQkFBbkJ2QixLIiwiZmlsZSI6ImR1YW5mYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUt+S6uueahOmtheWKmydcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgY29sb3IxOiAnYmxhY2snLFxuICAgIGNvbG9yMjogJ2JsYWNrJyxcbiAgICB3aWZlOiAn5qyn576O5Y235Y+RJyxcbiAgICBzaXN0ZXI6ICfmrKfnvo7plb/ljbflj5EnLFxuICAgIHNpc3RlcjE6ICfmrKfnvo7plb/ljbflj5EnLFxuICAgIG1vdGhlcjogJ+eZveiJsuWNt+WPkScsXG4gICAgc29uOiAn55m96Imy5Y235Y+RJyxcbiAgICB3ZXB5eTogJ+S4quaAp+WktOaJjicsXG4gICAgZGlyZWN0aW9uOiAn5bqV5YiH5Li45a2Q5aS0JyxcbiAgICBmcm9tOiAn5qyn576O5Li45a2Q5aS05omO5Y+RJ1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB6dWlyZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi53aWZlID0gJ+asp+e+juWNt+WPkSdcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+asp+e+jumVv+WNt+WPkSdcbiAgICAgIHNlbGYuc2lzdGVyMiA9ICfmrKfnvo7plb/ljbflj5EnXG4gICAgICBzZWxmLm1vdGhlciA9ICfnmb3oibLljbflj5EnXG4gICAgICBzZWxmLnNvbiA9ICfnmb3oibLljbflj5EnXG4gICAgICBzZWxmLndlcHl5ID0gJ+S4quaAp+WktOaJjidcbiAgICAgIHNlbGYuZGlyZWN0aW9uID0gJ+W6leWIh+S4uOWtkOWktCdcbiAgICAgIHNlbGYuZnJvbSA9ICfmrKfnvo7kuLjlrZDlpLTmiY7lj5EnXG4gICAgICBzZWxmLmNvbG9yID0gJ2dyYXknXG4gICAgICBzZWxmLmNvbG9yMSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IyID0gJ2JsYWNrJ1xuICAgIH0sXG4gICAgd2FuemkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHRoaXMud2lmZSA9ICfkuKrmgKfkuLjlrZDlpLQnXG4gICAgICB0aGlzLnNpc3RlciA9ICfkuprmtLLkuKrmgKfkuLjlrZDlpLQnXG4gICAgICB0aGlzLnNpc3RlcjEgPSAn5Lqa5rSy5Li45a2Q5aS0J1xuICAgICAgdGhpcy5tb3RoZXIgPSAn5a6M5pW05Li45a2Q5aS0J1xuICAgICAgdGhpcy5zb24gPSAn55S35aOr5Li45a2Q5aS0J1xuICAgICAgc2VsZi53ZXB5eSA9ICfkuKrmgKfmiY7lpLQnXG4gICAgICBzZWxmLmRpcmVjdGlvbiA9ICflupXliIfkuLjlrZDlpLQnXG4gICAgICBzZWxmLmZyb20gPSAn5qyn576O5Li45a2Q5aS05omO5Y+RJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMiA9ICdibGFjaydcbiAgICB9LFxuICAgIGMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYud2VweSA9ICfmrKfnvo7kuKrmgKfmva7nlLcnXG4gICAgICBzZWxmLnNpc3RlciA9ICfmrKfnvo7ljbflj5EnXG4gICAgICBzZWxmLnNpc3RlcjEgPSAn5qyn576O6ZW/5Y+RJ1xuICAgICAgc2VsZi5tb3RoZXIgPSAn5qyn576O6ZW/5Y235Y+RJ1xuICAgICAgc2VsZi5zb24gPSAn5Lqa5rSy5Y235Y+RJ1xuICAgICAgc2VsZi53ZXB5eSA9ICfkuprmtLLplb/ljbflj5EnXG4gICAgICBzZWxmLmRpcmVjdGlvbiA9ICfmrKfnvo7ljbflj5EnXG4gICAgICBzZWxmLmZyb20gPSAn5Lqa5rSy6ZW/5Y235Y+RJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMSA9ICdibGFjaydcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkgeyB9XG59XG4iXX0=