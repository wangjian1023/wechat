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
      color1: 'gray'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Homepage, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Homepage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Homepage , 'pages/dynamic'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMuanMiXSwibmFtZXMiOlsiSG9tZXBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInNyYyIsImltZ1VybHMiLCJkZXNjcmliZSIsImNvbnRlbnQiLCJpbmRpY2F0b3JEb3RzIiwiY29sb3IiLCJjb2xvcjEiLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFlBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZUFBUyxDQUNQLGdHQURPLEVBRVAsZ0dBRk8sRUFHUCwrRkFITyxFQUlQLGdHQUpPLENBRko7QUFRTEMsZ0JBQVUsRUFSTDtBQVNMQyxlQUFTLElBVEo7QUFVTEMscUJBQWUsSUFWVjtBQVdMQyxhQUFPLE9BWEY7QUFZTEMsY0FBUTtBQVpILEssUUFjUEMsTyxHQUFVLEU7Ozs7OzZCQUVELENBQ1I7Ozs7RUF0Qm1DLGVBQUtDLEk7O2tCQUF0QmIsUSIsImZpbGUiOiJkeW5hbWljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZXBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUt+Wjq+WPkeWei+a1geihjOaMh+WNl+aUu+eVpScsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiAndHJ1ZSdcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjI3NDAzOTU5OSwzMDcyNDgxNjA3JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MzA3OTE4MDQ4MSwzNzQxMzY3ODI0JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MzIyMTEzOTYzNyw2NjczNzc0NjAmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdUhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zMjE2NDA2ODEzLDMwMTU1NDA4ODkmZm09MjcmZ3A9MC5qcGcnXG4gICAgXSxcbiAgICBkZXNjcmliZTogJycsXG4gICAgY29udGVudDogbnVsbCxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGNvbG9yMTogJ2dyYXknXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==