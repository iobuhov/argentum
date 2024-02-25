import { createElement } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { CheckboxIndicator } from "./CheckboxIndicator";

const meta = {
    title: "Example/Checkbox",
    component: Checkbox,
    tags: ["autodocs"]
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render() {
        return (
            <Checkbox>
                <CheckboxIndicator />
                Awesome
            </Checkbox>
        );
    }
};

export const Sizes: Story = {
    render() {
        return (
            <table className="variants">
                <tr>
                    <th>Size 1</th>
                    <th>Size 2</th>
                    <th>Size 3</th>
                </tr>
                <tr>
                    <td>
                        <Checkbox className="size-1">
                            <CheckboxIndicator />
                            Awesome
                        </Checkbox>
                    </td>
                    <td>
                        <Checkbox className="size-2">
                            <CheckboxIndicator />
                            Awesome
                        </Checkbox>
                    </td>
                    <td>
                        <Checkbox className="size-3">
                            <CheckboxIndicator />
                            Awesome
                        </Checkbox>
                    </td>
                </tr>
            </table>
        );
    }
};

export const Radius: Story = {
    render() {
        const cap = (str: string) =>
            str[0].toLocaleUpperCase() + str.substring(1);
        const radius = ["none", "small", "medium", "large", "full"];
        return (
            <table className="variants">
                <tr>
                    {radius.map((s) => (
                        <th>{cap(s)}</th>
                    ))}
                </tr>
                <tr>
                    {radius.map((r) => (
                        <td>
                            <Checkbox className={`size-3 auk-radius-${r}`}>
                                <CheckboxIndicator />
                                Awesome
                            </Checkbox>
                        </td>
                    ))}
                </tr>
            </table>
        );
    }
};
