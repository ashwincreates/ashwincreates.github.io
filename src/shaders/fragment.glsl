uniform float aspect;
uniform float time;
uniform vec3 color;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

float hash(float n) { return fract(sin(n) * 43758.5453123); }

float noise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f*f*(3.0 - 2.0*f);
    float n = p.x + p.y*57.0 + 113.0*p.z;
    return mix(
        mix(mix(hash(n+0.0), hash(n+1.0), f.x),
            mix(hash(n+57.0), hash(n+58.0), f.x), f.y),
        mix(mix(hash(n+113.0), hash(n+114.0), f.x),
            mix(hash(n+170.0), hash(n+171.0), f.x), f.y),
        f.z);
}

// fractal noise
float fbm(vec3 p) {
    float f = 0.0;
    f += 0.5 * noise(p); p *= 2.02;
    f += 0.25 * noise(p); p *= 2.03;
    f += 0.125 * noise(p);
    return f;
}

void main() {
    vec2 uv = (vUv - 0.5) * vec2(1.0, aspect);
    float depth = clamp((vPosition.z + 1.0) * 0.5, 0.0, 1.0);

    // domain warp: distort UVs with noise for swiggly feel
    vec2 warp = vec2(
        fbm(vec3(uv * 2.5, time * 0.1)),
        fbm(vec3(uv * 2.5 + 5.2, time * 0.1))
    );
    uv += (warp - 0.5) * 0.3; // control swiggle amount

    float r = length(uv);
    float rings = sin((r * 25.0) - time * 0.8 + fbm(vec3(uv * 4.0, time * 0.2)) * 3.0);

    // convert rings to visible stripes
    float band = smoothstep(0.05, 0.0, abs(rings));

    // fade by depth and edge
    float fade = (1.0 - depth * 0.9) * (1.0 - r * 1.4);
    float intensity = band * fade;

    vec3 base = vec3(0.07, 0.09, 0.12);
    vec3 glow = color * intensity * 2.5;

    gl_FragColor = vec4(base + glow, 0.50);
}
