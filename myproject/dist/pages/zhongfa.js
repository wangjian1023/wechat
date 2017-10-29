'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../util/list.js');

var _list2 = _interopRequireDefault(_list);

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
      navigationBarTitleText: '男士流行发型指南攻略'
    }, _this.data = {
      src: '',
      color: 'gray',
      color1: '#303030',
      color2: '#303030',
      color3: '#303030',
      color4: '#303030',
      color5: '#303030',
      color6: '#303030',
      height: 0,
      width: 0,
      content: null
    }, _this.methods = {
      zuire: function zuire() {
        var self = this;
        self.color = 'gray';
        self.color1 = '#303030';
        self.color2 = '#303030';
        self.color3 = '#303030';
        self.color4 = '#303030';
        self.color5 = '#303030';
        self.color6 = '#303030';
      },
      data1: function data1() {
        var self = this;
        self.color = '#303030';
        self.color1 = 'gray';
        self.color2 = '#303030';
        self.color3 = '#303030';
        self.color4 = '#303030';
        self.color5 = '#303030';
        self.color6 = '#303030';
      },
      egg: function egg() {
        var self = this;
        self.color = '#303030';
        self.color1 = '#303030';
        self.color2 = 'gray';
        self.color3 = '#303030';
        self.color4 = '#303030';
        self.color5 = '#303030';
        self.color6 = '#303030';
      },
      props: function props() {
        var self = this;
        self.color = '#303030';
        self.color1 = '#303030';
        self.color2 = '#303030';
        self.color3 = 'gray';
        self.color4 = '#303030';
        self.color5 = '#303030';
        self.color6 = '#303030';
      },
      script: function script() {
        var self = this;
        self.color = '#303030';
        self.color1 = '#303030';
        self.color2 = '#303030';
        self.color3 = '#303030';
        self.color4 = 'gray';
        self.color5 = '#303030';
        self.color6 = '#303030';
      },
      method: function method() {
        var self = this;
        self.color = '#303030';
        self.color1 = '#303030';
        self.color2 = '#303030';
        self.color3 = '#303030';
        self.color4 = '#303030';
        self.color5 = 'gray';
        self.color6 = '#303030';
      },
      less: function less() {
        var self = this;
        self.color = '#303030';
        self.color1 = '#303030';
        self.color2 = '#303030';
        self.color3 = '#303030';
        self.color4 = '#303030';
        self.color5 = '#303030';
        self.color6 = 'gray';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.content = _list2.default;
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/zhongfa'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpob25nZmEuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImNvbG9yIiwiY29sb3IxIiwiY29sb3IyIiwiY29sb3IzIiwiY29sb3I0IiwiY29sb3I1IiwiY29sb3I2IiwiaGVpZ2h0Iiwid2lkdGgiLCJjb250ZW50IiwibWV0aG9kcyIsInp1aXJlIiwic2VsZiIsImRhdGExIiwiZWdnIiwicHJvcHMiLCJzY3JpcHQiLCJtZXRob2QiLCJsZXNzIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxhQUFPLE1BRkY7QUFHTEMsY0FBUSxTQUhIO0FBSUxDLGNBQVEsU0FKSDtBQUtMQyxjQUFRLFNBTEg7QUFNTEMsY0FBUSxTQU5IO0FBT0xDLGNBQVEsU0FQSDtBQVFMQyxjQUFRLFNBUkg7QUFTTEMsY0FBUSxDQVRIO0FBVUxDLGFBQU8sQ0FWRjtBQVdMQyxlQUFTO0FBWEosSyxRQWFQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLWixLQUFMLEdBQWEsTUFBYjtBQUNBWSxhQUFLWCxNQUFMLEdBQWMsU0FBZDtBQUNBVyxhQUFLVixNQUFMLEdBQWMsU0FBZDtBQUNBVSxhQUFLVCxNQUFMLEdBQWMsU0FBZDtBQUNBUyxhQUFLUixNQUFMLEdBQWMsU0FBZDtBQUNBUSxhQUFLUCxNQUFMLEdBQWMsU0FBZDtBQUNBTyxhQUFLTixNQUFMLEdBQWMsU0FBZDtBQUNELE9BVk87QUFZUk8sV0FaUSxtQkFZQTtBQUNOLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLWixLQUFMLEdBQWEsU0FBYjtBQUNBWSxhQUFLWCxNQUFMLEdBQWMsTUFBZDtBQUNBVyxhQUFLVixNQUFMLEdBQWMsU0FBZDtBQUNBVSxhQUFLVCxNQUFMLEdBQWMsU0FBZDtBQUNBUyxhQUFLUixNQUFMLEdBQWMsU0FBZDtBQUNBUSxhQUFLUCxNQUFMLEdBQWMsU0FBZDtBQUNBTyxhQUFLTixNQUFMLEdBQWMsU0FBZDtBQUNELE9BckJPO0FBdUJSUSxTQXZCUSxpQkF1QkY7QUFDSixZQUFJRixPQUFPLElBQVg7QUFDQUEsYUFBS1osS0FBTCxHQUFhLFNBQWI7QUFDQVksYUFBS1gsTUFBTCxHQUFjLFNBQWQ7QUFDQVcsYUFBS1YsTUFBTCxHQUFjLE1BQWQ7QUFDQVUsYUFBS1QsTUFBTCxHQUFjLFNBQWQ7QUFDQVMsYUFBS1IsTUFBTCxHQUFjLFNBQWQ7QUFDQVEsYUFBS1AsTUFBTCxHQUFjLFNBQWQ7QUFDQU8sYUFBS04sTUFBTCxHQUFjLFNBQWQ7QUFDRCxPQWhDTztBQWtDUlMsV0FsQ1EsbUJBa0NBO0FBQ04sWUFBSUgsT0FBTyxJQUFYO0FBQ0FBLGFBQUtaLEtBQUwsR0FBYSxTQUFiO0FBQ0FZLGFBQUtYLE1BQUwsR0FBYyxTQUFkO0FBQ0FXLGFBQUtWLE1BQUwsR0FBYyxTQUFkO0FBQ0FVLGFBQUtULE1BQUwsR0FBYyxNQUFkO0FBQ0FTLGFBQUtSLE1BQUwsR0FBYyxTQUFkO0FBQ0FRLGFBQUtQLE1BQUwsR0FBYyxTQUFkO0FBQ0FPLGFBQUtOLE1BQUwsR0FBYyxTQUFkO0FBQ0QsT0EzQ087QUE2Q1JVLFlBN0NRLG9CQTZDQztBQUNQLFlBQUlKLE9BQU8sSUFBWDtBQUNBQSxhQUFLWixLQUFMLEdBQWEsU0FBYjtBQUNBWSxhQUFLWCxNQUFMLEdBQWMsU0FBZDtBQUNBVyxhQUFLVixNQUFMLEdBQWMsU0FBZDtBQUNBVSxhQUFLVCxNQUFMLEdBQWMsU0FBZDtBQUNBUyxhQUFLUixNQUFMLEdBQWMsTUFBZDtBQUNBUSxhQUFLUCxNQUFMLEdBQWMsU0FBZDtBQUNBTyxhQUFLTixNQUFMLEdBQWMsU0FBZDtBQUNELE9BdERPO0FBd0RSVyxZQXhEUSxvQkF3REM7QUFDUCxZQUFJTCxPQUFPLElBQVg7QUFDQUEsYUFBS1osS0FBTCxHQUFhLFNBQWI7QUFDQVksYUFBS1gsTUFBTCxHQUFjLFNBQWQ7QUFDQVcsYUFBS1YsTUFBTCxHQUFjLFNBQWQ7QUFDQVUsYUFBS1QsTUFBTCxHQUFjLFNBQWQ7QUFDQVMsYUFBS1IsTUFBTCxHQUFjLFNBQWQ7QUFDQVEsYUFBS1AsTUFBTCxHQUFjLE1BQWQ7QUFDQU8sYUFBS04sTUFBTCxHQUFjLFNBQWQ7QUFDRCxPQWpFTztBQW1FUlksVUFuRVEsa0JBbUVEO0FBQ0wsWUFBSU4sT0FBTyxJQUFYO0FBQ0FBLGFBQUtaLEtBQUwsR0FBYSxTQUFiO0FBQ0FZLGFBQUtYLE1BQUwsR0FBYyxTQUFkO0FBQ0FXLGFBQUtWLE1BQUwsR0FBYyxTQUFkO0FBQ0FVLGFBQUtULE1BQUwsR0FBYyxTQUFkO0FBQ0FTLGFBQUtSLE1BQUwsR0FBYyxTQUFkO0FBQ0FRLGFBQUtQLE1BQUwsR0FBYyxTQUFkO0FBQ0FPLGFBQUtOLE1BQUwsR0FBYyxNQUFkO0FBQ0Q7QUE1RU8sSzs7Ozs7NkJBOEVEO0FBQ1AsVUFBSU0sT0FBTyxJQUFYO0FBQ0FBLFdBQUtILE9BQUw7QUFDQSxxQkFBS1UsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYVCxlQUFLTCxNQUFMLEdBQWNjLElBQUlDLFlBQWxCO0FBQ0FWLGVBQUtKLEtBQUwsR0FBYWEsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBeEdnQyxlQUFLQyxJOztrQkFBbkI3QixLIiwiZmlsZSI6Inpob25nZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgbGlzdCBmcm9tICcuLi91dGlsL2xpc3QuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55S35aOr5rWB6KGM5Y+R5Z6L5oyH5Y2X5pS755WlJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBjb2xvcjogJ2dyYXknLFxuICAgIGNvbG9yMTogJyMzMDMwMzAnLFxuICAgIGNvbG9yMjogJyMzMDMwMzAnLFxuICAgIGNvbG9yMzogJyMzMDMwMzAnLFxuICAgIGNvbG9yNDogJyMzMDMwMzAnLFxuICAgIGNvbG9yNTogJyMzMDMwMzAnLFxuICAgIGNvbG9yNjogJyMzMDMwMzAnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBjb250ZW50OiBudWxsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB6dWlyZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvciA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvcjEgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IyID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMyA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I1ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNiA9ICcjMzAzMDMwJ1xuICAgIH0sXG5cbiAgICBkYXRhMSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvciA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IyID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMyA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I1ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNiA9ICcjMzAzMDMwJ1xuICAgIH0sXG5cbiAgICBlZ2coKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IxID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMiA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvcjMgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I0ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNSA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjYgPSAnIzMwMzAzMCdcbiAgICB9LFxuXG4gICAgcHJvcHMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IxID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMiA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3I0ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNSA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjYgPSAnIzMwMzAzMCdcbiAgICB9LFxuXG4gICAgc2NyaXB0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNCA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvcjUgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I2ID0gJyMzMDMwMzAnXG4gICAgfSxcblxuICAgIG1ldGhvZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvciA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IyID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMyA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I1ID0gJ2dyYXknXG4gICAgICBzZWxmLmNvbG9yNiA9ICcjMzAzMDMwJ1xuICAgIH0sXG5cbiAgICBsZXNzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNCA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjUgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I2ID0gJ2dyYXknXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbnRlbnQgPSBsaXN0XG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19