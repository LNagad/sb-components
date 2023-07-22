import './myLabel.css';
export interface Props {
    /**
     * This is the text that the label will show up
    */
    label?: string;
    /**
     * This is the default size for the label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Transform all text to uppercase
    */
    allCaps?: boolean;
    /**
     * Define the label theme color
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Define the label hex color
   */
    fontColor?: string;
    /**
     * Define the label font weight
    */
    fontWeight?: 'font-bold' | 'font-normal';
    /**
     * Define the label background color
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontWeight, fontColor, backgroundColor }: Props) => import("react/jsx-runtime").JSX.Element;
