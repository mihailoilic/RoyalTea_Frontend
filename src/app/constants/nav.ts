import { API } from "./apis";

export const NAV = [
    {
        title: "Home",
        route: "/",
        routerLinkOptions: {
            exact: true
        },
        type: "link"
    },
    {
        title: "Shop",
        route: "/shop",
        type: "megamenu",
        children: [
            {
                title: "Browse",
                children: [
                    {
                        title: "Best Value",
                        route: "/shop/sort/price-asc"
                    },
                    {
                        title: "New Arrivals",
                        route: "/shop/sort/latest"
                    }
                ]

            },
            {
                title: "Categories",
                loadChildrenFromApi: {
                    apiPath: API.CATEGORIES,
                    titleProperty: "name",
                    baseRoute: "/shop/category/"
                }

            }
        ]
    },
    {
        title: "Blog",
        route: "/blog",
        type: "submenu",
        children: [
            {
                title: "newest",
                route: "/blog/sort/newest"
            },
            {
                title: "popular",
                route: "/blog/sort/popular"
            }
        ]
    },
    {
        title: "More",
        type: "submenu",
        route: "_hover",
        routerLinkOptions: {
            exact: true
        },
        children: [
            {
                title: "Author",
                route: "/author"
            },
            {
                title: "Contact",
                route: "/contact"
            }
        ]
    }
];