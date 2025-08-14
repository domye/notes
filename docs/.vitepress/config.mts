import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";

const description = [
	"欢迎来到 vitepress-theme-teek 使用文档",
	"Teek 是一个基于 VitePress 构建的主题，是在默认主题的基础上进行拓展，支持 VitePress 的所有功能、配置",
	"Teek 拥有三种典型的知识管理形态：结构化、碎片化、体系化，可以轻松构建一个结构化知识库，适用个人博客、文档站、知识库等场景",
].toString();

const teekConfig = defineTeekConfig({
	sidebarTrigger: true,
	author: { name: "Domye", link: "https://github.com/Domye" },
	blogger: {
		avatar: "https://q1.qlogo.cn/g?b=qq&nk=1523610551&s=640",
		shape: "circle-rotate",
		name: "Domye",
		slogan: "且做闲庭信步!",
		circleBgImg: "/blog/bg4.webp",
		color: "#ffffff",
	},
	themeEnhance: {
		position: "top", // 位置，top 为导航栏右侧，bottom 为右下角
		// 布局切换配置
		layoutSwitch: {
			disabled: false,
			defaultMode: "fullWidth",
		},
		// 布局主题色配置
		themeColor: {
			disabled: false,
			defaultColor: "vp-default",
			defaultSpread: false,
		},
		// 聚光灯配置
		spotlight: {
			disabled: false,
			defaultStyle: "aside",
			defaultValue: true,
		},
	},
	footerInfo: {
		theme: {
			name: `Theme By Teek@${version}`,
		},
		copyright: {
			createYear: 2025,
			suffix: "Domye",
		},
	},
	codeBlock: {
		copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
	},
	post: {
		showCapture: true,
	},
	articleShare: { enabled: true },
	vitePlugins: {
		sidebarOption: {
			initItems: false,
		},
	},
	markdown: {
		demo: {
			githubUrl:
				"https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/docs",
		},
	},
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
	extends: teekConfig,
	title: "月下·书斋",
	description: description,
	cleanUrls: false,

	// lastUpdated: true,
	lang: "zh-CN",
	head: [
		[
			"link",
			{
				rel: "icon",
				type: "icon",
				href: "https://cdn.domye.top/uploads/07/1752738903.ico",
			},
		],
		["link", { rel: "icon", type: "image/png", href: "/teek-logo-mini.png" }],
		["meta", { property: "og:type", content: "website" }],
		["meta", { property: "og:locale", content: "zh-CN" }],
		["meta", { property: "og:title", content: "Teek | VitePress Theme" }],
		["meta", { property: "og:site_name", content: "Teek" }],
		["meta", { property: "og:image", content: "" }],
		["meta", { property: "og:url", content: "" }],
		["meta", { property: "og:description", description }],
		["meta", { name: "description", description }],
		["meta", { name: "author", content: "Teek" }],
		[
			"meta",
			{
				name: "viewport",
				content:
					"width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
			},
		],

		["meta", { name: "keywords", description }],
		["meta", { name: "baidu-site-verification", content: "codeva-GdK2q9MO1i" }], // 百度收录
		[
			"meta",
			{ name: "msvalidate.01", content: "48CABE70F538B8D117567176ABF325AF" },
		], // Bing 收录验证
		[
			"script",
			{
				charset: "UTF-8",
				id: "LA_COLLECT",
				src: "//sdk.51.la/js-sdk-pro.min.js",
			},
		], // 51.la
		[
			"script",
			{},
			`typeof LA !== 'undefined' && LA.init({ id: "3LqfP8Icg0GeEvtn", ck: "3LqfP8Icg0GeEvtn", hashMode: true })`,
		], // 51.la
	],
	markdown: {
		// 开启行号
		lineNumbers: true,
		image: {
			// 默认禁用；设置为 true 可为所有图片启用懒加载。
			lazyLoading: true,
		},
		// 更改容器默认值标题
		container: {
			tipLabel: "提示",
			warningLabel: "警告",
			dangerLabel: "危险",
			infoLabel: "信息",
			detailsLabel: "详细信息",
		},
	},
	sitemap: {
		hostname: "https://vp.teek.top",
		transformItems: (items) => {
			const permalinkItemBak: typeof items = [];
			// 使用永久链接生成 sitemap
			const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig
				.permalinks;
			items.forEach((item) => {
				const permalink = permalinks?.map[item.url];
				if (permalink)
					permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
			});
			return [...items, ...permalinkItemBak];
		},
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/teek-logo-mini.svg",
		darkModeSwitchLabel: "主题",
		sidebarMenuLabel: "菜单",
		returnToTopLabel: "返回顶部",
		lastUpdatedText: "上次更新时间",
		outline: {
			level: [2, 3],
			label: "本页导航",
		},
		docFooter: {
			prev: "上一页",
			next: "下一页",
		},

		nav: [
			{ text: "首页", link: "/" },
			{
				text: "前端",
				items: [
					{
						text: "前端基础",
						link: "/front/01.html/01.排版标签.html",
					},
					{
						text: "更新日志",
						link: "https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/dev/CHANGELOG.md",
					},
				],
			},
			{
				text: "java",
				link: "/02.Java/01.基础部分/01.Java基础知识介绍",
				activeMatch: "/01.指南/",
			},
			{
				text: version,
				items: [
					{
						text: "历史版本",
						link: "https://github.com/Kele-Bingtang/vitepress-theme-teek/releases",
					},
					{
						text: "更新日志",
						link: "https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/dev/CHANGELOG.md",
					},
				],
			},
		],
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/domye",
			},
		],

		search: {
			provider: "local",
		},
		editLink: {
			text: "在 GitHub 上编辑此页",
			pattern:
				"https://github.com/Kele-Bingtang/vitepress-theme-teek/edit/master/docs/:path",
		},
	},
});
