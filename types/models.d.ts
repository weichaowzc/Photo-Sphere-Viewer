import { Texture } from 'three';
import { AdapterConstructor } from './AbstractAdapter';
import { PluginConstructor } from './AbstractPlugin';
import { Marker } from './plugins/markers';

/**
 * Object defining a point
 */
export type Point = {
  x: number;
  y: number;
};

/**
 * Object defining a size
 */
export type Size = {
  width: number;
  height: number;
};

/**
 * Object defining a size in CSS
 */
export type CssSize = {
  width: string;
  height: string;
};

/**
 * Object defining angular corrections to a sphere
 */
export type SphereCorrection = {
  pan?: number;
  tilt?: number;
  roll?: number;
};

/**
 * Object defining a spherical position
 */
export type Position = {
  longitude: number;
  latitude: number;
};

/**
 * Object defining a spherical or texture position
 * @description A position that can be expressed either in spherical coordinates (radians or degrees) or in texture coordinates (pixels)
 */
export type ExtendedPosition = Position | Point;

/**
 * Object defining animation options
 */
export type AnimateOptions = ExtendedPosition & {
  /**
   * Animation speed or duration in milliseconds
   */
  speed: string | number;
  /**
   * New zoom level between 0 and 100
   */
  zoom?: number;
};

/**
 * Crop information of the panorama
 */
export type PanoData = {
  fullWidth: number;
  fullHeight: number;
  croppedWidth: number;
  croppedHeight: number;
  croppedX: number;
  croppedY: number;
  poseHeading?: number;
  posePitch?: number;
  poseRoll?: number;
};

/**
 * Function to compute panorama data once the image is loaded
 */
export type PanoDataProvider = (image: HTMLImageElement) => PanoData;

/**
 * Object defining panorama and animation options
 */
export type PanoramaOptions = Partial<ExtendedPosition> & {
  /**
   * new zoom level between 0 and 100
   */
  zoom?: number;
  /**
   * duration of the transition between all and new panorama
   * @default 1500
   */
  transition?: boolean | number;
  /**
   * show the loader while loading the new panorama
   * @default true
   */
  showLoader?: boolean;
  /**
   * new sphere correction to apply to the panorama
   */
  sphereCorrection?: SphereCorrection;
  /**
   * new data used for this panorama
   */
  panoData?: PanoData | PanoDataProvider;
};

/**
 * Result of the {@link AbstractAdapter.loadTexture} method
 */
export type TextureData = {
  texture: Texture | Texture[] | Record<string, Texture>;
  panoData?: PanoData;
};

/**
 * Data of the `click` event
 */
export type ClickData = {
  /**
   * if it's a right click
   */
  rightclick: boolean;
  /**
   * position in the browser window
   */
  clientX: number;
  /**
   * position in the browser window
   */
  clientY: number;
  /**
   * position in the viewer
   */
  viewerX: number;
  /**
   * position in the viewer
   */
  viewerY: number;
  /**
   * position in spherical coordinates
   */
  longitude: number;
  /**
   * position in spherical coordinates
   */
  latitude: number;
  /**
   * position on the texture, if applicable
   */
  textureX?: number;
  /**
   * position on the texture, if applicable
   */
  textureY?: number;
  /**
   * clicked marker
   */
  marker?: Marker;
};

/**
 * Definition of a custom navbar button
 */
export type NavbarCustomButton = {
  id?: string;
  title?: string;
  content: string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  /** @default true */
  visible?: boolean;
  /** @default true */
  collapsable?: boolean;
  /** @default true */
  tabbable?: boolean;
};


/**
 * Viewer options, see {@link https://photo-sphere-viewer.js.org/guide/config.html}
 */
export type ViewerOptions = {
  container: HTMLElement | string;
  panorama?: any;
  /** @default equirectangular */
  adapter?: AdapterConstructor<any> | [AdapterConstructor<any>, any];
  plugins?: Array<PluginConstructor<any> | [PluginConstructor<any>, any]>;
  /** @default null */
  caption?: string;
  /** @default null */
  loadingImg?: string;
  /** @default 'Loading...' */
  loadingTxt?: string;
  /** @default `container` size */
  size?: Size;
  /** @default false */
  fisheye?: boolean;
  /** @default 30 */
  minFov?: number;
  /** @default 90 */
  maxFov?: number;
  /** @default 50 */
  defaultZoomLvl?: number;
  /** @default 0 */
  defaultLong?: number;
  /** @default 0 */
  defaultLat?: number;
  /** @default `0,0,0` */
  sphereCorrection?: { pan?: number, tilt?: number, roll?: number };
  /** @default 1 */
  moveSpeed?: number;
  /** @default 1 */
  zoomSpeed?: number;
  /** @default null */
  autorotateDelay?: number | null;
  /** @default 2rpm */
  autorotateSpeed?: string | number;
  /** @default `defaultLat` */
  autorotateLat?: number;
  /** @default true */
  moveInertia?: boolean;
  /** @default true */
  mousewheel?: boolean;
  /** @default true */
  mousemove?: boolean;
  /** @default false */
  captureCursor?: boolean;
  /** @default false */
  mousewheelCtrlKey?: boolean;
  /** @default false */
  touchmoveTwoFingers?: boolean;
  /** @default true */
  useXmpData?: boolean;
  panoData?: PanoData | PanoDataProvider;
  requestHeaders?: Record<string, string> | ((url: string) => Record<string, string>);
  /** @default '#000' */
  canvasBackground?: string;
  /** @default false */
  withCredentials?: boolean;
  /** @default 'autorotate zoom move download caption fullscreen' */
  navbar?: string | Array<string | NavbarCustomButton>;
  lang?: {
    autorotate: string;
    zoom: string;
    zoomOut: string;
    zoomIn: string;
    move: string;
    download: string;
    fullscreen: string;
    menu: string;
    twoFingers: string;
    ctrlZoom: string;
    loadError: string;
    [K: string]: string;
  },
  keyboard?: boolean | Record<string, string>;
};
