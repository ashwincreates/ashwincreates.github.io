uniform float aspect;
uniform float time;
uniform vec3 color;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

float mod289(float x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 perm(vec4 x) {
    return mod289(((x * 34.0) + 1.0) * x);
}

float noise(vec3 p) {
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

vec3 concentric(vec2 uv) {
    return vec3(step(0.5, fract(length(uv) * 30.0 - (time / 5.0))));
}

void main() {
    vec2 uv = vec2(vUv.x - 0.5, vUv.y * aspect - (aspect / 2.0));
    vec3 coords = concentric(uv + noise(vPosition) * 0.1);

    gl_FragColor = vec4(coords * color, 0.1);
}
