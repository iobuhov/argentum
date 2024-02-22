import { ReactElement, createElement } from "react";
import { CheckboxContainerProps } from "../typings/CheckboxProps";
import { Checkbox as AgCheckbox } from "@xxx/argentum-core/checkbox";

export function Checkbox(_props: CheckboxContainerProps): ReactElement {
    return <AgCheckbox label="Foo" />
}
