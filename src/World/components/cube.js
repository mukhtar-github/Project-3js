import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'purple' });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.position.set(-0.5, -0.1, 1);

  cube.scale.set(1.25, 0.25, 0.5);

  // cube.rotation.x = MathUtils.degToRad(-60);
  // cube.rotation.y = MathUtils.degToRad(-45);
  // cube.rotation.z = MathUtils.degToRad(60);

  return cube;
}

export { createCube };
