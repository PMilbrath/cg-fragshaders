#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);

    //Ripple fragment

    //Step 1: re-scale & translate to range [-1.0,1.0]
    
    vec2 rescaled_texcoord = (2.0 * texcoord) - 1.0;

    //Step 2: Calculate radius = magnitude

    float radius = length(rescaled_texcoord);

    //Step 3: Calculate Texcoord Offset

    vec2 offset = rescaled_texcoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;

    //Step5: revert to original bounds [0.0,1.0]

    vec2 final_texcoord= texcoord + offset;

    FragColor = texture(image, final_texcoord);
}
