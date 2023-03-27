export class BulletShot extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'bulletShot');
  }

  createBullet(x, y) {
    this.body.reset(x, y);
    this.setActive(true);
    this.setVisible(true);
  }
  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    if (this.y <= 10) {
      this.setActive(false);
      this.setVisible(false);
      this.destroy();
    }
  }
}
export class BulletShots extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);
    this.createMultiple({
      frameQuantity: 2,
      key: 'BulletShot',
      active: false,
      visible: false,
      classType: BulletShot,
    });
  }
  createBulletShot(x, y) {
    const bulletShot = this.getFirstDead(true);

    if (bulletShot) {
      bulletShot.createBullet(x, y);
    }
  }
}
