import { ReactElement, createElement } from "react";
import { CheckboxContainerProps } from "../typings/CheckboxProps";
import { Checkbox as AgCheckbox, CheckboxIndicator } from "@xxx/argentum-ui/checkbox";
import classNames from "classnames";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "./sdf.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import(`./foo/sdf.js`).then(console.log);
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
