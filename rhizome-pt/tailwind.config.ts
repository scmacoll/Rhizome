import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			colors: {
				'surface': 'rgb(31,34,37)',
				'surface-content': 'rgba(155,155,155)',
			}
		},
		fontFamily: {
			sans: [
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"'
			],
			'alliance': ["Alliance Neue"],
			'alliance-1': ["Alliance No.1"],
			'alliance-2': ["Alliance No.2"],
			'alliance-mono': ["Alliance Mono"]
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
				],
			},
		}),
	],
} satisfies Config;
