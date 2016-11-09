import Mixin from './types/mixin';

export class ResetBaseMixin extends Mixin {
  props = {
    padding: 0,
    margin: 0,
    font: 'inherit',
    color: 'inherit',
    background: 'transparent',
    border: 'none',
  };
}

export class ResetListMixin extends Mixin {
  props = {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  };
}

export class ResetQuietMixin extends Mixin {
  props = {
    background: 'transparent',
    border: '1px solid transparent',
    boxShadow: 'none',
  };
}

export class ResetInputMixin extends Mixin {
  props = {
    verticalAlign: 'top',
    outline: 'none',
  }
}

export class HideInputMixin extends Mixin {
  props = {
    position: 'absolute',
    overflow: 'hidden',
    padding: 0,
    border: 0,
    opacity: 0.001,
    zIndex: 1,
    verticalAlign: 'top',
    outline: 'none',
  };
}

export class ResetCursorMixin extends Mixin {
  props = {
    cursor: 'default',
    userSelect: 'none',
  };
}

export class ResetBoxModelMixin extends Mixin {
  props = {
    boxSizing: 'border-box',
    backgroundClip: 'padding-box',
  }
}

export class ResetOverflowMixin extends Mixin {
  props = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  };
}

export class resetContainerMixin extends Mixin {
  mixins = [ResetBoxModelMixin, ResetOverflowMixin]
  props = {
    wordSpacing: 0,
  }
}

export class InlineBlockMixin extends Mixin {
  props = {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
  }
}

export class EllipsisMixin extends Mixin {
  mixins = [ResetOverflowMixin];
  props = {
    textOverflow: 'ellipsis',
  };
}

export class DisabledMixin extends Mixin {
  props = {
    opacity: 0.3,
    cursor: 'default',
    pointerEvents: 'none',
  };
}
