export const getLocalState = JSON.parse(localStorage.getItem(`state`));

export const templateState = {
	TODO: {
		task: [],
		filter: `All`,
		filteredTask: [],
	},
};
