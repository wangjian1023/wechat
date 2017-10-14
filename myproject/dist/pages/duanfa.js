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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      src: '',
      first: '../image/个性扎头.jpg',
      like: '../image/底切丸子头.jpeg',
      finish: '../image/欧美丸子头扎发.jpeg',
      camera: '../image/欧美卷发.jpg',
      ring: '../image/欧美长卷发.jpg',
      lipstrick: '../image/欧美长卷发1.png',
      flower: '../image/白色卷发.jpg',
      elder: '../image/青年长发.jpg',
      small: '../image/亚洲卷发.jpg',
      loof: '../image/欧美卷发1.jpg',
      // star: '../image/五角星-2.jpg',
      // star1: '../image/五角星.jpg'
      ax: '../image/个性丸子头.jpg',
      border: '../image/亚洲个性丸子头.jpg',
      cdi: '../image/完整丸子头.jpg',
      define: '../image/男士丸子头.jpg',
      default: '../image/男士丸子头.jpg',
      color: 'white',
      color1: 'white',
      color2: 'white',
      color3: 'white',
      wife: '欧美卷发',
      sister: '欧美长卷发',
      sister1: '欧美长卷发',
      mother: '白色卷发',
      son: '白色卷发'

    }, _this.methods = {
      zuire: function zuire() {
        var self = this;
        self.first = '../image/个性扎头.jpg';
        self.like = '../image/底切丸子头.jpeg';
        self.finish = '../image/欧美丸子头扎发.jpeg';
        self.camera = '../image/欧美卷发.jpg';
        self.ring = '../image/欧美长卷发.jpg';
        self.lipstrick = '../image/欧美长卷发1.png';
        self.flower = '../image/白色卷发.jpg';
        self.elder = '../image/青年长发.jpg';
        self.wife = '欧美卷发';
        self.sister = '欧美长卷发';
        self.sister2 = '欧美长卷发';
        self.mother = '白色卷发';
        self.son = '白色卷发';
        self.color = 'gray';
        self.color1 = 'white';
        self.color2 = 'white';
        self.color3 = 'white';
      },
      wanzi: function wanzi() {
        var self = this;
        self.first = '../image/个性扎头.jpg';
        self.like = '../image/底切丸子头.jpeg';
        self.finish = '../image/欧美丸子头扎发.jpeg';
        self.camera = '../image/个性丸子头.jpg';
        self.ring = '../image/亚洲个性丸子头.jpg';
        self.lipstrick = '../image/完整丸子头.png';
        self.flower = '../image/男士丸子头.jpg';
        self.elder = '../image/帅气扎发.png';
        this.wife = '个性丸子头';
        this.sister = '亚洲个性丸子头';
        this.sister1 = '亚洲个性丸子头';
        this.mother = '完整丸子头';
        this.son = '男士丸子头';
        self.color1 = 'gray';
        self.color = 'white';
        self.color3 = 'white';
      },
      c: function c() {
        var self = this;
        self.first = '../image/个性扎头.jpg';
        self.like = '../image/底切丸子头.jpeg';
        self.finish = '../image/欧美丸子头扎发.jpeg';
        self.camera = '../image/个性丸子头.jpg';
        self.ring = '../image/亚洲个性丸子头.jpg';
        self.lipstrick = '../image/完整丸子头.png';
        self.flower = '../image/男士丸子头.jpg';
        self.elder = '../image/帅气扎发.png';
        this.wife = '个性丸子头';
        this.sister = '亚洲个性丸子头';
        this.mother = '完整丸子头';
        this.son = '男士丸子头';
        self.color1 = 'gray';
        self.color = 'white';
        self.color3 = 'white';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/duanfa'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1YW5mYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImRhdGEiLCJzcmMiLCJmaXJzdCIsImxpa2UiLCJmaW5pc2giLCJjYW1lcmEiLCJyaW5nIiwibGlwc3RyaWNrIiwiZmxvd2VyIiwiZWxkZXIiLCJzbWFsbCIsImxvb2YiLCJheCIsImJvcmRlciIsImNkaSIsImRlZmluZSIsImRlZmF1bHQiLCJjb2xvciIsImNvbG9yMSIsImNvbG9yMiIsImNvbG9yMyIsIndpZmUiLCJzaXN0ZXIiLCJzaXN0ZXIxIiwibW90aGVyIiwic29uIiwibWV0aG9kcyIsInp1aXJlIiwic2VsZiIsInNpc3RlcjIiLCJ3YW56aSIsImMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsYUFBTyxtQkFGRjtBQUdMQyxZQUFNLHFCQUhEO0FBSUxDLGNBQVEsdUJBSkg7QUFLTEMsY0FBUSxtQkFMSDtBQU1MQyxZQUFNLG9CQU5EO0FBT0xDLGlCQUFXLHFCQVBOO0FBUUxDLGNBQVEsbUJBUkg7QUFTTEMsYUFBTyxtQkFURjtBQVVMQyxhQUFPLG1CQVZGO0FBV0xDLFlBQU0sb0JBWEQ7QUFZTDtBQUNBO0FBQ0FDLFVBQUksb0JBZEM7QUFlTEMsY0FBUSxzQkFmSDtBQWdCTEMsV0FBSyxvQkFoQkE7QUFpQkxDLGNBQVEsb0JBakJIO0FBa0JMQyxlQUFTLG9CQWxCSjtBQW1CTEMsYUFBTyxPQW5CRjtBQW9CTEMsY0FBUSxPQXBCSDtBQXFCTEMsY0FBUSxPQXJCSDtBQXNCTEMsY0FBUSxPQXRCSDtBQXVCTEMsWUFBTSxNQXZCRDtBQXdCTEMsY0FBUSxPQXhCSDtBQXlCTEMsZUFBUyxPQXpCSjtBQTBCTEMsY0FBUSxNQTFCSDtBQTJCTEMsV0FBSzs7QUEzQkEsSyxRQThCUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBSzFCLEtBQUwsR0FBYSxtQkFBYjtBQUNBMEIsYUFBS3pCLElBQUwsR0FBWSxxQkFBWjtBQUNBeUIsYUFBS3hCLE1BQUwsR0FBYyx1QkFBZDtBQUNBd0IsYUFBS3ZCLE1BQUwsR0FBYyxtQkFBZDtBQUNBdUIsYUFBS3RCLElBQUwsR0FBWSxvQkFBWjtBQUNBc0IsYUFBS3JCLFNBQUwsR0FBaUIscUJBQWpCO0FBQ0FxQixhQUFLcEIsTUFBTCxHQUFjLG1CQUFkO0FBQ0FvQixhQUFLbkIsS0FBTCxHQUFhLG1CQUFiO0FBQ0FtQixhQUFLUCxJQUFMLEdBQVksTUFBWjtBQUNBTyxhQUFLTixNQUFMLEdBQWMsT0FBZDtBQUNBTSxhQUFLQyxPQUFMLEdBQWUsT0FBZjtBQUNBRCxhQUFLSixNQUFMLEdBQWMsTUFBZDtBQUNBSSxhQUFLSCxHQUFMLEdBQVcsTUFBWDtBQUNBRyxhQUFLWCxLQUFMLEdBQWEsTUFBYjtBQUNBVyxhQUFLVixNQUFMLEdBQWMsT0FBZDtBQUNBVSxhQUFLVCxNQUFMLEdBQWMsT0FBZDtBQUNBUyxhQUFLUixNQUFMLEdBQWMsT0FBZDtBQUNELE9BcEJPO0FBcUJSVSxXQXJCUSxtQkFxQkE7QUFDTixZQUFJRixPQUFPLElBQVg7QUFDQUEsYUFBSzFCLEtBQUwsR0FBYSxtQkFBYjtBQUNBMEIsYUFBS3pCLElBQUwsR0FBWSxxQkFBWjtBQUNBeUIsYUFBS3hCLE1BQUwsR0FBYyx1QkFBZDtBQUNBd0IsYUFBS3ZCLE1BQUwsR0FBYyxvQkFBZDtBQUNBdUIsYUFBS3RCLElBQUwsR0FBWSxzQkFBWjtBQUNBc0IsYUFBS3JCLFNBQUwsR0FBaUIsb0JBQWpCO0FBQ0FxQixhQUFLcEIsTUFBTCxHQUFjLG9CQUFkO0FBQ0FvQixhQUFLbkIsS0FBTCxHQUFhLG1CQUFiO0FBQ0EsYUFBS1ksSUFBTCxHQUFZLE9BQVo7QUFDQSxhQUFLQyxNQUFMLEdBQWMsU0FBZDtBQUNBLGFBQUtDLE9BQUwsR0FBZSxTQUFmO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLE9BQWQ7QUFDQSxhQUFLQyxHQUFMLEdBQVcsT0FBWDtBQUNBRyxhQUFLVixNQUFMLEdBQWMsTUFBZDtBQUNBVSxhQUFLWCxLQUFMLEdBQWEsT0FBYjtBQUNBVyxhQUFLUixNQUFMLEdBQWMsT0FBZDtBQUNELE9BdkNPO0FBd0NSVyxPQXhDUSxlQXdDSjtBQUNGLFlBQUlILE9BQU8sSUFBWDtBQUNBQSxhQUFLMUIsS0FBTCxHQUFhLG1CQUFiO0FBQ0EwQixhQUFLekIsSUFBTCxHQUFZLHFCQUFaO0FBQ0F5QixhQUFLeEIsTUFBTCxHQUFjLHVCQUFkO0FBQ0F3QixhQUFLdkIsTUFBTCxHQUFjLG9CQUFkO0FBQ0F1QixhQUFLdEIsSUFBTCxHQUFZLHNCQUFaO0FBQ0FzQixhQUFLckIsU0FBTCxHQUFpQixvQkFBakI7QUFDQXFCLGFBQUtwQixNQUFMLEdBQWMsb0JBQWQ7QUFDQW9CLGFBQUtuQixLQUFMLEdBQWEsbUJBQWI7QUFDQSxhQUFLWSxJQUFMLEdBQVksT0FBWjtBQUNBLGFBQUtDLE1BQUwsR0FBYyxTQUFkO0FBQ0EsYUFBS0UsTUFBTCxHQUFjLE9BQWQ7QUFDQSxhQUFLQyxHQUFMLEdBQVcsT0FBWDtBQUNBRyxhQUFLVixNQUFMLEdBQWMsTUFBZDtBQUNBVSxhQUFLWCxLQUFMLEdBQWEsT0FBYjtBQUNBVyxhQUFLUixNQUFMLEdBQWMsT0FBZDtBQUNEO0FBekRPLEs7Ozs7OzZCQTJERCxDQUFHOzs7O0VBMUZxQixlQUFLWSxJOztrQkFBbkJqQyxLIiwiZmlsZSI6ImR1YW5mYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgZmlyc3Q6ICcuLi9pbWFnZS/kuKrmgKfmiY7lpLQuanBnJyxcbiAgICBsaWtlOiAnLi4vaW1hZ2Uv5bqV5YiH5Li45a2Q5aS0LmpwZWcnLFxuICAgIGZpbmlzaDogJy4uL2ltYWdlL+asp+e+juS4uOWtkOWktOaJjuWPkS5qcGVnJyxcbiAgICBjYW1lcmE6ICcuLi9pbWFnZS/mrKfnvo7ljbflj5EuanBnJyxcbiAgICByaW5nOiAnLi4vaW1hZ2Uv5qyn576O6ZW/5Y235Y+RLmpwZycsXG4gICAgbGlwc3RyaWNrOiAnLi4vaW1hZ2Uv5qyn576O6ZW/5Y235Y+RMS5wbmcnLFxuICAgIGZsb3dlcjogJy4uL2ltYWdlL+eZveiJsuWNt+WPkS5qcGcnLFxuICAgIGVsZGVyOiAnLi4vaW1hZ2Uv6Z2S5bm06ZW/5Y+RLmpwZycsXG4gICAgc21hbGw6ICcuLi9pbWFnZS/kuprmtLLljbflj5EuanBnJyxcbiAgICBsb29mOiAnLi4vaW1hZ2Uv5qyn576O5Y235Y+RMS5qcGcnLFxuICAgIC8vIHN0YXI6ICcuLi9pbWFnZS/kupTop5LmmJ8tMi5qcGcnLFxuICAgIC8vIHN0YXIxOiAnLi4vaW1hZ2Uv5LqU6KeS5pifLmpwZydcbiAgICBheDogJy4uL2ltYWdlL+S4quaAp+S4uOWtkOWktC5qcGcnLFxuICAgIGJvcmRlcjogJy4uL2ltYWdlL+S6mua0suS4quaAp+S4uOWtkOWktC5qcGcnLFxuICAgIGNkaTogJy4uL2ltYWdlL+WujOaVtOS4uOWtkOWktC5qcGcnLFxuICAgIGRlZmluZTogJy4uL2ltYWdlL+eUt+Wjq+S4uOWtkOWktC5qcGcnLFxuICAgIGRlZmF1bHQ6ICcuLi9pbWFnZS/nlLflo6vkuLjlrZDlpLQuanBnJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBjb2xvcjE6ICd3aGl0ZScsXG4gICAgY29sb3IyOiAnd2hpdGUnLFxuICAgIGNvbG9yMzogJ3doaXRlJyxcbiAgICB3aWZlOiAn5qyn576O5Y235Y+RJyxcbiAgICBzaXN0ZXI6ICfmrKfnvo7plb/ljbflj5EnLFxuICAgIHNpc3RlcjE6ICfmrKfnvo7plb/ljbflj5EnLFxuICAgIG1vdGhlcjogJ+eZveiJsuWNt+WPkScsXG4gICAgc29uOiAn55m96Imy5Y235Y+RJ1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB6dWlyZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5maXJzdCA9ICcuLi9pbWFnZS/kuKrmgKfmiY7lpLQuanBnJ1xuICAgICAgc2VsZi5saWtlID0gJy4uL2ltYWdlL+W6leWIh+S4uOWtkOWktC5qcGVnJ1xuICAgICAgc2VsZi5maW5pc2ggPSAnLi4vaW1hZ2Uv5qyn576O5Li45a2Q5aS05omO5Y+RLmpwZWcnXG4gICAgICBzZWxmLmNhbWVyYSA9ICcuLi9pbWFnZS/mrKfnvo7ljbflj5EuanBnJ1xuICAgICAgc2VsZi5yaW5nID0gJy4uL2ltYWdlL+asp+e+jumVv+WNt+WPkS5qcGcnXG4gICAgICBzZWxmLmxpcHN0cmljayA9ICcuLi9pbWFnZS/mrKfnvo7plb/ljbflj5ExLnBuZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJy4uL2ltYWdlL+eZveiJsuWNt+WPkS5qcGcnXG4gICAgICBzZWxmLmVsZGVyID0gJy4uL2ltYWdlL+mdkuW5tOmVv+WPkS5qcGcnXG4gICAgICBzZWxmLndpZmUgPSAn5qyn576O5Y235Y+RJ1xuICAgICAgc2VsZi5zaXN0ZXIgPSAn5qyn576O6ZW/5Y235Y+RJ1xuICAgICAgc2VsZi5zaXN0ZXIyID0gJ+asp+e+jumVv+WNt+WPkSdcbiAgICAgIHNlbGYubW90aGVyID0gJ+eZveiJsuWNt+WPkSdcbiAgICAgIHNlbGYuc29uID0gJ+eZveiJsuWNt+WPkSdcbiAgICAgIHNlbGYuY29sb3IgPSAnZ3JheSdcbiAgICAgIHNlbGYuY29sb3IxID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yMyA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIHdhbnppKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmZpcnN0ID0gJy4uL2ltYWdlL+S4quaAp+aJjuWktC5qcGcnXG4gICAgICBzZWxmLmxpa2UgPSAnLi4vaW1hZ2Uv5bqV5YiH5Li45a2Q5aS0LmpwZWcnXG4gICAgICBzZWxmLmZpbmlzaCA9ICcuLi9pbWFnZS/mrKfnvo7kuLjlrZDlpLTmiY7lj5EuanBlZydcbiAgICAgIHNlbGYuY2FtZXJhID0gJy4uL2ltYWdlL+S4quaAp+S4uOWtkOWktC5qcGcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2Uv5Lqa5rSy5Liq5oCn5Li45a2Q5aS0LmpwZydcbiAgICAgIHNlbGYubGlwc3RyaWNrID0gJy4uL2ltYWdlL+WujOaVtOS4uOWtkOWktC5wbmcnXG4gICAgICBzZWxmLmZsb3dlciA9ICcuLi9pbWFnZS/nlLflo6vkuLjlrZDlpLQuanBnJ1xuICAgICAgc2VsZi5lbGRlciA9ICcuLi9pbWFnZS/luIXmsJTmiY7lj5EucG5nJ1xuICAgICAgdGhpcy53aWZlID0gJ+S4quaAp+S4uOWtkOWktCdcbiAgICAgIHRoaXMuc2lzdGVyID0gJ+S6mua0suS4quaAp+S4uOWtkOWktCdcbiAgICAgIHRoaXMuc2lzdGVyMSA9ICfkuprmtLLkuKrmgKfkuLjlrZDlpLQnXG4gICAgICB0aGlzLm1vdGhlciA9ICflrozmlbTkuLjlrZDlpLQnXG4gICAgICB0aGlzLnNvbiA9ICfnlLflo6vkuLjlrZDlpLQnXG4gICAgICBzZWxmLmNvbG9yMSA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvciA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3IzID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgYygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5maXJzdCA9ICcuLi9pbWFnZS/kuKrmgKfmiY7lpLQuanBnJ1xuICAgICAgc2VsZi5saWtlID0gJy4uL2ltYWdlL+W6leWIh+S4uOWtkOWktC5qcGVnJ1xuICAgICAgc2VsZi5maW5pc2ggPSAnLi4vaW1hZ2Uv5qyn576O5Li45a2Q5aS05omO5Y+RLmpwZWcnXG4gICAgICBzZWxmLmNhbWVyYSA9ICcuLi9pbWFnZS/kuKrmgKfkuLjlrZDlpLQuanBnJ1xuICAgICAgc2VsZi5yaW5nID0gJy4uL2ltYWdlL+S6mua0suS4quaAp+S4uOWtkOWktC5qcGcnXG4gICAgICBzZWxmLmxpcHN0cmljayA9ICcuLi9pbWFnZS/lrozmlbTkuLjlrZDlpLQucG5nJ1xuICAgICAgc2VsZi5mbG93ZXIgPSAnLi4vaW1hZ2Uv55S35aOr5Li45a2Q5aS0LmpwZydcbiAgICAgIHNlbGYuZWxkZXIgPSAnLi4vaW1hZ2Uv5biF5rCU5omO5Y+RLnBuZydcbiAgICAgIHRoaXMud2lmZSA9ICfkuKrmgKfkuLjlrZDlpLQnXG4gICAgICB0aGlzLnNpc3RlciA9ICfkuprmtLLkuKrmgKfkuLjlrZDlpLQnXG4gICAgICB0aGlzLm1vdGhlciA9ICflrozmlbTkuLjlrZDlpLQnXG4gICAgICB0aGlzLnNvbiA9ICfnlLflo6vkuLjlrZDlpLQnXG4gICAgICBzZWxmLmNvbG9yMSA9ICdncmF5J1xuICAgICAgc2VsZi5jb2xvciA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3IzID0gJ3doaXRlJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==