import { AbstractButton } from '../buttons/AbstractButton';
import { NavbarCustomButton } from '../models';
import { AbstractComponent } from './AbstractComponent';

/**
 * Register a new button available for all viewers
 * @throws {@link PSVError} when the configuration is incorrect
 */
export function registerButton(button: typeof AbstractButton): void;

/**
 * Navigation bar component
 */
export class Navbar extends AbstractComponent {

  private constructor();

  /**
   * Change the buttons visible on the navbar
   * @throws {@link PSVError} when a button is unknown
   */
  setButtons(buttons: string | Array<string | NavbarCustomButton>);

  /**
   * Sets the bar caption
   * @throws {@link PSVError} when the caption element is not present
   */
  setCaption(html: string);

  /**
   * Returns a button by its identifier
   */
  getButton(id: string): AbstractButton;

}
