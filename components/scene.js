
import { Color, Scene } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r120/build/three.module.js';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('skyblue');

  return scene;
}

export { createScene };