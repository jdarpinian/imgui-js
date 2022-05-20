import * as ImGui from "../../build/imgui.js";
export declare type ImGuiDemoMarkerCallback = (section: string) => void;
export declare let GImGuiDemoMarkerCallback: ImGuiDemoMarkerCallback | null;
export declare function ShowDemoWindow(p_open: ImGui.Access<boolean> | null): boolean;
