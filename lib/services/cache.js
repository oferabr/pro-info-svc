const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const getByKey = key => myCache.get(key);

const insertToCache = (key, data, ttl) => {
	myCache.set(key, data, ttl);
};

// const withCacheKey = (getValueAsyncFunc) => async (key, ...args) => {
//
//     const fromCache = myCache.get(key);
//
//     if (fromCache) {
//         return fromCache;
//     }
//
//     let uncachedValue;
//
//     try {
//         uncachedValue = await getValueAsyncFunc(...args);
//     } catch (e) {
//         console.log('failed to get value ');
//         throw e;
//     }
//
//     insertToCache(key,uncachedValue);
//
//     return uncachedValue;
// };

Object.assign(module.exports, {
	getByKey,
	insertToCache
});
