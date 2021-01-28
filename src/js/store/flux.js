const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://www.swapi.tech/api";
	return {
		store: {
			planets: [],
			people: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			fetchData: () => {
				fetch(`${baseUrl}/planets`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})

					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));

				fetch(`${baseUrl}/people`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})

					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err));

				fetch(`${baseUrl}/vehicles`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})

					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err));
			},

			addFavorites: item => {
				setStore({ favorites: [...getStore().favorites, item] });
			},

			deleteFavorites: item => {
				let filterFavorites = getStore().favorites.filter(favorite => {
					return favorite.name != item.name;
				});
				setStore({ favorites: filterFavorites });
			}
		}
	};
};

export default getState;
