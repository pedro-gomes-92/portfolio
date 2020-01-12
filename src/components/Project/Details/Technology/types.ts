export interface Data {
  url: string;
  image: string;
}

export type Name = 'vscode' | 'bulma' | 'sass' | 'typescript' | 'webpack' | 'jest' | 'react' | 'chartist';

export type Configs = {
  [name in Name]: Data;
};
