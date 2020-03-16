import * as menu_actions from '../actions/menu'

const menu_reducer = (
	state = {
		currentMenu: '-1',
	},
	action,
) => {
	switch (action.type) {
		case menu_actions.CHANGE_CURRENT_MENU:
			return {
				currentMenu: action.currentMenu.toString(),
			}
		default:
			return state
	}
}

export default menu_reducer
