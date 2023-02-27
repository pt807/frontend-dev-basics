imageViewer = {
	init: function() {
		for (var i = 0; i < 1000; i++) {
			this._changeImage();
		}
	},
	_changeImage: function() {
		var index = Math.floor(Math.random() * this._images.length);
		console.log(index);
	},
	_intevalId: null,
	_images: [{
		name: '국화',
		file: 'Chrysanthemum.jpg'
	}, {
		name: '사막',
		file: 'Dersert.jpg'
	}, {
		name: '수국',
		file: 'Hydrangeas.jpg'
	}, {
		name: '젤리피쉬',
		file: 'Jellyfish.jpg'
	}, {
		name: '코알라',
		file: 'Koala.jpg'
	}, {
		name: '등대',
		file: 'Lighthouse.jpg'
	}, {
		name: '펭귄',
		file: 'Penguins.jpg'
	}, {
		name: '튤립',
		file: 'Tulips.jpg'
	}]
};