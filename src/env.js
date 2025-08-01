import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */ server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    CLERK_SECRET_KEY: z.string(),
    CLERK_WEBHOOK_SECRET: z.string(),
    OPENROUTER_SITE_URL: z.string().url().optional(),
    OPENROUTER_SITE_NAME: z.string().optional(),
    OPENROUTER_API_KEY_1: z.string(),
    OPENROUTER_API_KEY_2: z.string().optional(),
    OPENROUTER_API_KEY_3: z.string().optional(),
    OPENROUTER_API_KEY_4: z.string().optional(),
    OPENROUTER_API_KEY_5: z.string().optional(),
    OPENROUTER_API_KEY_6: z.string().optional(),
    OPENROUTER_API_KEY_7: z.string().optional(),
    OPENROUTER_API_KEY_8: z.string().optional(),
    OPENROUTER_API_KEY_9: z.string().optional(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: z.string(),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
    NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */ runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
    OPENROUTER_SITE_URL: process.env.OPENROUTER_SITE_URL,
    OPENROUTER_SITE_NAME: process.env.OPENROUTER_SITE_NAME,
    NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL: process.env.NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL,
    OPENROUTER_API_KEY_1: process.env.OPENROUTER_API_KEY_1,
    OPENROUTER_API_KEY_2: process.env.OPENROUTER_API_KEY_2,
    OPENROUTER_API_KEY_3: process.env.OPENROUTER_API_KEY_3,
    OPENROUTER_API_KEY_4: process.env.OPENROUTER_API_KEY_4,
    OPENROUTER_API_KEY_5: process.env.OPENROUTER_API_KEY_5,
    OPENROUTER_API_KEY_6: process.env.OPENROUTER_API_KEY_6,
    OPENROUTER_API_KEY_7: process.env.OPENROUTER_API_KEY_7,
    OPENROUTER_API_KEY_8: process.env.OPENROUTER_API_KEY_8,
    OPENROUTER_API_KEY_9: process.env.OPENROUTER_API_KEY_9,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
})
