import buttonTemplate from './input.tmpl';
import Block from '../../modules/block';
import './input.css';

interface InputProps {
    class: string;
    type: string;
    name: string;
    placeholder: string;
}
export default class Input extends Block {
  constructor(props: InputProps) {
    super(buttonTemplate, props);
  }
}
