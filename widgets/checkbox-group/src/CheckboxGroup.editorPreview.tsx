import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { CheckboxGroupPreviewProps } from "../typings/CheckboxGroupProps";

export function preview({ sampleText }: CheckboxGroupPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/CheckboxGroup.css");
}
