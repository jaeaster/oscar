#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::command;

#[command]
fn greet(name: String) -> String {
    format!("Hello {}!", name)
}

#[command]
fn start_stream(magnet_link: String) {}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, start_stream])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
