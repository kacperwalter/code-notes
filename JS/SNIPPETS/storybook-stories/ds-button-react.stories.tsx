import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { DsButton } from "@ls-fe/design-system-react"
import type { DsButtonProps } from "@ls-fe/design-system-react"
import {
	DsButtonTestWithIcon,
	DsButtonTestAsLinkWithIcon,
	testPropsAsButton,
	testPropsAsButtonWithIcon,
	testPropsAsLink,
	testPropsAsLinkWithCustomTarget,
	testPropsAsLinkWithIcon,
} from "@ls-fe/design-system-react"


const meta: Meta<DsButtonProps> = {
	component: DsButton,
	title: "Components/Button/React",
}

export default meta

type Story = StoryObj<typeof DsButton>

const Template = (args: DsButtonProps) => <DsButton {...args} />

export const Button: Story = {
	render: (args) => Template(args),
	args: testPropsAsButton,
}

export const ButtonWithIcon: Story = {
	render: (args) => Template(args),
	args: testPropsAsButtonWithIcon,
}

export const ButtonLink: Story = {
	render: (args) => Template(args),
	args: testPropsAsLink,
}

export const LinkWithCustomTarget: Story = {
	render: (args) => Template(args),
	args: testPropsAsLinkWithCustomTarget,
}

export const LinkWithIcon: Story = {
	render: (args) => Template(args),
	args: testPropsAsLinkWithIcon,
}

export const ButtonTestWithIcon: Story = {
	render: () => <DsButtonTestWithIcon />,
}

export const ButtonTestAsLinkWithIcon: Story = {
	render: () => <DsButtonTestAsLinkWithIcon />,
}