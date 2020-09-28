import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
class World {
    constructor() {
        this.canvas = null; // TODO
        this.camera = createCamera();
        this.scene = createScene();
        this.renderer = createRenderer();
    }

    render() {
        // TODO
    }

    setSize(width, height, pixelRatio) {
        // TODO
    }

}

export { World };