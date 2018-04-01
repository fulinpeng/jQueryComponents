'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by flp on 2018/3/31.
 */

var PraiseButton = function () {
    function PraiseButton(_ref) {
        var target = _ref.target,
            showNum = _ref.showNum;

        _classCallCheck(this, PraiseButton);

        this.num = 0;
        this.target = target;
        this.showNum = showNum;
    }

    _createClass(PraiseButton, [{
        key: 'addClick',
        value: function addClick() {
            var _this = this;

            this.target.onclick = function () {
                _this.increase();
            };
        }
    }, {
        key: 'increase',
        value: function increase() {
            this.num++;
            this.showNum.innerHTML = '赞：' + this.num + '次';
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb(_ref2) {
        var target = _ref2.target,
            showNum = _ref2.showNum;

        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, { target: target, showNum: showNum }));
    }

    _createClass(Thumb, [{
        key: 'addThumb',
        value: function addThumb() {
            var thumbHtml = '\n                <div class="red1"></div>\n                <div class="red2">\n                    <div class="red2-1"></div>\n                    <div class="red2-2"></div>\n                    <div class="red2-3"></div>\n                </div>';
            this.target.innerHTML = thumbHtml;
            this.showNum.innerHTML = '赞：' + this.num + '次';
        }
    }]);

    return Thumb;
}(PraiseButton);