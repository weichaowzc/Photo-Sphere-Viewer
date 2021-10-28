import { AbstractPlugin, Animation, ExtendedPosition, Viewer } from '../..';
import { Event } from 'uevent';

export type MarkerType =
  'image'
  | 'html'
  | 'square'
  | 'rect'
  | 'circle'
  | 'ellipse'
  | 'path'
  | 'polygonPx'
  | 'polygonRad'
  | 'polylinePx'
  | 'polylineRad';

/**
 * Marker properties
 */
export type MarkerProperties = Partial<ExtendedPosition> & {
  image?: string;
  html?: string;
  square?: number;
  rect?: [number, number] | { width: number, height: number };
  circle?: number;
  ellipse?: [number, number] | { cx: number, cy: number };
  path?: string;
  polygonPx?: [number, number][];
  polygonRad?: [number, number][];
  polylinePx?: [number, number][];
  polylineRad?: [number, number][];

  id: string;
  width?: number;
  height?: number;
  scale?: number | [number, number];
  className?: string;
  style?: Record<string, string>;
  svgStyle?: Record<string, string>;
  anchor?: string;
  visible?: boolean;
  tooltip?: string | { content: string, position?: string };
  content?: string;
  hideList?: boolean;
  data?: any;
};

/**
 * Data of the `select-marker` event
 */
export type SelectMarkerData = {
  dblclick: boolean;
  rightclick: boolean;
};

export type MarkersPluginOptions = {
  /** @default false */
  clickEventOnMarker?: boolean;
  markers?: MarkerProperties[];
};

/**
 * Object representing a marker
 */
export class Marker {

  private constructor();

  readonly id: string;
  readonly type: MarkerType;
  readonly visible: boolean;
  readonly config: MarkerProperties;
  readonly data?: any;

  /**
   * Checks if it is a normal marker (image or html)
   */
  isNormal(): boolean;

  /**
   * Checks if it is a polygon/polyline marker
   */
  isPoly(): boolean;

  /**
   * Checks if it is a polygon/polyline using pixel coordinates
   */
  isPolyPx(): boolean;

  /**
   * Checks if it is a polygon/polyline using radian coordinates
   */
  isPolyRad(): boolean;

  /**
   * Checks if it is a polygon marker
   */
  isPolygon(): boolean;

  /**
   * Checks if it is a polyline marker
   */
  isPolyline(): boolean;

  /**
   * Checks if it is an SVG marker
   */
  isSvg(): boolean;

}

export const EVENTS: {
  GOTO_MARKER_DONE: 'goto-marker-done',
  LEAVE_MARKER: 'leave-marker',
  OVER_MARKER: 'over-marker',
  RENDER_MARKERS_LIST: 'render-markers-list',
  SELECT_MARKER: 'select-marker',
  SELECT_MARKER_LIST: 'select-marker-list',
  UNSELECT_MARKER: 'unselect-marker',
  HIDE_MARKERS: 'hide-markers',
  SET_MARKERS: 'set-markers',
  SHOW_MARKERS: 'show-markers',
};

/**
 * Displays various markers on the viewer
 */
export class MarkersPlugin extends AbstractPlugin {

  constructor(psv: Viewer, options: MarkersPluginOptions);

  /**
   * Toggles the visibility of all tooltips
   */
  toggleAllTooltips();

  /**
   * Displays all tooltips
   */
  showAllTooltips();

  /**
   * Hides all tooltips
   */
  hideAllTooltips();

  /**
   * Returns the total number of markers
   */
  getNbMarkers(): number;

  /**
   * Returns all the markers
   */
  getMarkers(): Marker[];

  /**
   * Adds a new marker to viewer
   * @throws {@link PSVError} when the marker's id is missing or already exists
   */
  addMarker(properties: MarkerProperties, render?: boolean): Marker;

  /**
   * Returns the internal marker object for a marker id
   * @throws {@link PSVError} when the marker cannot be found
   */
  getMarker(markerId: string): Marker;

  /**
   * Returns the last marker selected by the user
   */
  getCurrentMarker(): Marker;

  /**
   * Updates the existing marker with the same id
   * @description Every property can be changed but you can't change its type (Eg: `image` to `html`).
   */
  updateMarker(properties: MarkerProperties, render?: boolean): Marker;

  /**
   * Removes a marker from the viewer
   */
  removeMarker(markerId: string, render?: boolean);

  /**
   * Replaces all markers
   */
  setMarkers(markers: MarkerProperties[], render?: boolean);

  /**
   * Removes all markers
   */
  clearMarkers(render?: boolean);

  /**
   * Rotate the view to face the marker
   */
  gotoMarker(markerId: string, speed: string | number): Animation;

  /**
   * Hides a marker
   */
  hideMarker(markerId: string);

  /**
   * Shows a marker
   */
  showMarker(markerId: string);

  /**
   * Toggles a marker
   */
  toggleMarker(markerId: string);

  /**
   * Opens the panel with the content of the marker
   */
  showMarkerPanel(markerId: string);

  /**
   * Toggles the visibility of markers list
   */
  toggleMarkersList();

  /**
   * Opens side panel with list of markers
   */
  showMarkersList();

  /**
   * Closes side panel if it contains the list of markers
   */
  hideMarkersList();

  /**
   * Updates the visibility and the position of all markers
   */
  renderMarkers();

  /**
   * Triggered when the animation to a marker is done
   */
  on(e: 'goto-marker-done', cb: (e: Event, marker: Marker) => void): this;

  /**
   * Triggered when the user puts the cursor away from a marker
   */
  on(e: 'leave-marker', cb: (e: Event, marker: Marker) => void): this;

  /**
   * Triggered when the user puts the cursor hover a marker
   */
  on(e: 'over-marker', cb: (e: Event, marker: Marker) => void): this;

  /**
   * Used to alter the list of markers displayed on the side-panel
   */
  on(e: 'render-markers-list', cb: (e: Event, markers: Marker[]) => Marker[]): this;

  /**
   * Triggered when the user clicks on a marker. The marker can be retrieved from outside the event handler
   * with {@link MarkersPlugin.getCurrentMarker}
   */
  on(e: 'select-marker', cb: (e: Event, marker: Marker, data: SelectMarkerData) => void): this;

  /**
   * Triggered when a marker is selected from the side panel
   */
  on(e: 'select-marker-list', cb: (e: Event, marker: Marker) => void): this;

  /**
   * Triggered when a marker was selected and the user clicks elsewhere
   */
  on(e: 'unselect-marker', cb: (e: Event, marker: Marker) => void): this;

  /**
   * Triggered when the markers are hidden
   */
  on(e: 'hide-markers', cb: (e: Event) => void): this;

  /**
   * Triggered when the markers are shown
   */
  on(e: 'show-markers', cb: (e: Event) => void): this;

}
