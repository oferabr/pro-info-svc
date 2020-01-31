const { get } = require('lodash');
const { getByKey, insertToCache } = require('./cache');
const { send } = require('../connector');
const { configs } = require('../../config/connectors');
const { url, apiKey } = get(configs, 'movies');

const ttl = 1000 * 60 * 60 * 24 * 7;

const handle = async req => {
	const movieId = get(req, 'query.movieId');
	const requestParams = getRequestParams(movieId);
	const cacheKey = createCacheKey(movieId);
	const cacheObject = getByKey(cacheKey);
	if (cacheObject) {
		updateCache(requestParams, cacheKey);
		return cacheObject;
	}
	const response = await send(requestParams);
	insertToCache(cacheKey, response.data, ttl);
	return get(response, 'data');
};

const updateCache = async (requestParams, cacheKey) => {
	const response = await send(requestParams);
	insertToCache(cacheKey, response.data, ttl);
};

const createCacheKey = (movieId) => `${url}:${movieId}`;

const getRequestParams = (movieId) => ({
	method: 'GET',
	url,
	params: {
		i: movieId,
		apiKey
	}
});

Object.assign(module.exports, {
	handle
});
