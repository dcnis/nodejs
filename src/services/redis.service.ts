import { createClient } from 'redis';
import env from '../config/env.js';
import log from '../config/winston.js';

class RedisCache {
  private static client: any;
  private static connected: boolean = false;

  public static init = async () => {
    const uri = `redis://default:${env.REDIS_PASSWORD}@redis:6379`;
    this.client = createClient({
      url: uri,
    });

    this.client.on('error', (err: Error) =>
      console.log('Redis Client Error', err)
    );

    await this.client.connect();
    this.connected = true;
    log.info('Redis connected successfully');

    await this.client.set('key', 'that is my value');
    const value = await this.client.get('key');
    log.info(value);
  };

  public static set = async (key: string, value: string): Promise<any> => {
    return this.client.set(key, value);
  };

  public static get = async (key: string): Promise<any> => {
    return this.client.get(key);
  };

  public static expire = async (
    key: string,
    milliseconds: number
  ): Promise<any> => {
    return this.client.expire(key, milliseconds);
  };

  public static isConnected(): boolean {
    return this.connected;
  }
}

export default RedisCache;
