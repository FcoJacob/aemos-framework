import { render } from '@testing-library/vue'
import AEBadge from "@/components/AEBadge/AEBadge.vue";

describe('AEBadge', () => {
    it('should render a badge', () => {
        render(AEBadge, { props: { badgeText: '3' } })

        expect(screen.getByText('3')).toBeInTheDocument()
    })
})
