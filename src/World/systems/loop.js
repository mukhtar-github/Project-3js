import { Clock } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }
}

export { Loop };