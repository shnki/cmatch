export interface ChampionshipMatch {
  championship_title: string;
  team_a: string;
  team_b: string;
  team_A_image: string;
  team_B_image: string;
  round: string;
  score: string;
  matches: string;
  channel: string;
  status: string;
  detailsUrl: string;
}

export interface ChampionshipData {
  championship_title: string;
  championshipsMatches: ChampionshipMatch[];
}
