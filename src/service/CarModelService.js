export class CarModelService {

	static filterByName(keyword) {
		let models = this.findAll();
		return models.filter(function(carModel) {
			let name = carModel.name;
			return name.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ? true : false;
		});
	}

	static findById(id) {
		let models = this.findAll();
		for (let i = 0; i < models.length; i++) {
			let model = models[i];
			if (model.id.toString() === id.toString()) {
				return model;
			}
		}
		return null;
	}

	static findAll() {
		return [
			{
				'id': 1,
			  'name': 'Audi',
				'speed': 170,
				'color': 'black',
				'price': 28500,
				'marketShare': []
			},
			{
				'id': 2,
			  'name': 'Porsche',
				'speed': 250,
				'color': 'white',
				'price': 61000,
				'marketShare': []
			},
			{
				'id': 3,
			  'name': 'Tesla',
				'speed': 280,
				'color': 'green',
				'price': 79000,
				'marketShare': []
			},
			{
				'id': 4,
				'name': 'Ferrari',
				'speed': 320,
				'color': 'red',
				'price': 344000,
				'marketShare': []
			},
			{
				'id': 5,
				'name': 'Lamborghini',
				'speed': 334,
				'color': 'yellow',
				'price': 521000,
				'marketShare': []
			},
			{
				'id': 6,
			  'name': 'Bugatti',
				'speed': 420,
				'color': 'blue',
				'price': 1591000,
				'marketShare': []
			}
		];
	}
}
