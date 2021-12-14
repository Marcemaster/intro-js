class Animal {
    alive() {
        return true;
    }
}

class Mammal extends Animal {
    feedWidhMilk() {
        return true;
    }
}

class Insect extends Animal {
    hasSpine() {
        return false;
    }
}

class Leon extends Mammal {}

class Whale extends Mammal {}

class Mosquito extends Insect {}

class bee extends Insect {}

class Chicken extends Animal {}
