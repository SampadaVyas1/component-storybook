export interface ILoader {
  show: boolean;
  variant?: 'Linear' | 'Circular' | 'Dotted';
  size?: 'X-Small' | 'Small' | 'Medium' | 'Large' | 'X-Large';
  loaderColor?: string;
  loaderBgColor?: string;
}
