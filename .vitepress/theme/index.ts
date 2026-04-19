import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h, nextTick, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vitepress'
import './style.css'

import ProblemCard from './components/ProblemCard.vue'
import ProblemHeader from './components/ProblemHeader.vue'
import SolutionBlock from './components/SolutionBlock.vue'
import ProblemNav from './components/ProblemNav.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import TagFilter from './components/TagFilter.vue'
import Playground from './components/Playground.vue'
import ProblemList from './components/ProblemList.vue'
import ProblemPage from './components/ProblemPage.vue'

const NAV_TRANSITION_MS = 130
const configuredRouters = new WeakSet<object>()

function normalizePath(path: string): string {
  if (!path) return '/'
  const withoutHtml = path.replace(/index\.html$/, '')
  return withoutHtml.endsWith('/') ? withoutHtml : `${withoutHtml}/`
}

function isSameDocumentNavigation(target: string): boolean {
  if (!target || target.startsWith('#')) return true
  const [targetPath] = target.split('#')
  return normalizePath(targetPath) === normalizePath(window.location.pathname)
}

function scrollSidebarToActiveItem() {
  const sidebar = document.querySelector('.VPSidebar')
  if (!sidebar) return

  const activeItem = sidebar.querySelector(
    '.VPSidebar .VPLink.link.active, .VPSidebar .VPSidebarItem.is-active .item .link, .VPSidebar .VPSidebarItem.is-active > .item',
  ) as HTMLElement | null

  if (!activeItem) return
  activeItem.scrollIntoView({ block: 'nearest' })
}

export default {
  extends: DefaultTheme,
  Layout() {
    const router = useRouter()

    if (!configuredRouters.has(router as unknown as object)) {
      configuredRouters.add(router as unknown as object)
      let inTransition = false
      const previousBefore = router.onBeforeRouteChange
      const previousAfter = router.onAfterRouteChange ?? router.onAfterRouteChanged

      router.onBeforeRouteChange = async (to) => {
        const result = await previousBefore?.(to)
        if (result === false) return false
        if (inTransition || isSameDocumentNavigation(to)) return

        inTransition = true
        document.body.classList.add('page-leave')
        await new Promise((resolve) => window.setTimeout(resolve, NAV_TRANSITION_MS))
      }

      router.onAfterRouteChange = async (to) => {
        await previousAfter?.(to)
        document.body.classList.remove('page-leave')
        inTransition = false
        await nextTick()
        scrollSidebarToActiveItem()
      }
    }

    onMounted(() => {
      window.requestAnimationFrame(() => scrollSidebarToActiveItem())
    })

    onUnmounted(() => {
      document.body.classList.remove('page-leave')
    })

    return h(DefaultTheme.Layout)
  },
  enhanceApp({ app }) {
    app.component('ProblemCard', ProblemCard)
    app.component('ProblemHeader', ProblemHeader)
    app.component('SolutionBlock', SolutionBlock)
    app.component('ProblemNav', ProblemNav)
    app.component('LanguageSelector', LanguageSelector)
    app.component('TagFilter', TagFilter)
    app.component('Playground', Playground)
    app.component('ProblemList', ProblemList)
    app.component('ProblemPage', ProblemPage)
  },
} satisfies Theme
