export class EnemySquare extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemySquare');
  }

  addEnemy(x, y) {
    this.body.reset(x, y);
    let randomEnemy = Math.floor(Math.random() * 5 + 1);
    if (randomEnemy % 2 === 0) {
      this.setTint('0x00BFFF');
      this.setVelocityY(140);
    } else {
      this.setTint('0xFF8C00');
      this.setVelocityY(40);
    }
    this.setActive(true);
    this.setVisible(true);
  }
}
export class EnemySquares extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);
    this.createMultiple({
      frameQuantity: 30,
      key: 'EnemySquare',
      active: false,
      visible: false,
      classType: EnemySquare,
    });
  }
  addNewEnemy() {
    const enemySquare = this.getFirstDead(true);

    if (enemySquare) {
      const x = Phaser.Math.Between(100, 700);
      const y = Phaser.Math.Between(-64, 0);
      enemySquare.addEnemy(x, y);
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
