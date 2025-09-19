export interface PillProps {
  title: string;
  styles: string;
}

export interface ButtonProps {
  title: string;
  styles: {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-Full';
  };
}