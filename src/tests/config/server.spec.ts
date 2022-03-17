import { createServer } from '../../config/server';
import { jest } from '@jest/globals';

describe('server.spec.ts', () => {
  it('should create server', async () => {
    // GIVEN

    // WHEN
    const server = await createServer();

    // THEN
    console.log(server);
  });
});
