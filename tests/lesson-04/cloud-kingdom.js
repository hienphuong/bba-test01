let powerUp = 'mushroom';
let effect = '';

if (powerUp === 'mushroom'){
    effect = 'Mario becomes Super!';
}else if (powerUp === 'flower'){
    effect = 'Mario can shoot fireballs';
}else{
    effect = 'Mario is invincible!';
}
console.log(`Mario with ${powerUp} have effect is ${effect}`);