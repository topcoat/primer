import Component from './types/component';
import ButtonBase from './button-base';

export default class ButtonComponent extends Component {
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
  }
}
