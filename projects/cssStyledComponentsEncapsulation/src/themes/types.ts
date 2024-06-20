export interface Basic {
    primary:string;
    secondary: string;
    font:string;
    bg:string;
    heading: string;
}
export type Color = {
    basic: Basic;

};
export interface Theme {
    color: Color;
    name: 'light' | 'dark';
}
