import { NavLink } from "./navigation.model";

export const MAIN_NAV_LINKS: NavLink[] = [
    { path: '/new-world', label: 'New World' },
    { path: '/thrones-liberty', label: 'Thrones & Liberty' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
];

export const NEW_WORLD_NAV_LINKS: NavLink[] = [
    { path: '/new-world', label: 'Home' },
    { path: '/new-world/companies', label: 'Companies' },
    { path: '/new-world/news', label: 'News' },
    { path: '/new-world/wars', label: 'Wars' },
    { path: '/new-world/servers', label: 'Servers' },
    { path: '/new-world/forum', label: 'Forum' }
];

export const NEW_WORLD_TENANTCOMPANY_NAV_LINKS: NavLink[] = [
    { path: 'overview', label: 'Overview' },
    { path: 'members', label: 'Members' },
    { path: 'events', label: 'Events' },
    { path: 'wars', label: 'Wars' },
];