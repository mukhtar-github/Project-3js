
import { Color, Scene } from '../systems/node_modules/three';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('skyblue');

  return scene;
}

export { createScene };