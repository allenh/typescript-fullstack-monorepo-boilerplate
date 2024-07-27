import { describe, expect, test } from 'vitest';

describe('Health check E2E', async () => {
  test('Server health check should return 200', async () => {
    const response = await fetch('http://localhost:3000');
    expect(response.status).toEqual(200);
  });
});
