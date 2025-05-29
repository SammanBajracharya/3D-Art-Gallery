// dimensions
export const floorDimensions = { length: 40, width: 40 };
export const baseWallHeight = 12;
export const wallDimensions = { width: floorDimensions.length, height: 12 };

// config
export const ceilingConfig = {
    x: 0,
    y: baseWallHeight,
    z: 0,
    rotation: Math.PI / 2,
};
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
export const doorConfig = { x: -floorDimensions.length / 2 + 6, y: 0, z: -floorDimensions.width / 2 };

// arts
export const artworkConfigs = [
    // Wall 1 (back)
    { url: '1.jpeg', scale: { x: 2, y: 1.5 }, pos: { x: 0, y: baseWallHeight / 2, z: -floorDimensions.width / 2 } },
    { url: '1.jpeg', scale: { x: 2, y: 2 }, pos: { x: 10, y: baseWallHeight / 2, z: -floorDimensions.width / 2 } },

    // Wall 4 (right)
    { url: '1.jpeg', scale: { x: 2.5, y: 1.5 }, pos: { x: floorDimensions.length / 2, y: baseWallHeight / 2, z: -12 }, rotation: { x: 0, y: -Math.PI / 2, z: 0 } },
    { url: '1.jpeg', scale: { x: 1, y: 1 }, pos: { x: floorDimensions.length / 2, y: baseWallHeight / 2, z: -4 }, rotation: { x: 0, y: -Math.PI / 2, z: 0 } },
    { url: '1.jpeg', scale: { x: 3, y: 3 }, pos: { x: floorDimensions.length / 2, y: baseWallHeight / 2, z: 5 }, rotation: { x: 0, y: -Math.PI / 2, z: 0 } },
    { url: '1.jpeg', scale: { x: 1, y: 1 }, pos: { x: floorDimensions.length / 2, y: baseWallHeight / 2, z: 14 }, rotation: { x: 0, y: -Math.PI / 2, z: 0 } },

    // Wall 2 (front)
    { url: '1.jpeg', scale: { x: 3.5, y: 2 }, pos: { x: 10, y: baseWallHeight / 2, z: floorDimensions.width / 2 }, rotation: { x: 0, y: Math.PI, z: 0 } },
    { url: '1.jpeg', scale: { x: 1.5, y: 1.5 }, pos: { x: -3, y: baseWallHeight / 2, z: floorDimensions.width / 2 }, rotation: { x: 0, y: Math.PI, z: 0 } },
    { url: '1.jpeg', scale: { x: 1, y: 1 }, pos: { x: -12, y: baseWallHeight / 2, z: floorDimensions.width / 2 }, rotation: { x: 0, y: Math.PI, z: 0 } },
    { url: '1.jpeg', scale: { x: 3.5, y: 2 }, pos: { x: 10, y: baseWallHeight / 2, z: floorDimensions.width / 2 }, rotation: { x: 0, y: Math.PI, z: 0 } },

    // Wall 3 (left)
    { url: '1.jpeg', scale: { x: 2, y: 1.5 }, pos: { x: -floorDimensions.length / 2, y: baseWallHeight / 2, z: -10 }, rotation: { x: 0, y: Math.PI / 2, z: 0 } },
    { url: '1.jpeg', scale: { x: 2.5, y: 2 }, pos: { x: -floorDimensions.length / 2, y: baseWallHeight / 2, z: 8 }, rotation: { x: 0, y: Math.PI / 2, z: 0 } },
];

export const spotlightConfigs = [
    // Wall 1 (back)
    { pos: { x: 0, y: baseWallHeight, z: -floorDimensions.width / 2 + 4 } },
    { pos: { x: 10, y: baseWallHeight, z: -floorDimensions.width / 2 + 4 } },

    // Wall 4 (right)
    { pos: { x: floorDimensions.length / 2 - 4, y: baseWallHeight, z: -12 }, rotation: { x: 0, y: -Math.PI / 2, z: 0 } },
    { pos: { x: floorDimensions.length / 2 - 4, y: baseWallHeight, z: -4 }, rotation: { x: 0, y: -Math.PI / 2, z: 0 } },
    { pos: { x: floorDimensions.length / 2 - 4, y: baseWallHeight, z: 5 }, rotation: { x: 0, y: -Math.PI / 2, z: 0 } },
    { pos: { x: floorDimensions.length / 2 - 4, y: baseWallHeight, z: 14 }, rotation: { x: 0, y: -Math.PI / 2, z: 0 } },

    // Wall 2 (front)
    { pos: { x: 10, y: baseWallHeight, z: floorDimensions.width / 2 - 4 }, rotation: { x: 0, y: Math.PI, z: 0 } },
    { pos: { x: -3, y: baseWallHeight, z: floorDimensions.width / 2 - 4 }, rotation: { x: 0, y: Math.PI, z: 0 } },
    { pos: { x: -12, y: baseWallHeight, z: floorDimensions.width / 2 - 4 }, rotation: { x: 0, y: Math.PI, z: 0 } },

    // Wall 3 (left)
    { pos: { x: -floorDimensions.length / 2 + 4, y: baseWallHeight, z: -10 }, rotation: { x: 0, y: Math.PI / 2, z: 0 } },
    { pos: { x: -floorDimensions.length / 2 + 4, y: baseWallHeight, z: 8 }, rotation: { x: 0, y: Math.PI / 2, z: 0 } },
];
