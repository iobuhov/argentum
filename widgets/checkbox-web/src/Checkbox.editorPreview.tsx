import { Checkbox, CheckboxIndicator } from "@xxx/argentum-ui/checkbox";
import { ReactElement, createElement } from "react";
import { CheckboxPreviewProps } from "../typings/CheckboxProps";
import classNames from "classnames";

export function preview(props: CheckboxPreviewProps): ReactElement {
    return (
        <Checkbox isSelected={false} className={classNames("auk-Checkbox", props.class)}>
            <CheckboxIndicator />
            {props.label}
        </Checkbox>
    );
}
