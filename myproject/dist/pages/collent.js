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
      navigationBarTitleText: '男人流行发型指南攻略'
    }, _this.data = {
      src: '',
      avatarUrl: '',
      nickname: '',
      height: 0,
      developer: '../image/developer.png',
      product: '../image/product.png',
      tickling: '../image/tickling.png'
    }, _this.methods = {
      a: function a() {
        _wepy2.default.navigateTo({
          url: '../pages/love'
        });
      },
      b: function b() {
        _wepy2.default.navigateTo({
          url: '../pages/feedback'
        });
      },
      c: function c() {
        _wepy2.default.navigateTo({
          url: '../pages/ours'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickname = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/collent'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImF2YXRhclVybCIsIm5pY2tuYW1lIiwiaGVpZ2h0IiwiZGV2ZWxvcGVyIiwicHJvZHVjdCIsInRpY2tsaW5nIiwibWV0aG9kcyIsImEiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYiIsImMiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJuaWNrTmFtZSIsIndpbmRvd0hlaWdodCIsIndpZHRoIiwid2luZG93V2lkdGgiLCJnZXRTeXN0ZW1JbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxpQkFBVyxFQUZOO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsY0FBUSxDQUpIO0FBS0xDLGlCQUFXLHdCQUxOO0FBTUxDLGVBQVMsc0JBTko7QUFPTEMsZ0JBQVU7QUFQTCxLLFFBVVBDLE8sR0FBVTtBQUNSQyxPQURRLGVBQ0o7QUFDRix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLE9BTlEsZUFNSjtBQUNGLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUkUsT0FYUSxlQVdKO0FBQ0YsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFmTyxLOzs7Ozs2QkFpQkQ7QUFDUCxVQUFJRyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxlQUFLWCxRQUFMLEdBQWdCYyxJQUFJQyxRQUFKLENBQWFDLFFBQTdCO0FBQ0FMLGVBQUtaLFNBQUwsR0FBaUJlLElBQUlDLFFBQUosQ0FBYWhCLFNBQTlCO0FBQ0FZLGVBQUtWLE1BQUwsR0FBY2EsSUFBSUcsWUFBbEI7QUFDQU4sZUFBS08sS0FBTCxHQUFhSixJQUFJSyxXQUFqQjtBQUNEO0FBTmMsT0FBakI7QUFRQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQlAsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCxlQUFLVixNQUFMLEdBQWNhLElBQUlHLFlBQWxCO0FBQ0FOLGVBQUtPLEtBQUwsR0FBYUosSUFBSUssV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBL0NnQyxlQUFLRSxJOztrQkFBbkIzQixLIiwiZmlsZSI6ImNvbGxlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlLfkurrmtYHooYzlj5HlnovmjIfljZfmlLvnlaUnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja25hbWU6ICcnLFxuICAgIGhlaWdodDogMCxcbiAgICBkZXZlbG9wZXI6ICcuLi9pbWFnZS9kZXZlbG9wZXIucG5nJyxcbiAgICBwcm9kdWN0OiAnLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgIHRpY2tsaW5nOiAnLi4vaW1hZ2UvdGlja2xpbmcucG5nJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbG92ZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvZmVlZGJhY2snXG4gICAgICB9KVxuICAgIH0sXG4gICAgYygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL291cnMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrbmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==