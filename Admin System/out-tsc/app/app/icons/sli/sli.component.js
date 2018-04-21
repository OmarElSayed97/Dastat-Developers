var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var SliComponent = (function () {
    function SliComponent() {
        this.temp = [];
        this.icons = [];
        var icons = [
            'user',
            'people',
            'user-female',
            'user-follow',
            'user-following',
            'user-unfollow',
            'login',
            'logout',
            'emotsmile',
            'phone',
            'call-end',
            'call-in',
            'call-out',
            'map',
            'location-pin',
            'direction',
            'directions',
            'compass',
            'layers',
            'menu',
            'list',
            'options-vertical',
            'options',
            'arrow-down',
            'arrow-left',
            'arrow-right',
            'arrow-up',
            'arrow-up-circle',
            'arrow-left-circle',
            'arrow-right-circle',
            'arrow-down-circle',
            'check',
            'clock',
            'plus',
            'minus',
            'close',
            'event',
            'exclamation',
            'organization',
            'trophy',
            'screen-smartphone',
            'screen-desktop',
            'plane',
            'notebook',
            'mustache',
            'mouse',
            'magnet',
            'energy',
            'disc',
            'cursor',
            'cursor-move',
            'crop',
            'chemistry',
            'speedometer',
            'shield',
            'screen-tablet',
            'magic-wand',
            'hourglass',
            'graduation',
            'ghost',
            'game-controller',
            'fire',
            'eyeglass',
            'envelope-open',
            'envelope-letter',
            'bell',
            'badge',
            'anchor',
            'wallet',
            'vector',
            'speech',
            'puzzle',
            'printer',
            'present',
            'playlist',
            'pin',
            'picture',
            'handbag',
            'globe-alt',
            'globe',
            'folder-alt',
            'folder',
            'film',
            'feed',
            'drop',
            'drawer',
            'docs',
            'doc',
            'diamond',
            'cup',
            'calculator',
            'bubbles',
            'briefcase',
            'book-open',
            'basket-loaded',
            'basket',
            'bag',
            'action-undo',
            'action-redo',
            'wrench',
            'umbrella',
            'trash',
            'tag',
            'support',
            'frame',
            'size-fullscreen',
            'size-actual',
            'shuffle',
            'share-alt',
            'share',
            'rocket',
            'question',
            'pie-chart',
            'pencil',
            'note',
            'loop',
            'home',
            'grid',
            'graph',
            'microphone',
            'music-tone-alt',
            'music-tone',
            'earphones-alt',
            'earphones',
            'equalizer',
            'like',
            'dislike',
            'control-start',
            'control-rewind',
            'control-play',
            'control-pause',
            'control-forward',
            'control-end',
            'volume-1',
            'volume-2',
            'volume-off',
            'calendar',
            'bulb',
            'chart',
            'ban',
            'bubble',
            'camrecorder',
            'camera',
            'cloud-download',
            'cloud-upload',
            'envelope',
            'eye',
            'flag',
            'heart',
            'info',
            'key',
            'link',
            'lock',
            'lock-open',
            'magnifier',
            'magnifier-add',
            'magnifier-remove',
            'paper-clip',
            'paper-plane',
            'power',
            'refresh',
            'reload',
            'settings',
            'star',
            'symbol-female',
            'symbol-male',
            'target',
            'credit-card',
            'paypal',
            'social-tumblr',
            'social-twitter',
            'social-facebook',
            'social-instagram',
            'social-linkedin',
            'social-pinterest',
            'social-github',
            'social-google',
            'social-reddit',
            'social-skype',
            'social-dribbble',
            'social-behance',
            'social-foursqare',
            'social-soundcloud',
            'social-spotify',
            'social-stumbleupon',
            'social-youtube',
            'social-dropbox',
            'social-vkontakte',
            'social-steam'
        ];
        this.temp = icons;
        this.icons = icons;
    }
    SliComponent.prototype.updateFilter = function (event) {
        var query = event.target.value;
        var filtered = this.temp.filter(function (el) {
            return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
        this.icons = filtered;
    };
    SliComponent = __decorate([
        Component({
            selector: 'app-sli',
            templateUrl: './sli.component.html',
            styleUrls: ['./sli.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], SliComponent);
    return SliComponent;
}());
export { SliComponent };
//# sourceMappingURL=sli.component.js.map