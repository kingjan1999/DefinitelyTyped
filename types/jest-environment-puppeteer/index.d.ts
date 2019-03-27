// Type definitions for jest-environment-puppeteer 4.0
// Project: https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer
// Definitions by: Josh Goldberg <https://github.com/joshuakgoldberg>
//                 Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Browser, Page, BrowserContext, ConnectOptions, LaunchOptions } from 'puppeteer';
import NodeEnvironment from 'jest-environment-node'

interface JestPuppeteer {
    /**
     * Reset global.page
     *
     * ```ts
     * beforeEach(async () => {
     *   await jestPuppeteer.resetPage()
     * })
     * ```
     */
    resetPage(): Promise<void>;

    /**
     * Suspends test execution and gives you opportunity to see what's going on in the browser
     * - Jest is suspended (no timeout)
     * - A debugger instruction to Chromium, if Puppeteer has been launched with { devtools: true } it will stop
     *
     * ```ts
     * it('should put test in debug mode', async () => {
     *   await jestPuppeteer.debug()
     * })
     * ```
     */
    debug(): Promise<void>;
}

declare interface JestPuppeteerConfig {
    launch: LaunchOptions;
    connect: ConnectOptions;
    browserContext: string;
    exitOnPageError: boolean;
    server: {
        command: string;
        debug: boolean;
        launchTimeout: number;
        host: string;
        protocol: string;
        port: number;
        usedPortAction: string;
    }
}

declare class PuppeteerEnvironment extends NodeEnvironment {
    setTimeout(timeout: number): void;
    setup(): Promise<void>;
    teardown(): Promise<void>;
}

declare function setup(jestConfig?: JestPuppeteerConfig): Promise<void>;
declare function teardown(jestConfig?: JestPuppeteerConfig): Promise<void>;

declare global {
    const browser: Browser;
    const context: BrowserContext;
    const page: Page;
    const jestPuppeteer: JestPuppeteer;
}

export default PuppeteerEnvironment;
export {setup, teardown};
