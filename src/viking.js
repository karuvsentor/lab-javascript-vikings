// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveAttack(damage) {
        this.health -= damage;
        // buscar como implemetar dos opciones en return....   
        /*return if(this.health > 0){
            (`${this.name} has received ${damage} points of damage`)
            (`${this.name} has died in act of combat`)}
        }*/
    }
}


// Saxon
class Saxon {}

// War
class War {}