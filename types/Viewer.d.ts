import { Vector3 } from 'three';
import { Event, EventEmitter } from 'uevent';
import { AbstractPlugin, PluginConstructor } from './AbstractPlugin';
import { Animation } from './Animation';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Notification } from './components/Notification';
import { Overlay } from './components/Overlay';
import { Panel } from './components/Panel';
import { Tooltip } from './components/Tooltip';
import {
  AnimateOptions,
  ClickData,
  CssSize,
  ExtendedPosition,
  PanoData,
  PanoramaOptions,
  Position,
  Size,
  ViewerOptions
} from './models';
import { DataHelper } from './services/DataHelper';
import { TextureLoader } from './services/TextureLoader';
import { TooltipRenderer } from './services/TooltipRenderer';

/**
 * Internal properties of the viewer
 */
export type ViewerProps = {
  /**
   * when all components are loaded
   */
  ready: boolean;
  /**
   * if the UI needs to be renderer
   */
  uiRefresh: boolean;
  /**
   * if the view needs to be renderer
   */
  needsUpdate: boolean;
  /**
   * if the viewer is currently fullscreen
   */
  fullscreen: boolean;
  /**
   * direction of the camera
   */
  direction: Vector3;
  /**
   * vertical FOV
   */
  vFov: number;
  /**
   * horizontal FOV
   */
  hFov: number;
  /**
   * viewer aspect ratio
   */
  aspect: number;
  /**
   * automatic rotation is enabled
   */
  autorotateEnabled: boolean;
  /**
   * promise of the current animation
   */
  animationPromise: Animation;
  /**
   * promise of the setPanorama method
   */
  loadingPromise: Promise<void>;
  /**
   * timeout id of the automatic rotation delay
   */
  startTimeout: any;
  /**
   * size of the container
   */
  size: Size;
  /**
   * panorama metadata, if supported
   */
  panoData: PanoData;
};

/**
 * Main class
 */
export class Viewer extends EventEmitter {

  /**
   * Configuration holder
   */
  readonly config: ViewerOptions;

  /**
   * Internal properties
   */
  protected readonly prop: ViewerProps;

  /**
   * Top most parent
   */
  readonly parent: HTMLElement;

  /**
   * Main container
   */
  readonly container: HTMLElement;

  readonly textureLoader: TextureLoader;

  readonly dataHelper: DataHelper;

  readonly loader: Loader;

  readonly navbar: Navbar;

  readonly panel: Panel;

  readonly tooltip: TooltipRenderer;

  readonly notification: Notification;

  readonly overlay: Overlay;

  /**
   * @throws {@link PSVError} when the configuration is incorrect
   */
  constructor(options: ViewerOptions);

  /**
   * Destroys the viewer
   * @description The memory used by the ThreeJS context is not totally cleared. This will be fixed as soon as possible.
   */
  destroy();

  /**
   * Returns the instance of a plugin if it exists
   */
  getPlugin<T extends AbstractPlugin>(pluginId: string | PluginConstructor<T>): T | undefined;

  /**
   * Returns the current position of the camera
   */
  getPosition(): Position;

  /**
   * Returns the current zoom level
   */
  getZoomLevel(): number;

  /**
   * Returns the current viewer size
   */
  getSize(): Size;

  /**
   * Checks if the automatic rotation is enabled
   */
  isAutorotateEnabled(): boolean;

  /**
   * Checks if the viewer is in fullscreen
   */
  isFullscreenEnabled(): boolean;

  /**
   * Flags the view has changed for the next render
   */
  needsUpdate();

  /**
   * Resizes the canvas when the window is resized
   */
  autoSize();

  /**
   * Loads a new panorama file
   * @description Loads a new panorama file, optionally changing the camera position/zoom and activating the transition animation.<br>
   * If the "options" parameter is not defined, the camera will not move and the ongoing animation will continue.<br>
   * If another loading is already in progress it will be aborted.
   */
  setPanorama(panorama: any, options?: PanoramaOptions): Promise<void>;

  /**
   * Update options
   * @throws {@link PSVError} when the configuration is incorrect
   */
  setOptions(options: Partial<ViewerOptions>);

  /**
   * Update options
   * @throws {@link PSVError} when the configuration is incorrect
   */
  setOption<K extends keyof ViewerOptions>(option: K, value: ViewerOptions[K]);

  /**
   * Starts the automatic rotation
   */
  startAutorotate();

  /**
   * Stops the automatic rotation
   */
  stopAutorotate();

  /**
   * Starts or stops the automatic rotation
   */
  toggleAutorotate();

  /**
   * Displays an error message over the viewer
   */
  showError(message: string);

  /**
   * Hides the error message
   */
  hideError();

  /**
   * Rotates the view to specific longitude and latitude
   */
  rotate(position: ExtendedPosition);

  /**
   * Rotates and zooms the view with a smooth animation
   */
  animate(options: AnimateOptions): Animation;

  /**
   * Stops the ongoing animation
   * @description The return value is a Promise because the is no guaranty the animation can be stopped synchronously.
   */
  stopAnimation(): Promise<void>;

  /**
   * Zooms to a specific level between `max_fov` and `min_fov`
   * @param {number} level - new zoom level from 0 to 100
   */
  zoom(level: number);

  /**
   * Increases the zoom level
   * @param {number} [step=1]
   */
  zoomIn(step?: number);

  /**
   * Decreases the zoom level
   * @param {number} [step=1]
   */
  zoomOut(step?: number);

  /**
   * Resizes the viewer
   */
  resize(size: CssSize);

  /**
   * Enters the fullscreen mode
   */
  enterFullscreen();

  /**
   * Exits the fullscreen mode
   */
  exitFullscreen();

  /**
   * Enters or exits the fullscreen mode
   */
  toggleFullscreen();

  /**
   * Enables the keyboard controls (done automatically when entering fullscreen)
   */
  startKeyboardControl();

  /**
   * Disables the keyboard controls (done automatically when exiting fullscreen)
   */
  stopKeyboardControl();

  /**
   * Triggered when the panorama image has been loaded and the viewer is ready to perform the first render
   */
  once(e: 'ready', cb: (e: Event) => void): this;

  /**
   * Triggered when the automatic rotation is enabled/disabled
   */
  on(e: 'autorotate', cb: (e: Event, enabled: true) => void): this;
  /**
   * Triggered before a render, used to modify the view
   */
  on(e: 'before-render', cb: (e: Event, timestamp: number, elapsed: number) => void): this;
  /**
   * Triggered before a rotate operation, can be cancelled
   */
  on(e: 'before-rotate', cb: (e: Event, position: ExtendedPosition) => void): this;
  /**
   * Triggered when the user clicks on the viewer (everywhere excluding the navbar and the side panel)
   */
  on(e: 'click', cb: (e: Event, data: ClickData) => void): this;
  /**
   * Trigered when the panel is closed
   */
  on(e: 'close-panel', cb: (e: Event, id: string | undefined) => void): this;
  /**
   * Triggered after a call to setOption/setOptions
   */
  on(e: 'config-changed', cb: (e: Event, options: string[]) => void): this;
  /**
   * Triggered when the user double clicks on the viewer. The simple `click` event is always fired before `dblclick`
   */
  on(e: 'dblclick', cb: (e: Event, data: ClickData) => void): this;
  /**
   * Triggered when the fullscreen mode is enabled/disabled
   */
  on(e: 'fullscreen-updated', cb: (e: Event, enabled: true) => void): this;
  /**
   * Called to alter the target position of an animation
   */
  on(e: 'get-animate-position', cb: (e: Event, position: Position) => Position): this;
  /**
   * Called to alter the target position of a rotation
   */
  on(e: 'get-rotate-position', cb: (e: Event, position: Position) => Position): this;
  /**
   * Triggered when the notification is hidden
   */
  on(e: 'hide-notification', cb: (e: Event) => void): this;
  /**
   * Triggered when the overlay is hidden
   */
  on(e: 'hide-overlay', cb: (e: Event, id: string | undefined) => void): this;
  /**
   * Trigered when the tooltip is hidden
   */
  on(e: 'hide-tooltip', cb: (e: Event, data: any) => void): this;
  /**
   * Triggered when the panel is opened
   */
  on(e: 'open-panel', cb: (e: Event, id: string | undefined) => void): this;
  /**
   * Triggered when a panorama image has been loaded
   */
  on(e: 'panorama-loaded', cb: (e: Event) => void): this;
  /**
   * Triggered when the view longitude and/or latitude changes
   */
  on(e: 'position-updated', cb: (e: Event, position: Position) => void): this;
  /**
   * Triggered on each viewer render, **this event is triggered very often**
   */
  on(e: 'render', cb: (e: Event) => void): this;
  /**
   * Trigered when the notification is shown
   */
  on(e: 'show-notification', cb: (e: Event) => void): this;
  /**
   * Trigered when the overlay is shown
   */
  on(e: 'show-overlay', cb: (e: Event, id: string | undefined) => void): this;
  /**
   * Trigered when the tooltip is shown
   */
  on(e: 'show-tooltip', cb: (e: Event, data: any, tooltip: Tooltip) => void): this;
  /**
   * Triggered when the viewer size changes
   */
  on(e: 'size-updated', cb: (e: Event, size: Size) => void): this;
  /**
   * Triggered when all current animations are stopped
   */
  on(e: 'stop-all', cb: (e: Event) => void): this;
  /**
   * Triggered when the zoom level changes
   */
  on(e: 'zoom-updated', cb: (e: Event, zoom: number) => void): this;

}
