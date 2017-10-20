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
      navigationBarTitleText: '礼物说'
    }, _this.data = {
      src: '',
      person: '../image/人.png',
      like: '../image/礼物.png',
      finish: '../image/对勾.png',
      camera: '../image/相机.png',
      ring: '../image/05_钻戒.png',
      lipstrick: '../image/口红.png',
      flower: '../image/经典花束.png',
      elder: '../image/衬衣.png',
      wallet: '../image/钱包.png',
      wife: '老婆/女票',
      sister: '姐妹/闺蜜',
      mother: '妈妈',
      pink: 'pink',
      red: 'black',
      solidred: 'red',
      solidpink: 'white'
    }, _this.methods = {
      she: function she() {
        var self = this;
        self.camera = '../image/相机.png';
        self.ring = '../image/05_钻戒.png';
        self.lipstrick = '../image/口红.png';
        self.flower = '../image/经典花束.png';
        self.elder = '../image/衬衣.png';
        self.wallet = '../image/钱包.png';
        self.sister = '姐妹/闺蜜';
        self.wife = '老婆/女票';
        self.mother = '妈妈';
        self.pink = 'pink';
        self.solidred = 'red';
        self.red = 'black';
        self.solidpink = 'white';
      },
      he: function he() {
        var self = this;
        self.camera = '../image/相机.png';
        self.ring = '../image/05_钻戒.png';
        self.wife = '老公/男票';
        self.lipstrick = '../image/手表.png';
        self.sister = '兄弟/基友';
        self.flower = '../image/眼镜.png';
        self.mother = '爸爸';
        self.elder = '../image/衬衣.png';
        self.wallet = '../image/钱包.png';
        self.red = 'red';
        self.solidpink = 'red';
        self.pink = 'black';
        self.solidred = 'white';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onload',
    value: function onload() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/fair'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhaXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsInBlcnNvbiIsImxpa2UiLCJmaW5pc2giLCJjYW1lcmEiLCJyaW5nIiwibGlwc3RyaWNrIiwiZmxvd2VyIiwiZWxkZXIiLCJ3YWxsZXQiLCJ3aWZlIiwic2lzdGVyIiwibW90aGVyIiwicGluayIsInJlZCIsInNvbGlkcmVkIiwic29saWRwaW5rIiwibWV0aG9kcyIsInNoZSIsInNlbGYiLCJoZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxnQkFGSDtBQUdMQyxZQUFNLGlCQUhEO0FBSUxDLGNBQVEsaUJBSkg7QUFLTEMsY0FBUSxpQkFMSDtBQU1MQyxZQUFNLG9CQU5EO0FBT0xDLGlCQUFXLGlCQVBOO0FBUUxDLGNBQVEsbUJBUkg7QUFTTEMsYUFBTyxpQkFURjtBQVVMQyxjQUFRLGlCQVZIO0FBV0xDLFlBQU0sT0FYRDtBQVlMQyxjQUFRLE9BWkg7QUFhTEMsY0FBUSxJQWJIO0FBY0xDLFlBQU0sTUFkRDtBQWVMQyxXQUFLLE9BZkE7QUFnQkxDLGdCQUFVLEtBaEJMO0FBaUJMQyxpQkFBVztBQWpCTixLLFFBbUJQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLZixNQUFMLEdBQWMsaUJBQWQ7QUFDQWUsYUFBS2QsSUFBTCxHQUFZLG9CQUFaO0FBQ0FjLGFBQUtiLFNBQUwsR0FBaUIsaUJBQWpCO0FBQ0FhLGFBQUtaLE1BQUwsR0FBYyxtQkFBZDtBQUNBWSxhQUFLWCxLQUFMLEdBQWEsaUJBQWI7QUFDQVcsYUFBS1YsTUFBTCxHQUFjLGlCQUFkO0FBQ0FVLGFBQUtSLE1BQUwsR0FBYyxPQUFkO0FBQ0FRLGFBQUtULElBQUwsR0FBWSxPQUFaO0FBQ0FTLGFBQUtQLE1BQUwsR0FBYyxJQUFkO0FBQ0FPLGFBQUtOLElBQUwsR0FBWSxNQUFaO0FBQ0FNLGFBQUtKLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQUksYUFBS0wsR0FBTCxHQUFXLE9BQVg7QUFDQUssYUFBS0gsU0FBTCxHQUFpQixPQUFqQjtBQUNELE9BaEJPO0FBaUJSSSxRQWpCUSxnQkFpQkg7QUFDSCxZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS2YsTUFBTCxHQUFjLGlCQUFkO0FBQ0FlLGFBQUtkLElBQUwsR0FBWSxvQkFBWjtBQUNBYyxhQUFLVCxJQUFMLEdBQVksT0FBWjtBQUNBUyxhQUFLYixTQUFMLEdBQWlCLGlCQUFqQjtBQUNBYSxhQUFLUixNQUFMLEdBQWMsT0FBZDtBQUNBUSxhQUFLWixNQUFMLEdBQWMsaUJBQWQ7QUFDQVksYUFBS1AsTUFBTCxHQUFjLElBQWQ7QUFDQU8sYUFBS1gsS0FBTCxHQUFhLGlCQUFiO0FBQ0FXLGFBQUtWLE1BQUwsR0FBYyxpQkFBZDtBQUNBVSxhQUFLTCxHQUFMLEdBQVcsS0FBWDtBQUNBSyxhQUFLSCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0FHLGFBQUtOLElBQUwsR0FBWSxPQUFaO0FBQ0FNLGFBQUtKLFFBQUwsR0FBZ0IsT0FBaEI7QUFDRDtBQWhDTyxLOzs7Ozs2QkFrQ0QsQ0FBRzs7OztFQXpEcUIsZUFBS00sSTs7a0JBQW5CekIsSyIsImZpbGUiOiJmYWlyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBwZXJzb246ICcuLi9pbWFnZS/kuroucG5nJyxcbiAgICBsaWtlOiAnLi4vaW1hZ2Uv56S854mpLnBuZycsXG4gICAgZmluaXNoOiAnLi4vaW1hZ2Uv5a+55Yu+LnBuZycsXG4gICAgY2FtZXJhOiAnLi4vaW1hZ2Uv55u45py6LnBuZycsXG4gICAgcmluZzogJy4uL2ltYWdlLzA1X+mSu+aIki5wbmcnLFxuICAgIGxpcHN0cmljazogJy4uL2ltYWdlL+WPo+e6oi5wbmcnLFxuICAgIGZsb3dlcjogJy4uL2ltYWdlL+e7j+WFuOiKseadny5wbmcnLFxuICAgIGVsZGVyOiAnLi4vaW1hZ2Uv6KGs6KGjLnBuZycsXG4gICAgd2FsbGV0OiAnLi4vaW1hZ2Uv6ZKx5YyFLnBuZycsXG4gICAgd2lmZTogJ+iAgeWphi/lpbPnpagnLFxuICAgIHNpc3RlcjogJ+WnkOWmuS/pl7ronJwnLFxuICAgIG1vdGhlcjogJ+WmiOWmiCcsXG4gICAgcGluazogJ3BpbmsnLFxuICAgIHJlZDogJ2JsYWNrJyxcbiAgICBzb2xpZHJlZDogJ3JlZCcsXG4gICAgc29saWRwaW5rOiAnd2hpdGUnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzaGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY2FtZXJhID0gJy4uL2ltYWdlL+ebuOacui5wbmcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2UvMDVf6ZK75oiSLnBuZydcbiAgICAgIHNlbGYubGlwc3RyaWNrID0gJy4uL2ltYWdlL+WPo+e6oi5wbmcnXG4gICAgICBzZWxmLmZsb3dlciA9ICcuLi9pbWFnZS/nu4/lhbjoirHmnZ8ucG5nJ1xuICAgICAgc2VsZi5lbGRlciA9ICcuLi9pbWFnZS/ooazooaMucG5nJ1xuICAgICAgc2VsZi53YWxsZXQgPSAnLi4vaW1hZ2Uv6ZKx5YyFLnBuZydcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+WnkOWmuS/pl7ronJwnXG4gICAgICBzZWxmLndpZmUgPSAn6ICB5amGL+Wls+elqCdcbiAgICAgIHNlbGYubW90aGVyID0gJ+WmiOWmiCdcbiAgICAgIHNlbGYucGluayA9ICdwaW5rJ1xuICAgICAgc2VsZi5zb2xpZHJlZCA9ICdyZWQnXG4gICAgICBzZWxmLnJlZCA9ICdibGFjaydcbiAgICAgIHNlbGYuc29saWRwaW5rID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgaGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY2FtZXJhID0gJy4uL2ltYWdlL+ebuOacui5wbmcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2UvMDVf6ZK75oiSLnBuZydcbiAgICAgIHNlbGYud2lmZSA9ICfogIHlhawv55S356WoJ1xuICAgICAgc2VsZi5saXBzdHJpY2sgPSAnLi4vaW1hZ2Uv5omL6KGoLnBuZydcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+WFhOW8ny/ln7rlj4snXG4gICAgICBzZWxmLmZsb3dlciA9ICcuLi9pbWFnZS/nnLzplZwucG5nJ1xuICAgICAgc2VsZi5tb3RoZXIgPSAn54i454i4J1xuICAgICAgc2VsZi5lbGRlciA9ICcuLi9pbWFnZS/ooazooaMucG5nJ1xuICAgICAgc2VsZi53YWxsZXQgPSAnLi4vaW1hZ2Uv6ZKx5YyFLnBuZydcbiAgICAgIHNlbGYucmVkID0gJ3JlZCdcbiAgICAgIHNlbGYuc29saWRwaW5rID0gJ3JlZCdcbiAgICAgIHNlbGYucGluayA9ICdibGFjaydcbiAgICAgIHNlbGYuc29saWRyZWQgPSAnd2hpdGUnXG4gICAgfVxuICB9XG4gIG9ubG9hZCgpIHsgfVxufVxuIl19