
// for HP: (level/100)*((basestat*2)+IV+EV/4)+level+10
// for everything else: [(level/100)*((basestat*2)+IV+EV/4)+5]*nature

// rounded down of course

// for the maximum stat, nature=1.1, EV=255(or 252), and IV=31
// for the minimum stat, nature=0.9, EV=0, and IV=0

// Helper functions for calculating individual stats
const calculateHpMinMax = (baseStat: number, name: string) => {
  const max = Math.floor(baseStat * 2 + 204);
  const min = Math.floor(2 * baseStat + 110);
  return { name, max, min };
};
  
const calculateMinMaxStat = (baseStat: number, name: string) => {
  const max = Math.floor((baseStat * 2 + 99) * 1.1);
  const min = Math.floor(((2 * baseStat) + 5) * 0.9);
  return { name, max, min };
};
  
  // Function to calculate stats and total base stats
const calculatePokemonStats = (pokemon: any) => {
  const baseStats = [
    { name: "HP", stat: pokemon.stats[0].base_stat },
    { name: "Attack", stat: pokemon.stats[1].base_stat },
    { name: "Defense", stat: pokemon.stats[2].base_stat },
    { name: "Sp. Atk", stat: pokemon.stats[3].base_stat },
    { name: "Sp. Def", stat: pokemon.stats[4].base_stat },
    { name: "Speed", stat: pokemon.stats[5].base_stat },
  ];
  
  const stats = baseStats.map((item, idx) => {
    if (idx === 0) {
      return calculateHpMinMax(item.stat, item.name);
    } else {
      return calculateMinMaxStat(item.stat, item.name);
    }
  });
  
  const totalBaseStats = baseStats.reduce((acc, item) => acc + item.stat, 0);

  return { stats, totalBaseStats };
};

export default calculatePokemonStats;
  