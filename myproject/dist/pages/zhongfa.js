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
      color7: '#303030',
      height: 0,
      width: 0
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
        self.color7 = '#303030';
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
        self.color7 = '#303030';
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
        self.color7 = '#303030';
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
        self.color7 = '#303030';
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
        self.color7 = '#303030';
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
        self.color7 = '#303030';
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
        self.color7 = '#303030';
      },
      page: function page() {
        var self = this;
        self.color = '#303030';
        self.color1 = '#303030';
        self.color2 = '#303030';
        self.color3 = '#303030';
        self.color4 = '#303030';
        self.color5 = '#303030';
        self.color6 = '#303030';
        self.color7 = 'gray';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpob25nZmEuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImNvbG9yIiwiY29sb3IxIiwiY29sb3IyIiwiY29sb3IzIiwiY29sb3I0IiwiY29sb3I1IiwiY29sb3I2IiwiY29sb3I3IiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwienVpcmUiLCJzZWxmIiwiZGF0YTEiLCJlZ2ciLCJwcm9wcyIsInNjcmlwdCIsIm1ldGhvZCIsImxlc3MiLCJwYWdlIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxhQUFPLE1BRkY7QUFHTEMsY0FBUSxTQUhIO0FBSUxDLGNBQVEsU0FKSDtBQUtMQyxjQUFRLFNBTEg7QUFNTEMsY0FBUSxTQU5IO0FBT0xDLGNBQVEsU0FQSDtBQVFMQyxjQUFRLFNBUkg7QUFTTEMsY0FBUSxTQVRIO0FBVUxDLGNBQVEsQ0FWSDtBQVdMQyxhQUFPO0FBWEYsSyxRQWFQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLWixLQUFMLEdBQWEsTUFBYjtBQUNBWSxhQUFLWCxNQUFMLEdBQWMsU0FBZDtBQUNBVyxhQUFLVixNQUFMLEdBQWMsU0FBZDtBQUNBVSxhQUFLVCxNQUFMLEdBQWMsU0FBZDtBQUNBUyxhQUFLUixNQUFMLEdBQWMsU0FBZDtBQUNBUSxhQUFLUCxNQUFMLEdBQWMsU0FBZDtBQUNBTyxhQUFLTixNQUFMLEdBQWMsU0FBZDtBQUNBTSxhQUFLTCxNQUFMLEdBQWMsU0FBZDtBQUNELE9BWE87QUFhUk0s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ZDtBQUNBTyxhQUFLTixNQUFMLEdBQWMsU0FBZDtBQUNBTSxhQUFLTCxNQUFMLEdBQWMsTUFBZDtBQUNEO0FBL0ZPLEs7Ozs7OzZCQWlHRDtBQUNQLFVBQUlLLE9BQU8sSUFBWDtBQUNBLHFCQUFLUSxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hWLGVBQUtKLE1BQUwsR0FBY2MsSUFBSUMsWUFBbEI7QUFDQVgsZUFBS0gsS0FBTCxHQUFhYSxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUExSGdDLGVBQUtMLEk7O2tCQUFuQnhCLEsiLCJmaWxlIjoiemhvbmdmYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUt+Wjq+a1geihjOWPkeWei+aMh+WNl+aUu+eVpSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgY29sb3I6ICdncmF5JyxcbiAgICBjb2xvcjE6ICcjMzAzMDMwJyxcbiAgICBjb2xvcjI6ICcjMzAzMDMwJyxcbiAgICBjb2xvcjM6ICcjMzAzMDMwJyxcbiAgICBjb2xvcjQ6ICcjMzAzMDMwJyxcbiAgICBjb2xvcjU6ICcjMzAzMDMwJyxcbiAgICBjb2xvcjY6ICcjMzAzMDMwJyxcbiAgICBjb2xvcjc6ICcjMzAzMDMwJyxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHp1aXJlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yID0gJ2dyYXknXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNCA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjUgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I2ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNyA9ICcjMzAzMDMwJ1xuICAgIH0sXG5cbiAgICBkYXRhMSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvciA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IyID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMyA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjQgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I1ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNiA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjcgPSAnIzMwMzAzMCdcbiAgICB9LFxuXG4gICAgZWdnKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IzID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNCA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjUgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I2ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNyA9ICcjMzAzMDMwJ1xuICAgIH0sXG5cbiAgICBwcm9wcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xvciA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IyID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMyA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvcjQgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I1ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNiA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjcgPSAnIzMwMzAzMCdcbiAgICB9LFxuXG4gICAgc2NyaXB0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbG9yID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMSA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IzID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNCA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvcjUgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I2ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNyA9ICcjMzAzMDMwJ1xuICAgIH0sXG5cbiAgICBtZXRob2QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IxID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMiA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I0ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNSA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvcjYgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I3ID0gJyMzMDMwMzAnXG4gICAgfSxcblxuICAgIGxlc3MoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IxID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMiA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I0ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNSA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjYgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3I3ID0gJyMzMDMwMzAnXG4gICAgfSxcblxuICAgIHBhZ2UoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3IxID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yMiA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjMgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I0ID0gJyMzMDMwMzAnXG4gICAgICBzZWxmLmNvbG9yNSA9ICcjMzAzMDMwJ1xuICAgICAgc2VsZi5jb2xvcjYgPSAnIzMwMzAzMCdcbiAgICAgIHNlbGYuY29sb3I3ID0gJ2dyYXknXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=