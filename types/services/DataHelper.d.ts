import { Vector3, Intersection } from 'three';
import { ExtendedPosition, Point, Position, SphereCorrection } from '../models';
import { AbstractService } from './AbstractService';

/**
 * Collections of data converters for the current viewer
 */
export class DataHelper extends AbstractService {

  private constructor();

  /**
   * Converts vertical FOV to zoom level
   */
  fovToZoomLevel(fov: number): number;

  /**
   * Converts zoom level to vertical FOV
   */
  zoomLevelToFov(level: number): number;

  /**
   * Convert vertical FOV to horizontal FOV
   */
  vFovToHFov(vFov: number): number;

  /**
   * Converts a speed into a duration from current position to a new position
   */
  speedToDuration(value: string | number, angle: number): number;

  /**
   * Converts pixel texture coordinates to spherical radians coordinates
   * @throws {@link PSVError} when the current adapter does not support texture coordinates
   */
  textureCoordsToSphericalCoords(point: Point): Position;

  /**
   * Converts spherical radians coordinates to pixel texture coordinates
   * @throws {@link PSVError} when the current adapter does not support texture coordinates
   */
  sphericalCoordsToTextureCoords(position: Position): Point;

  /**
   * Converts spherical radians coordinates to a THREE.Vector3
   */
  sphericalCoordsToVector3(position: Position, vector: Vector3): Vector3;

  /**
   * Converts a THREE.Vector3 to spherical radians coordinates
   */
  vector3ToSphericalCoords(vector: Vector3): Position;

  /**
   * Converts position on the viewer to a THREE.Vector3
   */
  viewerCoordsToVector3(point: Point): Vector3;

  /**
   * Converts a THREE.Vector3 to position on the viewer
   */
  vector3ToViewerCoords(vector: Vector3): Point;

  /**
   * Converts spherical radians coordinates to position on the viewer
   */
  sphericalCoordsToViewerCoords(position: Position): Point;

  /**
   * Returns the first intersection with the cursor and having specific data
   */
  getIntersection(viewerPoint: Point, objectDataName: string): Intersection;

  /**
   * Converts x/y to latitude/longitude if present and ensure boundaries
   */
  cleanPosition(position: ExtendedPosition): Position;

  /**
   * Ensure a SphereCorrection object is valid
   */
  cleanSphereCorrection(sphere: SphereCorrection): SphereCorrection;

}
