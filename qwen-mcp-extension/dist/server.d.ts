/**
 * MCP Server for Qwen Agents Toolpack
 * Implements the Model Context Protocol to expose tools to AI assistants
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { z } from 'zod';
declare const server: Server<{
    method: string;
    params?: z.objectOutputType<{
        _meta: z.ZodOptional<z.ZodObject<{
            progressToken: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            progressToken: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            progressToken: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, z.ZodTypeAny, "passthrough">>>;
    }, z.ZodTypeAny, "passthrough"> | undefined;
}, {
    method: string;
    params?: z.objectOutputType<{
        _meta: z.ZodOptional<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
    }, z.ZodTypeAny, "passthrough"> | undefined;
}, z.objectOutputType<{
    _meta: z.ZodOptional<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
}, z.ZodTypeAny, "passthrough">>;
export { server };
//# sourceMappingURL=server.d.ts.map