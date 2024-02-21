import * as React from "react";

export function Checkbox(props: { label: string }) {
    return (
        <label htmlFor="cbx">
            {props.label}
            <input id="cbx" type="checkbox" />
        </label>
    );
}
