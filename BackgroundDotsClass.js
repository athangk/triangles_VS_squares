const TINT_ARRAY_COLOR = [
  '0x00BFFF',
  '0xFF8C00',
  '0xe6b710',
  '0xff6ec7',
  '0x81dd4d',
];

export class BackgroundDot extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'backgroundDot');
  }

  addDot(x, y) {
    this.body.reset(x, y);
    let randomDotColor = Math.floor(Math.random() * 5);

    this.setTint(TINT_ARRAY_COLOR[randomDotColor]);
    this.setVelocityY(randomDotColor + 1);
    this.setAlpha(0.9);
    this.setActive(true);
    this.setVisible(true);
  }
}
export class BackgroundDots extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);
    this.createMultiple({
      frameQuantity: 30,
      key: 'BackgroundDot',
      active: false,
      visible: false,
      classType: BackgroundDot,
    });
  }
  addNewDot() {
    const backgroundDot = this.getFirstDead(true);

    if (backgroundDot) {
      const x = Phaser.Math.Between(100, 700);
      const y = Phaser.Math.Between(-64, 0);
      backgroundDot.addDot(x, y);
    }
  }
  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    if (this.y > 500) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}
