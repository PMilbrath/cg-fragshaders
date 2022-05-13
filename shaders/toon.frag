#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);

    vec3 original_color = vec3(texture(image, texcoord));

    //Color Values Round to (0.0, 0.25, 0.5, 0.75, 1.0)

    float red = round(4.0 * original_color[0]) / 4.0;
    float green = round(4.0 * original_color[1]) / 4.0;
    float blue = round(4.0 * original_color[2]) / 4.0;

    FragColor = vec4(red,green,blue,1.0);
}
