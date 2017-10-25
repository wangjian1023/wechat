'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _skip = require('./../util/skip.js');

var _skip2 = _interopRequireDefault(_skip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage = function (_wepy$page) {
  _inherits(Homepage, _wepy$page);

  function Homepage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Homepage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Homepage.__proto__ || Object.getPrototypeOf(Homepage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '男士发型流行指南攻略',
      enablePullDownRefresh: 'true'
    }, _this.data = {
      src: '',
      imgUrls: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2274039599,3072481607&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3079180481,3741367824&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3221139637,667377460&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3216406813,3015540889&fm=27&gp=0.jpg'],
      describe: '',
      content: null,
      indicatorDots: true,
      color: 'white',
      color1: 'gray',
      height: '',
      width: 0
    }, _this.methods = {
      display: function display(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        console.log(item);
        _wepy2.default.navigateTo({
          url: './display?recPhoto=' + item.recPhoto + '&recName=' + item.recName + '&describe=' + item.describe
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Homepage, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.content = _skip2.default;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Homepage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Homepage , 'pages/dynamic'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMuanMiXSwibmFtZXMiOlsiSG9tZXBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInNyYyIsImltZ1VybHMiLCJkZXNjcmliZSIsImNvbnRlbnQiLCJpbmRpY2F0b3JEb3RzIiwiY29sb3IiLCJjb2xvcjEiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJkaXNwbGF5IiwiZSIsInNlbGYiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZWNQaG90byIsInJlY05hbWUiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsWUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxlQUFTLENBQ1AsZ0dBRE8sRUFFUCxnR0FGTyxFQUdQLCtGQUhPLEVBSVAsZ0dBSk8sQ0FGSjtBQVFMQyxnQkFBVSxFQVJMO0FBU0xDLGVBQVMsSUFUSjtBQVVMQyxxQkFBZSxJQVZWO0FBV0xDLGFBQU8sT0FYRjtBQVlMQyxjQUFRLE1BWkg7QUFhTEMsY0FBUSxFQWJIO0FBY0xDLGFBQU87QUFkRixLLFFBZ0JQQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS1QsT0FBTCxDQUFhUSxFQUFFRyxhQUFGLENBQWdCQyxFQUE3QixDQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlKLElBQVo7QUFDQSx1QkFBS0ssVUFBTCxDQUFnQjtBQUNkQyx1Q0FBMkJOLEtBQUtPLFFBQWhDLGlCQUFvRFAsS0FBS1EsT0FBekQsa0JBQTZFUixLQUFLWDtBQURwRSxTQUFoQjtBQUdEO0FBUk8sSzs7Ozs7NkJBVUQ7QUFDUCxVQUFJVSxPQUFPLElBQVg7QUFDQUEsV0FBS1QsT0FBTDtBQUNBLHFCQUFLbUIsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYWixlQUFLTCxNQUFMLEdBQWNpQixJQUFJQyxZQUFsQjtBQUNBYixlQUFLSixLQUFMLEdBQWFnQixJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUF4Q21DLGVBQUtDLEk7O2tCQUF0QmhDLFEiLCJmaWxlIjoiZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBza2lwIGZyb20gJy4uL3V0aWwvc2tpcC5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVwYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlLflo6vlj5HlnovmtYHooYzmjIfljZfmlLvnlaUnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogJ3RydWUnXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTIyNzQwMzk1OTksMzA3MjQ4MTYwNyZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTMwNzkxODA0ODEsMzc0MTM2NzgyNCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTMyMjExMzk2MzcsNjY3Mzc3NDYwJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MzIxNjQwNjgxMywzMDE1NTQwODg5JmZtPTI3JmdwPTAuanBnJ1xuICAgIF0sXG4gICAgZGVzY3JpYmU6ICcnLFxuICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBjb2xvcjE6ICdncmF5JyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBkaXNwbGF5KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGl0ZW0gPSBzZWxmLmNvbnRlbnRbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vZGlzcGxheT9yZWNQaG90bz0ke2l0ZW0ucmVjUGhvdG99JnJlY05hbWU9JHtpdGVtLnJlY05hbWV9JmRlc2NyaWJlPSR7aXRlbS5kZXNjcmliZX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb250ZW50ID0gc2tpcFxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==