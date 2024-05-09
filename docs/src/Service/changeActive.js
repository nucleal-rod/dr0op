import image2D from 'image2d';
export default function (className, tagetClass) {
    image2D('.' + className).attr('active', 'no');
    image2D('.' + className + "." + tagetClass).attr('active', 'yes');
};
