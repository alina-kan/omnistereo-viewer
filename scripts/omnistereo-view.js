function init() {
    let vrview_set1_a = new VRView.Player('#vrview_set1_a', {
        image: 'images/pointcloud_5M_4096_a.jpg',
        width: 360,
        height: 270,
        default_yaw: 270,
        is_stereo: true
    });

    let vrview_set2_a = new VRView.Player('#vrview_set2_a', {
        image: 'images/obj_3d_scene_4096_a.jpg',
        width: 360,
        height: 270,
        default_yaw: 90,
        is_stereo: true
    });
}
