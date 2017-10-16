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
      avatarUrl: '',
      nickname: ''
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
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/collent'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImF2YXRhclVybCIsIm5pY2tuYW1lIiwibWV0aG9kcyIsImEiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYiIsImMiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJuaWNrTmFtZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsaUJBQVcsRUFGTjtBQUdMQyxnQkFBVTtBQUhMLEssUUFNUEMsTyxHQUFVO0FBQ1JDLE9BRFEsZUFDSjtBQUNGLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsT0FOUSxlQU1KO0FBQ0YsdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FWTztBQVdSRSxPQVhRLGVBV0o7QUFDRix1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQWZPLEs7Ozs7OzZCQWlCRDtBQUNQLFVBQUlHLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILGVBQUtQLFFBQUwsR0FBZ0JVLElBQUlDLFFBQUosQ0FBYUMsUUFBN0I7QUFDQUwsZUFBS1IsU0FBTCxHQUFpQlcsSUFBSUMsUUFBSixDQUFhWixTQUE5QjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQW5DZ0MsZUFBS2MsSTs7a0JBQW5CbkIsSyIsImZpbGUiOiJjb2xsZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55S35Lq655qE6a2F5YqbJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tuYW1lOiAnJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbG92ZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvZmVlZGJhY2snXG4gICAgICB9KVxuICAgIH0sXG4gICAgYygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL291cnMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrbmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=