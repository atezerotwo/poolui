'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		coin_code: "SUMO",
		pool_name: "nodejspool",
		api_url : 'https://api.xmrpool.net',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});