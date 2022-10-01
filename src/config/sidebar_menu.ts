import { getRouteName } from '@/helpers/useRouteNameHelper'

export const SIDEBAR_MENU = [
  {
    title: 'Home',
    icon: 'account_box',
    route: getRouteName('homePage'),
    activeRoute: [],
  },
  {
    title: 'Categories',
    icon: 'account_box',
    activeRoute: [],
    children: [
      {
        route: getRouteName('aboutPage'),
        title: 'about',
        icon: 'event_note',
        activeRoute: [],
      },
      {
        route: getRouteName('contactPage'),
        title: 'Contact',
        icon: 'event_note',
        activeRoute: [],
      },
      {
        route: getRouteName('servicePage'),
        title: 'service',
        icon: 'event_note',
        activeRoute: [],
      },
    ],
  },
]
