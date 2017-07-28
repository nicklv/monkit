import Registry from "./Registry";
export declare function getRegistry(): Registry;
export declare function meter(name: string): any;
export declare function timer(name: string): any;
export declare function histogram(name: string): any;
export declare function counter(name: string): any;
export declare function gauge(name: string): any;
export declare function toOpsPerMin(rate: any): number;
export declare function toMs(nanos: any): number;
export declare function instrumented(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor;
export declare function instrument(name: string, delegate: Function): Promise<any>;
