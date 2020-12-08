import { Clock } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
  }

  start() {}

  stop() {}
}

export { Loop };