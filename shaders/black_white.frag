#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);

    vec3 original_color = vec3(texture(image, texcoord));
    //Converting to Black & White: L = 0.299 * Red + 0.587 * Green + 0.114 * Blue
    float illumination = 0.299*original_color[0] + 0.587*original_color[1] + 0.114*original_color[2];
    FragColor=vec4(illumination,illumination,illumination,1.0);
}
