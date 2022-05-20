import * as ImGui from "../../build/imgui.js";
export declare let gl: WebGL2RenderingContext | WebGLRenderingContext | null;
export declare let ctx: CanvasRenderingContext2D | null;
export declare function Init(value: HTMLCanvasElement | WebGL2RenderingContext | WebGLRenderingContext | CanvasRenderingContext2D | null): void;
export declare function Shutdown(): void;
export declare function NewFrame(time: number): void;
export declare function RenderDrawData(draw_data?: ImGui.DrawData | null): void;
export declare function CreateFontsTexture(): void;
export declare function DestroyFontsTexture(): void;
export declare function CreateDeviceObjects(): void;
export declare function DestroyDeviceObjects(): void;
