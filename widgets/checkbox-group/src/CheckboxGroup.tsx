import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { CheckboxGroupContainerProps } from "../typings/CheckboxGroupProps";

import "./ui/CheckboxGroup.css";

export function CheckboxGroup({ sampleText }: CheckboxGroupContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
