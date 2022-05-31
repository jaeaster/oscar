import { tauri, window } from '@tauri-apps/api';

export function dispatch<T>(
	command: string,
	args: Record<string | number | symbol, string | number | boolean> = {}
): Promise<T> {
	args.label = window.getCurrent().label;

	return tauri.invoke(command, args);
}
