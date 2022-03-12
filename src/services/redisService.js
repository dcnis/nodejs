import redis from 'redis';
import { REDIS_PASSWORD } from '../config/env.js';

let redisClient = {};

(async () => {
    const uri = `redis://default:${REDIS_PASSWORD}@redis:6379`;
    redisClient = redis.createClient({
        url: uri
      });
    console.log('Connected to REDIS successfully');
})();

export default redisClient;


