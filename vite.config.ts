import { defineConfig } from "vitest/config";

export default defineConfig({
  server: {
    // IPv4 loopback so the Tailscale proxy can reach it; .ts.net is the tailnet hostname it arrives on.
    host: "127.0.0.1",
    allowedHosts: [".ts.net"],
  },
  test: {
    environment: "happy-dom",
    include: ["src/**/*.test.ts"],
  },
});
