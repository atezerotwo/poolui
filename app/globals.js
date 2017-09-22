'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		coin_code: "SUMO",
		coin_div: "1000000000", //1e9
		coin_chain_url: "https://explorer.sumokoin.com",
		pool_name: "alt_nodejs_pool",
		api_url : 'http://publicipofyourserver',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});

/*

coins available are:

coin_code: "XMR",
coin_div: "100000000000" //1e12
coin_chain_url: "https://xmrchain.net",

coin_code: "KRB",
coin_div: "1000000000000" //1e12
coin_chain_url: "https://explorer.karbowanec.com/en",

coin_code: "SUMO",
coin_div: "1000000000" //1e9
coin_chain_url: "https://explorer.sumokoin.com",
		
coin_code: "BCN",
coin_div: "1000000000" //1e9
coin_chain_url: "https://minergate.com/blockchain/bcn",

*/

