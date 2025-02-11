// declare module '@capacitor/core' {
//   interface PluginRegistry {
//     GetAppInfo: GetAppInfoPlugin;
//   }
// }

export interface GetAppInfoPlugin {
  getAppIcon(options: { packageName: string }): Promise<{ value: string }>;
  getAppLabel(options: { packageName: string }): Promise<{ value: string }>;
  getFeature(options: { feature: string; }): Promise<{ value: string; }>;
  launchApp(options: { packageName: string }): Promise<void>;
  canLaunchApp(options: { packageName: string }): Promise<void>;
  getAvailableApps(): Promise<{ applications: string }>;
}
