import type {DefaultTheme} from "vitepress";

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/guide/': [
        {
            text: 'Guide',
            items: [
                {text: 'Index', link: '/guide/'},
                {text: 'started', link: '/guide/getting-started'},
                {text: 'what', link: '/guide/what-is-vitepress'}
            ]
        }
    ],
    '/examples/': [
        {
            text: 'Examples',
            items: [
                {text: 'Index', link: '/examples/'},
                {text: 'api', link: '/examples/api-examples'},
                {text: 'markdown', link: '/examples/markdown-examples'}
            ]
        }
    ]
}