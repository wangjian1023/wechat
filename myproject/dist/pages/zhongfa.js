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
      color1: 'red',
      color2: 'black',
      color3: 'black',
      color4: 'black',
      color5: 'black',
      color6: 'black',
      color7: 'black'
    }, _this.methods = {
      zuire: function zuire() {
        var self = this;
        self.color = 'red';
        self.color1 = 'black';
        self.color2 = 'black';
        self.color3 = 'black';
        self.color4 = 'black';
        self.color5 = 'black';
        self.color6 = 'black';
        self.color7 = 'black';
      },
      data1: function data1() {
        var self = this;
        self.color = 'black';
        self.color1 = 'red';
        self.color2 = 'black';
        self.color3 = 'black';
        self.color4 = 'black';
        self.color5 = 'black';
        self.color6 = 'black';
        self.color7 = 'black';
      },
      egg: function egg() {
        var self = this;
        self.color = 'black';
        self.color1 = 'black';
        self.color2 = 'red';
        self.color3 = 'black';
        self.color4 = 'black';
        self.color5 = 'black';
        self.color6 = 'black';
        self.color7 = 'black';
      },
      props: function props() {
        var self = this;
        self.color = 'black';
        self.color1 = 'black';
        self.color2 = 'black';
        self.color3 = 'red';
        self.color4 = 'black';
        self.color5 = 'black';
        self.color6 = 'black';
        self.color7 = 'black';
      },
      script: function script() {
        var self = this;
        self.color = 'black';
        self.color1 = 'black';
        self.color2 = 'black';
        self.color3 = 'black';
        self.color4 = 'red';
        self.color5 = 'black';
        self.color6 = 'black';
        self.color7 = 'black';
      },
      method: function method() {
        var self = this;
        self.color = 'black';
        self.color1 = 'black';
        self.color2 = 'black';
        self.color3 = 'black';
        self.color4 = 'black';
        self.color5 = 'red';
        self.color6 = 'black';
        self.color7 = 'black';
      },
      less: function less() {
        var self = this;
        self.color = 'black';
        self.color1 = 'black';
        self.color2 = 'black';
        self.color3 = 'black';
        self.color4 = 'black';
        self.color5 = 'black';
        self.color6 = 'red';
        self.color7 = 'black';
      },
      page: function page() {
        var self = this;
        self.color = 'black';
        self.color1 = 'black';
        self.color2 = 'black';
        self.color3 = 'black';
        self.color4 = 'black';
        self.color5 = 'black';
        self.color6 = 'black';
        self.color7 = 'red';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/zhongfa'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpob25nZmEuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImNvbG9yIiwiY29sb3IxIiwiY29sb3IyIiwiY29sb3IzIiwiY29sb3I0IiwiY29sb3I1IiwiY29sb3I2IiwiY29sb3I3IiwibWV0aG9kcyIsInp1aXJlIiwic2VsZiIsImRhdGExIiwiZWdnIiwicHJvcHMiLCJzY3JpcHQiLCJtZXRob2QiLCJsZXNzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxhQUFPLE9BRkY7QUFHTEMsY0FBUSxLQUhIO0FBSUxDLGNBQVEsT0FKSDtBQUtMQyxjQUFRLE9BTEg7QUFNTEMsY0FBUSxPQU5IO0FBT0xDLGNBQVEsT0FQSDtBQVFMQyxjQUFRLE9BUkg7QUFTTEMsY0FBUTtBQVRILEssUUFXUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1YsS0FBTCxHQUFhLEtBQWI7QUFDQVUsYUFBS1QsTUFBTCxHQUFjLE9BQWQ7QUFDQVMsYUFBS1IsTUFBTCxHQUFjLE9BQWQ7QUFDQVEsYUFBS1AsTUFBTCxHQUFjLE9BQWQ7QUFDQU8sYUFBS04sTUFBTCxHQUFjLE9BQWQ7QUFDQU0sYUFBS0wsTUFBTCxHQUFjLE9BQWQ7QUFDQUssYUFBS0osTUFBTCxHQUFjLE9BQWQ7QUFDQUksYUFBS0gsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQVhPO0FBYVJJLFdBYlEsbUJBYUE7QUFDTixZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS1YsS0FBTCxHQUFhLE9BQWI7QUFDQVUsYUFBS1QsTUFBTCxHQUFjLEtBQWQ7QUFDQVMsYUFBS1IsTUFBTCxHQUFjLE9B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dEIsSyIsImZpbGUiOiJ6aG9uZ2ZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55S35Lq655qE6a2F5YqbJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICBjb2xvcjE6ICdyZWQnLFxuICAgIGNvbG9yMjogJ2JsYWNrJyxcbiAgICBjb2xvcjM6ICdibGFjaycsXG4gICAgY29sb3I0OiAnYmxhY2snLFxuICAgIGNvbG9yNTogJ2JsYWNrJyxcbiAgICBjb2xvcjY6ICdibGFjaycsXG4gICAgY29sb3I3OiAnYmxhY2snXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB6dWlyZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvciA9ICdyZWQnXG4gICAgICBzZWxmLmNvbG9yMSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IyID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yNCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3I1ID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjYgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yNyA9ICdibGFjaydcbiAgICB9LFxuXG4gICAgZGF0YTEoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMSA9ICdyZWQnXG4gICAgICBzZWxmLmNvbG9yMiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IzID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yNSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3I2ID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjcgPSAnYmxhY2snXG4gICAgfSxcblxuICAgIGVnZygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IxID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAncmVkJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yNCA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3I1ID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjYgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yNyA9ICdibGFjaydcbiAgICB9LFxuXG4gICAgcHJvcHMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IyID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAncmVkJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yNSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3I2ID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjcgPSAnYmxhY2snXG4gICAgfSxcblxuICAgIHNjcmlwdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IxID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMyA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3I0ID0gJ3JlZCdcbiAgICAgIHNlbGYuY29sb3I1ID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjYgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yNyA9ICdibGFjaydcbiAgICB9LFxuXG4gICAgbWV0aG9kKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IzID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yNSA9ICdyZWQnXG4gICAgICBzZWxmLmNvbG9yNiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3I3ID0gJ2JsYWNrJ1xuICAgIH0sXG5cbiAgICBsZXNzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IzID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yNSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3I2ID0gJ3JlZCdcbiAgICAgIHNlbGYuY29sb3I3ID0gJ2JsYWNrJ1xuICAgIH0sXG5cbiAgICBwYWdlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IzID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yNSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3I2ID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjcgPSAncmVkJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==