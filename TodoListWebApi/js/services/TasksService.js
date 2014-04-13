todoListApp.service("tasksService", function($http) {

	this.add = function(task) {
		return httpRequest("post", task);
	};

	this.remove = function(task) {
		return httpRequest("delete", task.id);
	};

	this.done = function(task) {
		return httpRequest("put", task.id, task);
	};

	this.getTasks = function() {
		return httpRequest("get", "");
	};

	var baseUrl = "localhost:8082/api/"
	var httpRequest = function(method, url, data) {
		var urlToSend = baseUrl;

		if(typeof(url) === "string")
			urlToSend = baseUrl.concat(url);
		else if(!!url)
			data = url;

		return $http({method: method, url: urlToSend}, data);
	}
});