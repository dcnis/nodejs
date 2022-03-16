import { createClient } from 'redis';
import env from '../config/env.js';
import log from '../config/winston.js';

class RedisCache {
  private static _instance: RedisCache;
  private _client: any;
  private _connected: boolean = false;

  private constructor() {}

  // Singleton pattern
  public static getInstance() {
    if (!this._instance) {
      this._instance = new RedisCache();
    }
    return this._instance;
  }

  public init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const uri = `redis://default:${env.REDIS_PASSWORD}@redis:6379`;
      this._client = createClient({
        url: uri,
      });

      this._client.connect().then(() => {
        log.info('Redis connected successfully');
        this._connected = true;
        resolve();
      });

      this._client.on('ready', () => {
        log.info('Redis is ready');
      });

      this._client.on('reconnecting', () => {
        console.info('Redis: reconnecting');
      });

      this._client.on('end', () => {
        log.info('Redis: end');
      });

      this._client.on('disconnected', () => {
        log.error('Redis: disconnected');
      });

      this._client.on('error', (err: Error) => {
        log.error('Redis Client Error', err);
        reject(err);
      });
    });
  }

  public set(key: string, value: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._client
        .set(key, value)
        .then((result: any) => {
          return resolve(result);
        })
        .catch((error: Error) => {
          return reject(error);
        });
    });
  }

  public get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const result = this._client
        .get(key)
        .then((result: any) => {
          resolve(result);
        })
        .catch((error: Error) => {
          log.error(error);
          reject(error);
        });
    });
  }

  public expire(key: string, milliseconds: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this._client
        .expire(key, milliseconds)
        .then((result: any) => {
          resolve(result);
        })
        .catch((error: Error) => {
          log.error(error);
          reject(error);
        });
    });
  }

  public isConnected(): boolean {
    return this._connected;
  }
}

export default RedisCache.getInstance();
