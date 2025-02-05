export interface Change {
  [x: string]: string | TrustedHTML;
  date: string;
  title: string;
  description: string;
}

export const changes: Change[] = [
  {
    date: "2024-01-01",
    title: "Initial Release",
    description: "First public release of the platform with core features.",
  },
];
