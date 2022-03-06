import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        fonts: {
            primary: string,
            secondary: string
        },

        colors: {
            gradientBackground: {
                color: string,
                background: string
            },

            placeholder: {
                color: string
            },

            background: {
                color: string
            },

            border: {
                color: string
            },

            button: {
                color: string
            },

            typography: {
                color: string
            },

            underline: {
                color: string
            },

            inputs: {
                color: string
            }
        },

        boxShadow: {
            color: string
        }
    }
}