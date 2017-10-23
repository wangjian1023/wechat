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
      navigationBarTitleText: '男人流行发型攻略指南'
    }, _this.data = {
      src: '',
      fair1: 'http://img4.imgtn.bdimg.com/it/u=1188737727,1914995239&fm=27&gp=0.jpg',
      fair2: 'http://img0.imgtn.bdimg.com/it/u=2715140892,3471146908&fm=27&gp=0.jpg',
      fair3: 'http://img2.imgtn.bdimg.com/it/u=3270481591,2172396977&fm=27&gp=0.jpg',
      height: '',
      width: ''
    }, _this.methods = {
      a: function a() {
        _wepy2.default.navigateTo({
          url: '../pages/zhongfa'
        });
      },
      b: function b() {
        _wepy2.default.navigateTo({
          url: '../pages/duanfa'
        });
      },
      c: function c() {
        _wepy2.default.navigateTo({
          url: '../pages/changfa'
        });
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/dinner'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpbm5lci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiZmFpcjEiLCJmYWlyMiIsImZhaXIzIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwiYSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJiIiwiYyIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxhQUFPLHVFQUZGO0FBR0xDLGFBQU8sdUVBSEY7QUFJTEMsYUFBTyx1RUFKRjtBQUtMQyxjQUFRLEVBTEg7QUFNTEMsYUFBTztBQU5GLEssUUFRUEMsTyxHQUFVO0FBQ1JDLE9BRFEsZUFDSjtBQUNGLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsT0FOUSxlQU1KO0FBQ0YsdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FWTztBQVdSRSxPQVhRLGVBV0o7QUFDRix1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQWZPLEs7Ozs7OzZCQWlCRDtBQUNQLFVBQUlHLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILGVBQUtSLE1BQUwsR0FBY1csSUFBSUMsWUFBbEI7QUFDQUosZUFBS1AsS0FBTCxHQUFhVSxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFyQ2dDLGVBQUtDLEk7O2tCQUFuQnRCLEsiLCJmaWxlIjoiZGlubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55S35Lq65rWB6KGM5Y+R5Z6L5pS755Wl5oyH5Y2XJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBmYWlyMTogJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTExODg3Mzc3MjcsMTkxNDk5NTIzOSZmbT0yNyZncD0wLmpwZycsXG4gICAgZmFpcjI6ICdodHRwOi8vaW1nMC5pbWd0bi5iZGltZy5jb20vaXQvdT0yNzE1MTQwODkyLDM0NzExNDY5MDgmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGZhaXIzOiAnaHR0cDovL2ltZzIuaW1ndG4uYmRpbWcuY29tL2l0L3U9MzI3MDQ4MTU5MSwyMTcyMzk2OTc3JmZtPTI3JmdwPTAuanBnJyxcbiAgICBoZWlnaHQ6ICcnLFxuICAgIHdpZHRoOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL3pob25nZmEnXG4gICAgICB9KVxuICAgIH0sXG4gICAgYigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL2R1YW5mYSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvY2hhbmdmYSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=