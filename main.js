import { World } from './World.js';

function main() {
  // create a new World instance
  const world = new World();
  
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // add the canvas to the container
  container.append(World.canvas);

  // set the world size
  world.setSize(
    container.clientHeight,
    container.clientWidth,
    Window.devicePixelRatio
  );

  // draw the scene
  world.render();
}

main();