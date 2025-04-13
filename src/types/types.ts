export type AlbumItem = {
  id: string;
  name: string;
  image: string;
  desc: string;
  bgColor: string;
};

export type SongItem = {
  id: string;
  name: string;
  image: string;
  file: string;
  desc: string;
  duration: string;
};

export interface AlbumItemProps {
  item: AlbumItem;
}

export interface SongItemProps {
  item: SongItem;
}

export type ChildrenPropType = {
  children: React.ReactNode;
};

export type TimeType = {
  currentTime: { second: number; minute: number };
  totalTime: { second: number; minute: number };
};
