import { createElement, Fragment } from "react";

export function Checkbox(props: {
    label: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
    return (
        <Fragment>
            <input
                id="cbxx"
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
            />
            <label htmlFor="cbxx" className="ag-CheckboxRoot">
                {props.label}
            </label>
        </Fragment>
    );
}
