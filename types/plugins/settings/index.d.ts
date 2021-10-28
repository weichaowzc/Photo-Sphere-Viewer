import { AbstractPlugin, Viewer } from '../..';

/**
 * Description of a setting
 */
export type BaseSetting = {
  id: string;
  label: string;
};

/**
 * Description of a 'options' setting
 */
export type OptionsSetting = BaseSetting & {
  type: 'options';
  current: () => string;
  options: () => SettingOption[]
  apply: (string) => void;
};

/**
 * Description of a 'toggle' setting
 */
export type ToggleSetting = BaseSetting & {
  type: 'toggle';
  active: () => boolean;
  toggle: () => void;
};

/**
 * Option of an 'option' setting
 */
export type SettingOption = {
  id: string;
  label: string;
};

export type Setting = OptionsSetting | ToggleSetting;

/**
 * Adds a button to access various settings.
 */
export class SettingsPlugin extends AbstractPlugin {

  constructor(psv: Viewer);

  /**
   * Registers a new setting
   */
  addSetting(setting: Setting);

  /**
   * Removes a setting
   * @param {string} id
   */
  removeSetting(id: string);

  /**
   * Toggles the settings panel
   */
  toggleSettings();

  /**
   * Hides the settings panel
   */
  hideSettings();

  /**
   * Shows the settings panel
   */
  showSettings();

}
