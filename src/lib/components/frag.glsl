precision highp float;
	
uniform float u_time;
uniform vec2 u_resolution;

varying vec2 vUv;

vec2 random2( vec2 p ) {
  return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  st.x *= u_resolution.x/u_resolution.y;

  // Metaball scale. Increasing this value will make the metaballs smaller and increase the number of metaballs.
  st *= 2.0;

  // Tile the space
  vec2 i_st = floor(st);
  vec2 f_st = fract(st);

  // shortest distance. Increasing this value widens the space between metaballs.  
  float m_dist = 1.0;

  for (int j= -1; j <= 1; j++ ) {
    for (int i= -1; i <= 1; i++ ) {
      // Adjacent locations in the grid.
      vec2 neighbor = vec2(float(i),float(j));

      // A random position from the current location in the grid + adjacent locations.
      // By subtracting the value of u_mouse from now on, it becomes possible to interfere with the position of the metaball by moving the mouse.
      vec2 offset = random2(i_st + neighbor);

      // Animate the offset
      offset = 0.5 + 0.5 * sin(u_time + 8.321 * offset);

      // cell position
      vec2 pos = neighbor + offset - f_st;

      // cell distance
      float dist = length(pos);

      // output meta ball
      m_dist = min(m_dist, m_dist * dist);
    }
  }

  // セルを描画する。
  float result = step(0.090, m_dist);
  // 背景orメタボールの色
  vec3 outputColor = vec3(0.0);
  // メタボールの色
  vec3 blobColor = vec3(0.3, 0.4, 1.0);
  
  // もし、result(セルの描画結果)が1.0なら...
  if (result == 1.0)
    // outputColorには背景色を入れる。
    outputColor =  vec3(0.1, 0.1, 0.1);
  else
    // outputColorにはblobColor(メタボールの色)を入れる。
    outputColor = blobColor;

  // outputColorを出力する。
  gl_FragColor = vec4(outputColor, 1.0);
}
