class hantu{
    constructor(hp,name,speed,ap,isDead){
        this.name = name;
        this.speed = speed;
        this.hp = hp;
        this.ap = ap;
        this.isDead = isDead;
    }
    attact(){
        this.ap += 10;
        return this.ap;
    }
    confused(){
        this.hp -= 5;
        return this.hp;
    }
    status(){
        if(this.hp<=this.isDead ){
            this.isDead = true;
            return this.isDead;
        }else{
            this.isDead = false;
            return this.isDead;
        }
    }
}
// let coba = new hantu(100);
// console.log(coba.attact());
class hantu1 extends hantu {
    constructor(hp,name,speed,ap,isDead){
        super(hp,name,speed,ap,isDead)
    }
    lompat(){
        this.speed +=10;
        return this.speed;
    }
    lompatJauh(){
        this.speed +=50;
        return this.speed;
    }
}

class hantu2 extends hantu {
    constructor(hp,name,speed,ap,isDead){
        super(hp,name,speed,ap,isDead)
    }
    jalan(){
        this.speed +=10;
        return this.speed;
    }
    lari(){
        this.speed +=70;
        return this.speed;
    }
}

let ghost1 = new hantu1(5,"Pocong",100,100,0);
let ghost2 = new hantu2(100,"Zombie",100,100,0);
console.log("nama : "+ ghost1.name);
console.log("ap : "+ ghost1.attact());
console.log("hp : "+ ghost1.confused());
console.log("jump : "+ ghost1.lompat());
console.log("Super Jump : "+ ghost1.lompatJauh());
console.log("isDead : "+ ghost1.status());
console.log("==================================");
console.log("nama : "+ ghost2.name);
console.log("ap : "+ ghost2.attact());
console.log("hp : "+ ghost2.confused());
console.log("walk : "+ ghost2.jalan());
console.log("run : "+ ghost2.lari());
console.log("isDead : "+ ghost2.status());

