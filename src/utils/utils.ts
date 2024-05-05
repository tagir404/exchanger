export const blockScroll = (): void =>
    document.querySelector('body')?.classList.add('scroll-blocked')
export const unblockScroll = (): void =>
    document.querySelector('body')?.classList.remove('scroll-blocked')
