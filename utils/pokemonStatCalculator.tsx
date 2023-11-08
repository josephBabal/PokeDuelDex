// Helper functions for calculating individual stats
const calculateHpMinMax = (baseStat: number, name: string) => {
  const max = Math.floor(baseStat * 2 + 204);
  const min = Math.floor(0.01 * (2 * baseStat * 100) + 100 + 10);
  return { name, max, min };
};
  
const calculateMinMaxStat = (baseStat: number, name: string) => {
  const max = Math.floor((baseStat * 2 + 99) * 1.1);
  const min = Math.floor(0.01 * (2 * baseStat) * 100 + 5);
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
  