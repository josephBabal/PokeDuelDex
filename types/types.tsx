type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
}

type Form = {
  name: string;
  url: string;
}

type Sprites = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  other: {
    dream_world: {
      front_default: string
    }
    home: {
      front_default: string
    }
    'official-artwork': {
      front_default: string
    }
  }
}

type Stat = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

type Type = {
  slot: number
  type: {
    name: string
    url: string
  }
}

type PokemonName = {
  name: string
}



type Pokemon = {
  id: number,
  abilities: Array<Ability>
  base_experience: number
  forms: Array<Form>
  sprites: Sprites
  stats: Array<Stat>
  types: Array<Type>
  height: number
  weight: number
}


//* species
type FlavorTextEntry = {
  flavor_text: string
  language: {
    name: string
  }
}

type FormDescription = {
  description: string
  language: {
    name: string
  }
}

type PokemonSpecies = {
  base_happiness: number
  capture_rate: number
  evolution_chain: {
    url: string
  }
  flavor_text_entries: Array<FlavorTextEntry>
  form_descriptions: Array<FormDescription>
  growth_rate: {
    name: string
  }
  id: number
  name: string
}

export type { 
  Ability,
  Stat,
  Pokemon,
  PokemonSpecies,
  PokemonName
};