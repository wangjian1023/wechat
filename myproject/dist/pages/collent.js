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
      height: '',
      width: '',
      developer: '../image/developer.png',
      product: '../image/product.png',
      tickling: '../image/tickling.png',
      number: '../image/number.png',
      number1: '../image/number.png',
      figure: '../image/number.png'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlbnQuanMiXSwibmFtZXMiOlsiQ29sbGVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiYXZhdGFyVXJsIiwibmlja25hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsImRldmVsb3BlciIsInByb2R1Y3QiLCJ0aWNrbGluZyIsIm51bWJlciIsIm51bWJlcjEiLCJmaWd1cmUiLCJtZXRob2RzIiwiYSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJiIiwiYyIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxpQkFBVyxFQUZOO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsY0FBUSxFQUpIO0FBS0xDLGFBQU8sRUFMRjtBQU1MQyxpQkFBVyx3QkFOTjtBQU9MQyxlQUFTLHNCQVBKO0FBUUxDLGdCQUFVLHVCQVJMO0FBU0xDLGNBQVEscUJBVEg7QUFVTEMsZUFBUyxxQkFWSjtBQVdMQyxjQUFRO0FBWEgsSyxRQWNQQyxPLEdBQVU7QUFDUkMsT0FEUSxlQUNKO0FBQ0YsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxPQU5RLGVBTUo7QUFDRix1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVZPO0FBV1JFLE9BWFEsZUFXSjtBQUNGLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBZk8sSzs7Ozs7NkJBaUJEO0FBQ1AsVUFBSUcsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS2YsUUFBTCxHQUFnQmtCLElBQUlDLFFBQUosQ0FBYUMsUUFBN0I7QUFDQUwsZUFBS2hCLFNBQUwsR0FBaUJtQixJQUFJQyxRQUFKLENBQWFwQixTQUE5QjtBQUNEO0FBSmMsT0FBakI7QUFNQSxxQkFBS3NCLGFBQUwsQ0FBbUI7QUFDakJKLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS2QsTUFBTCxHQUFjaUIsSUFBSUksWUFBbEI7QUFDQVAsZUFBS2IsS0FBTCxHQUFhZ0IsSUFBSUssV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBakRrQyxlQUFLQyxJOztrQkFBckI5QixPIiwiZmlsZSI6ImNvbGxlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUt+Wjq+a1geihjOWPkeWei+aMh+WNl+aUu+eVpSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBuaWNrbmFtZTogJycsXG4gICAgaGVpZ2h0OiAnJyxcbiAgICB3aWR0aDogJycsXG4gICAgZGV2ZWxvcGVyOiAnLi4vaW1hZ2UvZGV2ZWxvcGVyLnBuZycsXG4gICAgcHJvZHVjdDogJy4uL2ltYWdlL3Byb2R1Y3QucG5nJyxcbiAgICB0aWNrbGluZzogJy4uL2ltYWdlL3RpY2tsaW5nLnBuZycsXG4gICAgbnVtYmVyOiAnLi4vaW1hZ2UvbnVtYmVyLnBuZycsXG4gICAgbnVtYmVyMTogJy4uL2ltYWdlL251bWJlci5wbmcnLFxuICAgIGZpZ3VyZTogJy4uL2ltYWdlL251bWJlci5wbmcnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGEoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9sb3ZlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9mZWVkYmFjaydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvb3VycydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tuYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19