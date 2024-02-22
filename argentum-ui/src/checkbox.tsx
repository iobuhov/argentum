import { createElement } from "react";

export function Checkbox(props: { label: string }) {
    return (
        <label htmlFor="cbxx" className="ag-CheckboxRoot">
            {props.label}
            <input id="cbxx" type="checkbox" />
        </label>
    );
}
