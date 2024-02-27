import { ReactElement, createElement } from "react";
import { CheckboxContainerProps } from "../typings/CheckboxProps";
import { Checkbox as AgCheckbox, CheckboxIndicator } from "@xxx/argentum-ui/checkbox";
import classNames from "classnames";

export function Checkbox(props: CheckboxContainerProps): ReactElement {
    return (
        <AgCheckbox
            className={classNames("auk-Checkbox", props.class)}
            isSelected={props.valueAttribute.value}
            onChange={checked => props.valueAttribute?.setValue(checked)}
        >
            <CheckboxIndicator />
            {props.label?.value}
        </AgCheckbox>
    );
}
