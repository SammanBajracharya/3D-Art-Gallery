// dimensions
export const floorDimensions = { length: 40, width: 40 };
export const baseWallHeight = 12;
export const wallDimensions = { width: floorDimensions.length, height: 12 };

// position
export const wallConfigs = {
    1: {
        x: 0,
        y: baseWallHeight / 2,
        z: -floorDimensions.width / 2,
        width: floorDimensions.length,
        xrotation: 0,
        yrotation: 0,
    },
    2: {
        x: 0,
        y: baseWallHeight / 2,
        z: floorDimensions.width / 2,
        width: floorDimensions.length,
        xrotation: -Math.PI,
        yrotation: 0,
    },
    3: {
        x: -floorDimensions.length / 2,
        y: baseWallHeight / 2,
        z: 0,
        width: floorDimensions.width,
        xrotation: 0,
        yrotation: Math.PI / 2,
    },
    4: {
        x: floorDimensions.length / 2,
        y: baseWallHeight / 2,
        z: 0,
        width: floorDimensions.width,
        xrotation: -Math.PI,
        yrotation: -Math.PI / 2,
    },
}
export const doorPos = { x: -floorDimensions.length / 2 + 6, y: 0, z: -floorDimensions.width / 2 };
