import image2D from '../../../src/image2D';

describe('旋转矩阵', function () {

    it('2D旋转', function () {
        let rotate2D = image2D.Matrix4().rotate(Math.PI / 2, 2, 1).use(2, 0);
        expect(rotate2D).toEqual([3, 1, 0, 1]);
    });

    it('来自圆心的射线旋转', function () {
        let rotateLine = image2D.Matrix4().rotate(Math.PI / 3 * 2, 1, 1, 1).use(0, 1, 0);
        expect(rotateLine).toEqual([-0, 0, 1, 1]);
    });

    it('任意射线旋转', function () {
        let rotate3D = image2D.Matrix4().rotate(Math.PI / 3 * 4, 1, 0, 1, 2, 1, 2).use(1, 1, 1);
        expect(rotate3D).toEqual([2, -0, 1, 1]);
    });

});

describe('缩放矩阵', function () {

    it('立体缩放', function () {
        let scale = image2D.Matrix4().scale(1, 2, 7, 3, 4, 1).use(0, 0, 1);
        expect(scale).toEqual([0, -4, 1, 1]);
    });

});

describe('移动矩阵', function () {

    it('平面移动', function () {
        let move2D = image2D.Matrix4().move(5, 3, 4).use(1, 2);
        expect(move2D).toEqual([4, 6, 0, 1]);
    });

    it('立体移动', function () {
        let move3D = image2D.Matrix4().move(5, 3, 4, 0).use(1, 1, 1);
        expect(move3D).toEqual([4, 5, 1, 1]);
    });

});

describe('多变换矩阵', function () {

    it('缩放-》移动-》旋转', function () {
        let multiTransform = image2D.Matrix4().scale(0.5, 0.5, 0.5, 1, 0, 0).move(Math.sqrt(14), -1, -2, -3).rotate(Math.PI / 3 * 4, 1, 0, 1, 2, 1, 2).use(3, 6, 8);
        expect(multiTransform).toEqual([2, -0, 1, 1]);
    });

});
