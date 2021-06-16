main();

function main() {
  const canvas = document.getElementById('glcanvas');

  const gl = canvas.getContext('webgl');

  if (!gl) {
    alert('Unable to setup WebGL. Your browser or Computer may not support it.');
    return;
  }
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}
