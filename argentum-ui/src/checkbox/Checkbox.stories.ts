import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import "./Checkbox.scss";

const meta = {
    title: "Example/Checkbox",
    component: Checkbox,
    tags: ["autodocs"]
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Awesome"
    }
};