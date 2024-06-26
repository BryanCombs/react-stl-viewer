import React from 'react';
import { PerspectiveCameraProps } from '@react-three/fiber';
export interface CameraPosition {
    latitude: number;
    longitude: number;
    distance: number;
}
/** @deprecated use {@link CameraPosition} instead */
export type CameraInitialPosition = CameraPosition;
export interface CameraProps extends Partial<PerspectiveCameraProps> {
    initialPosition: CameraPosition;
    center: [number, number, number];
}
export declare function polarToCartesian(polar: CameraPosition): [number, number, number];
declare const Camera: React.FC<CameraProps>;
export default Camera;
