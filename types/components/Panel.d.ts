import { AbstractComponent } from './AbstractComponent';

/**
 * Configuration of the panel
 */
export type PanelOptions = {
  /**
   * unique identifier to use with {@link Panel.hide} and {@link Panel.isVisible}
   * also used to store the user desired width
   */
  id?: string;
  /**
   * HTML content of the panel
   */
  content: string;
  /**
   * remove the default margins
   * @default false
   */
  noMargin?: boolean;
  /**
   * initial width
   */
  width?: string;
  /**
   * called when the user clicks inside the panel or presses the Enter key while an element focused
   */
  clickHandler?: (e: MouseEvent) => {};
};

/**
 * Panel component
 */
export class Panel extends AbstractComponent {

  private constructor();

  show(config: string | PanelOptions);

  /**
   * Hides the panel unconditionally or it is has a specific id
   */
  hide(id?: string);

  /**
   * This method is not supported
   * @throws {@link PSVError} always
   */
  toggle();

  /**
   * Checks if any panel is visible, or a specific one
   */
  isVisible(id?: string): boolean;

}
