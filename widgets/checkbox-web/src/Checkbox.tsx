import { ReactElement, createElement } from "react";
import { CheckboxContainerProps } from "../typings/CheckboxProps";
import { Checkbox as AgCheckbox } from "@xxx/argentum-ui/checkbox";

export function Checkbox(props: CheckboxContainerProps): ReactElement {
    return <AgCheckbox label="Foo" checked={props.valueAttribute.value} onChange={event => props.valueAttribute?.setValue(event.target.checked)} useContainer={props.useContainer} />
}
