import Component from './types/component';
import ButtonBase from './button-base';
import {DisabledMixin} from './utils';

export default class ButtonComponent extends Component {
  description = 'A simple button';
  mixins = [ButtonBase];
  props = {
    @variable
    padding: '5px',
    @variable
    fontSize: '1rem',
    @variable
    fontWeight: 'normal',
    @variable
    lineHeight: '1.1rem',
    @variable
    letterSpacing: '',
    @variable
    color: '',
    @variable
    textShadow: '',
    @variable
    verticalAlign: '',
    @variable
    borderRadius: '5px',
  };
  states = {
    hover: {
      props: {
        @variable('background-color--hover')
        backgroundColor: '',
      },
    },
    active: {
      props: {
        @variable('background-color--down')
        backgroundColor: '',
        @variable('box-shadow--down')
        boxShadow: '',
      },
    },
    focus: {
      props: {
        @variable('border--focus')
        border: '',
        @variable('box-shadow--focus')
        boxShadow: '',
        outline: 0,
      },
    },
    disabled: {
      mixins: [DisabledMixin],
    },
  }
}
