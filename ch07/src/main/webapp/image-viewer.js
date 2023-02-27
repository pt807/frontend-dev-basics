imageViewer = {
	_init: function() {
		$('#btn-change').click(imageViewer._changeImage.bind(this));
		$('#btn-slideshow').click(imageViewer._startShow.bind(this));
	},
	init: function() {
		$(imageViewer._init.bind(this));
	},
	_changeImage: function() {
		var index = Math.floor(Math.random() * this._images.length);
		while ($('img').attr('title') === this._images[index].name) {
			index = Math.floor(Math.random() * this._images.length);
		}
		var selectImg = this._images[index].file;
		var selectName = this._images[index].name;

		$('img').attr({
			src: 'images/' + selectImg,
			title: selectName
		});
		console.log(selectImg, selectName);
	},
	_startShow: function() {
		if (!this._intevalId) {
			this._intevalId = setInterval(function() {
				imageViewer._changeImage();
			}, 1000);
			$('#btn-slideshow').text('슬라이드쇼 중지');
		} else {
			clearInterval(this._intevalId);
			$('#btn-slideshow').text('슬라이드쇼 시작');
			this._intevalId = null;
		}
	},
	_intevalId: null,
	_images: [{
		name: '국화',
		file: 'Chrysanthemum.jpg'
	}, {
		name: '사막',
		file: 'Desert.jpg'
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