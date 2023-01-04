import { SvelteComponentTyped } from "svelte";
import "./svelteSnow.css";
declare const __propDef: {
    props: {
        active?: boolean | undefined;
        activeMonths?: Number[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SvelteSnowProps = typeof __propDef.props;
export type SvelteSnowEvents = typeof __propDef.events;
export type SvelteSnowSlots = typeof __propDef.slots;
export default class SvelteSnow extends SvelteComponentTyped<SvelteSnowProps, SvelteSnowEvents, SvelteSnowSlots> {
}
export {};
