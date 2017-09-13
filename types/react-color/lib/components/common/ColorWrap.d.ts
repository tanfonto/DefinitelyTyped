import { ComponentClass, StatelessComponent } from "react";
import { HSLColor, RGBColor, ColorChangeHandler, Color, ColorResult } from "react-color";

export type CustomColorChangeHandler = (color: Color | ColorResult) => void;

export interface InjectedColorProps {
    hex?: string;
    hsl?: HSLColor;
    rgb?: RGBColor;
    onChange?: CustomColorChangeHandler;
}

export interface ExportedColorProps {
    color?: Color;
    onChange?: ColorChangeHandler;
    onChangeComplete?: ColorChangeHandler;
}

export default function CustomPicker<A>(component: ComponentClass<A & InjectedColorProps> | StatelessComponent<A & InjectedColorProps>): ComponentClass<A & ExportedColorProps>;
