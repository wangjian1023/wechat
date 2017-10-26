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

var Collent = function (_wepy$page) {
  _inherits(Collent, _wepy$page);

  function Collent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Collent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collent.__proto__ || Object.getPrototypeOf(Collent)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '男士流行发型指南攻略'
    }, _this.data = {
      src: '',
      avatarUrl: '',
      nickname: '',
      height: 0,
      width: 0,
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

  _createClass(Collent, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickname = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
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

  return Collent;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Collent , 'pages/collent'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlbnQuanMiXSwibmFtZXMiOlsiQ29sbGVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiYXZhdGFyVXJsIiwibmlja25hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsImRldmVsb3BlciIsInByb2R1Y3QiLCJ0aWNrbGluZyIsIm1ldGhvZHMiLCJhIiwibmF2aWdhdGVUbyIsInVybCIsImIiLCJjIiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGlCQUFXLEVBRk47QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxjQUFRLENBSkg7QUFLTEMsYUFBTyxDQUxGO0FBTUxDLGlCQUFXLHdCQU5OO0FBT0xDLGVBQVMsc0JBUEo7QUFRTEMsZ0JBQVU7QUFSTCxLLFFBV1BDLE8sR0FBVTtBQUNSQyxPQURRLGVBQ0o7QUFDRix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLE9BTlEsZUFNSjtBQUNGLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUkUsT0FYUSxlQVdKO0FBQ0YsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFmTyxLOzs7Ozs2QkFpQkQ7QUFDUCxVQUFJRyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxlQUFLWixRQUFMLEdBQWdCZSxJQUFJQyxRQUFKLENBQWFDLFFBQTdCO0FBQ0FMLGVBQUtiLFNBQUwsR0FBaUJnQixJQUFJQyxRQUFKLENBQWFqQixTQUE5QjtBQUNEO0FBSmMsT0FBakI7QUFNQSxxQkFBS21CLGFBQUwsQ0FBbUI7QUFDakJKLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS1gsTUFBTCxHQUFjYyxJQUFJSSxZQUFsQjtBQUNBUCxlQUFLVixLQUFMLEdBQWFhLElBQUlLLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQTlDa0MsZUFBS0MsSTs7a0JBQXJCM0IsTyIsImZpbGUiOiJjb2xsZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZW50IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlLflo6vmtYHooYzlj5HlnovmjIfljZfmlLvnlaUnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja25hbWU6ICcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBkZXZlbG9wZXI6ICcuLi9pbWFnZS9kZXZlbG9wZXIucG5nJyxcbiAgICBwcm9kdWN0OiAnLi4vaW1hZ2UvcHJvZHVjdC5wbmcnLFxuICAgIHRpY2tsaW5nOiAnLi4vaW1hZ2UvdGlja2xpbmcucG5nJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbG92ZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvZmVlZGJhY2snXG4gICAgICB9KVxuICAgIH0sXG4gICAgYygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL291cnMnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrbmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==