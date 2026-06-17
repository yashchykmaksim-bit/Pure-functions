const player = {name: 'Маг', health: 90};

export default function healthPlayer(player) {
  if (player.health > 50) {
    return "healthy";
  } else if (player.health <= 50 && player.health >= 15) {
    return "wounded";
  } else if (player.health < 15) {
    return "critical";
  }
}
