# Obsidian Audio Player

- one audio instance for the whole obsidian vault
- easy to initialize
- wave visualizer 
- keeps playing even if you've closed the tab
- add bookmarks to your audio files

## Demo
![add_audio](https://user-images.githubusercontent.com/117757392/201384119-fa94f5bc-dc8f-4e03-8822-0f8948aa52dd.gif)

## How to use
~~~
```audio-player
[[my awesome audio file.mp3]]
```
~~~
just add this to any of your md files

### Two simple Commands
accessable through command menu (Ctrl-P)

1. **Pause Audio** to pause whatever audio is playing
2. **Resume Audio** to resume 

### Add bookmarks through ui
![add_bookmark](https://user-images.githubusercontent.com/117757392/201384274-14831e0b-458e-4a01-9869-34f34ad628cc.gif)

1. Double click on any of the bars on the wave visualizer, 
2. Type your text
3. Hit enter or press the "Add" button
4. Click on any bookmark timecode to set the playhead position

### Add bookmarks through text
~~~
```audio-player
[[a1.wav]]
00:00:00 → 00:00:05 --- who
00:00:04 → 00:00:08 --- are
00:00:10 → 00:00:17 --- you
```
~~~
![image](https://user-images.githubusercontent.com/117757392/201384550-33aa7f25-cadc-4ce5-a846-24d87bd7a05d.png)


## How to install


### Using Git

1. Close obsidian
2. Go to your vault .obsidian/plugins folder in the terminal
3. git clone https://github.com/seawalkermiaoer/obsidian-audio-player-plus.git
4. Open obsidian
5. Go to settings -> community plugins
6. Scroll down, find "Audio Player Plus" plugin and enable it


## Pricing
The plugin is free, athough if you wanna say thanks, Star the repo.

## Notes 
If there're any bugs or instabilities, don't hesitate to open an issue 
