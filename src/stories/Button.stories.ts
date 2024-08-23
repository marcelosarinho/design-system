import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    text: "Botão"
  }
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    text: Primary.args?.text
  }
}