#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);

    //Fish Eye Lens 

    //Step 1: re-scale & translate to range [-1.0,1.0]
    
    vec2 rescaled_texcoord = (2.0 * texcoord) - 1.0;

    //Step2: Calculate Theta

    float theta = atan(rescaled_texcoord[1],rescaled_texcoord[0]);

    //Step3: Calculate radius = magnitude ^ 1.5

    float radius = pow(length(rescaled_texcoord),1.5);

    //Step4: Calculate Fish Eye Coordinates

    vec2 fish_texcoord = vec2(radius*cos(theta),radius*sin(theta));

    //Step5: revert to original bounds [0.0,1.0]

    vec2 final_texcoord= (fish_texcoord + 1.0) * 0.5;

    FragColor = texture(image, final_texcoord);
}
