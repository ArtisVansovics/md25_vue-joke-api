export type JokesData = {
  error: string;
  type: string;
  jokes: Joke[];
};

export type Joke = {
  category: string;
  type: string;
  joke: string;
  flags: Flags;
  safe: boolean;
  id: number;
  lang: string;
};

export type Flags = {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
};

export type JokeData = {
  error: boolean;
  category: string;
  type: string;
  joke: string;
  flags: Flags;
  id: number;
  safe: boolean;
  lang: string;
};
