// import RedisClient from '@node-redis/client/dist/lib/client';
// import redis from 'redis';
// import env from '../config/env';

// class Redis {
//   private client: any;

//   constructor() {
//     this.init();
//   }

//   init = async () => {
//     const uri = `redis://default:${env.REDIS_PASSWORD}@redis:6379`;
//     this.client = redis.createClient({
//       url: uri,
//     });

//     await this.client.connect();

//     await this.client.set('key', 'value');
//     const value = await this.client.get('key');
//     console.log(value);
//   };

//   public get() {
//     return this.client;
//   }
// }
