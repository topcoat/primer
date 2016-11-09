import {
  InlineBlockMixin,
  ResetBoxModelMixin,
  ResetBaseMixin,
  ResetCursorMixin,
  EllipsisMixin,
} from './utils';
import Mixin from './types/mixin';

export default class ButtonBase extends Mixin {
  mixins = [InlineBlockMixin, ResetBoxModelMixin, ResetBaseMixin, ResetCursorMixin, EllipsisMixin];
  props = { textDecoration: 'none' };
}
