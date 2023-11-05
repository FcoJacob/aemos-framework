import AEBadge from './AEBadge.vue'
import type { AEBadgeProps } from "./types"

export default {
    title: 'Atoms/AEBadge',
    component: AEBadge,
    argTypes: {
        size: {
            control: { type: 'select', options: ['small', 'large'] },
            defaultValue: 'small',
        },
        badgeText: {
            control: 'text',
            defaultValue: 'Badge',
        },
    },
};

const Template = (args: AEBadgeProps) => ({
    components: { AEBadge },
    setup() {
        return { args };
    },
    template: '<AEBadge v-bind="args" />',
});

export const Small = Template.bind({});
Small.args = {
    size: 'small'
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    badgeText: '3',
};
