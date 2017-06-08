angular.module('encuestasApp')
	.service('galleryService', function($q, $http ){
	 	var flickr = {};
		flickr.api = 'ed63c482172c41cc603ea3a1bdb01012';
		flickr.user_id = '150263346%40N03';
		flickr.format = 'json';
		flickr.endpoint = 'https://api.flickr.com/services/rest/';

		var gallery = {};

		gallery.getProfile = function () {
			//https://api.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=2a3c22dabde799119ef12641ea2ef046&user_id=150263346%40N03&format=json&nojsoncallback=1
			var url = flickr.endpoint+'?method=flickr.profile.getProfile&api_key='+flickr.api+'&user_id='+flickr.user_id+'&format='+flickr.format+'&nojsoncallback=1'
		};

		//Obtener listado de PhotoSet 
		gallery.getPhotoSets = function () {
			//https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=2a3c22dabde799119ef12641ea2ef046&format=json&nojsoncallback=1
			var url = flickr.endpoint+'?method=flickr.photosets.getList&api_key='+flickr.api+'&user_id='+flickr.user_id+'&format='+flickr.format+'&nojsoncallback=1';
			console.log(url);
			return $http.get(url);
		};

		gallery.getPhotos = function (photoSetId) {
			https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=2a3c22dabde799119ef12641ea2ef046&photoset_id=72157684827636425&format=json&nojsoncallback=1
			var url = flickr.endpoint+'?method=flickr.photosets.getPhotos&api_key='+flickr.api+'&photoset_id='+photoSetId+'&user_id='+flickr.user_id+'&format='+flickr.format+'&nojsoncallback=1';
			console.log(url);
			return $http.get(url);
		};

		gallery.getComments = function (photoId) {
			//https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=2a3c22dabde799119ef12641ea2ef046&photo_id=35184983425&format=json&nojsoncallback=1
			var url = flickr.endpoint+'?method=flickr.photos.comments.getList&api_key='+flickr.api+'&photo_id='+photoId+'&format='+flickr.format+'%nojsoncallback=1';
			return $http.get(url);
		};

		gallery.getInfo = function(photoId, secret){
			var sizes =flickr.endpoint+'?method=flickr.photos.getSizes&api_key='+flickr.api+'&photo_id='+photoId+'&format='flickr.format+'&nojsoncallback=1';

			var info = flickr.endpoint+'?method=flickr.photos.getInfo&api_key='+flickr.api+'&photo_id='+photoId+'&secret='+secret+'&format='flickr.format+'&nojsoncallback=1';
		return $q.all([
			$http.get(sizes),
			$http.get(info)]); 

		};

		return gallery;
		
	});