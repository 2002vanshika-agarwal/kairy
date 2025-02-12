export interface Shortcut {
	id: string
	title: string
	url: string
	category: string
	icon: string
}
export interface Space {
	id: string
	title: string
	url: string
	category: string
	icon: string
	tags: string[]
}
export interface IState {
	shortcutList: Shortcut[]
	activeShortcutCategory: string
	shortcutCategoryList: string[]
	spaceList: Space[]
	spaceCategoryList: string[]
}
export interface IAction {
	type:
		| 'SET_SHORTCUT_LIST'
		| 'SET_SPACE_LIST'
		| 'SET_ACTIVE_SHORTCUT_CATEGORY'
		| 'SET_SHORTCUT_CATEGORY_LIST'
		| 'SET_SPACE_CATEGORY_LIST'
	payload: any
}
