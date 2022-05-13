#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    //FragColor = texture(image, texcoord);

    //vec3 original_color = vec3(texture(image, texcoord));

    vec2 rescale = vec2(texcoord[0]*width/100.0,texcoord[1]*height/75.0);

    vec2 new_texcoord = vec2(rescale[0],rescale[1]);

    new_texcoord = vec2(new_texcoord[0]-(width/200.0)+.5,new_texcoord[1]-(height/200.0)+.5);

    float red = 1.0;
    float blue = 1.0;
    float green = 1.0;
    

    while(new_texcoord[0] < 0.0) {
        new_texcoord[0] += 1.0;
        red *= 0.75;
        blue *= 0.75;
    }

    while(new_texcoord[1] < 0.0) {
        new_texcoord[1] += 1.0;
        green *= 0.75;
        blue *= 0.75;
    }

    while(new_texcoord[0] > 1.0) {
        new_texcoord[0] -= 1.0;
        green *= 0.75;
    }

    while(new_texcoord[1] > 1.0) {
        new_texcoord[1] -= 1.0;
        red *= 0.75;
        green *= 0.75;
    }

    vec4 illumination = vec4(red,green,blue,1.0);

    FragColor= illumination*texture(image,new_texcoord);
}
