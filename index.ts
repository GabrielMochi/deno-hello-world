import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';

const port: number = 3000;
const server = serve({ port });

console.log(`The server is running on port: ${port}`);

for await (const req of server) {
  req.respond({ body: 'Hello World from Deno!' });
}
