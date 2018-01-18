/**
 * world: game world
 * playerBody: player physical body
 * controls: player FPS control
 * createRigidBox(x,y,z, width, height, length, material): creates a static box
 * createBox(same as above): creates a moveable box
 */

function setEnvironment(){
    // gravity
    world.gravity.set(0, -20, 0);
    // player
    playerBody.mass = 10;
    controls.setMaxVelocity(6);
    controls.setJumpVelocity(15);
}

function createMap() {
    // walls
    var texture = new THREE.TextureLoader().load("textures/orange_128.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(32, 32);
    var sideMaterial = new THREE.MeshPhongMaterial({map: texture});
    var groundMaterial = new THREE.MeshPhongMaterial({map: texture});
    createRigidBox(0, 20, 20, 40, 40, 2, sideMaterial);
    createRigidBox(0, 20, -20, 40, 40, 2, sideMaterial);
    var w3 = createRigidBox(20, 20, 0, 40, 40, 2, sideMaterial);
    w3['body'].quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2);
    w3['mesh'].position.copy(w3['body'].position);
    w3['mesh'].quaternion.copy(w3['body'].quaternion);
    var w4 = createRigidBox(-20, 20, 0, 40, 40, 2, sideMaterial);
    w4['body'].quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2);
    w4['mesh'].position.copy(w4['body'].position);
    w4['mesh'].quaternion.copy(w4['body'].quaternion);
    var ceiling = createRigidBox(0, 40, 0, 40, 40, 2, material);
    ceiling['body'].quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    ceiling['mesh'].position.copy(ceiling['body'].position);
    ceiling['mesh'].quaternion.copy(ceiling['body'].quaternion);

    // some things to jump around
    var boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000});
    createRigidBox(17.5, 0, 0, 5, 1, 2, boxMaterial);
    createRigidBox(17.5, 2, 2.5, 5, 1, 2, boxMaterial);
    createRigidBox(17.5, 2, 6.5, 5, 1, 2, boxMaterial);
    createRigidBox(17.5, 4, 10.5, 5, 1, 2, boxMaterial);
    createRigidBox(17.5, 6, 14.5, 5, 1, 2, boxMaterial);
    createRigidBox(15, 8, 18.5, 10, 1, 2, boxMaterial);

    var boxMaterial2 = new THREE.MeshPhongMaterial({ color: 0x00ffff});
    createRigidBox(5, 8, 18.5, 4, 1, 2, boxMaterial2);
    createRigidBox(-2, 8, 18.5, 4, 1, 2, boxMaterial2);
    createRigidBox(-10, 8, 18.5, 8, 1, 2, boxMaterial2);
    createRigidBox(-18, 9, 14.5, 4, 1, 2, boxMaterial2);
    createRigidBox(-19, 11, 7.5, 2, 1, 9, boxMaterial2);
    createRigidBox(-19, 12, -1, 2, 1, 5, boxMaterial2);
    createRigidBox(-19, 13, -6, 2, 1, 3, boxMaterial2);
    createRigidBox(-18, 14, -13, 4, 1, 6, boxMaterial2);

    var boxMaterial3 = new THREE.MeshPhongMaterial({ color: 0xffffff});
    createRigidBox(-5, 14, -13, 17, 1, 1, boxMaterial3);


    /*var texture = new THREE.TextureLoader().load("textures/wood.jpg");
    var boxMaterial4 = new THREE.MeshPhongMaterial({ map: texture});
    createBox(5, 14, 5, 1, 1, 1, boxMaterial3);*/
}