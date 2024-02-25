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
            <div dir="ltr">
                <Checkbox>
                    <CheckboxIndicator />
                    Awesome
                </Checkbox>
            </div>
        );
    }
};
