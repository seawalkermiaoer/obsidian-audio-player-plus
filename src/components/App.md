# App.vue Component Documentation

## Overview
The App.vue component is the main UI component for the Obsidian Audio Player Plus plugin. It provides a comprehensive audio player interface with waveform visualization, playback controls, and bookmark/comment functionality.

## Features
- Audio playback controls (play/pause, skip forward/backward)
- Interactive waveform visualization
- Bookmark/comment system with timestamp integration
- Responsive layout that adapts to container size
- Global audio management across the vault

## Props
| Prop | Type | Description |
|------|------|-------------|
| filepath | String | Path to the audio file in the vault |
| ctx | MarkdownPostProcessorContext | Context for the markdown processor |
| mdElement | HTMLElement | The markdown element containing the player |
| audio | HTMLAudioElement | Shared audio element for global playback |

## Data Properties
| Property | Type | Description |
|----------|------|-------------|
| srcPath | String | Resource path for the audio file |
| filteredData | Array<number> | Normalized amplitude data for waveform visualization |
| nSamples | Number | Number of samples in the waveform (default: 150) |
| duration | Number | Duration of the audio file in seconds |
| currentTime | Number | Current playback position in seconds |
| playing | Boolean | Playback state |
| button/button1 | HTMLSpanElement | Play/pause button elements |
| clickCount | Number | Counter for detecting double clicks |
| showInput | Boolean | Visibility state of comment input |
| newComment | String | Text for new comment |
| comments | Array<AudioComment> | List of audio bookmarks/comments |
| activeComment | AudioComment/null | Currently active comment |
| smallSize | Boolean | Layout mode based on container width |

## Computed Properties
| Property | Description |
|----------|-------------|
| displayedCurrentTime | Formatted current time (mm:ss) |
| displayedDuration | Formatted audio duration (mm:ss) |
| currentBar | Index of the current bar in the waveform |
| commentsSorted | Comments sorted by timestamp |

## Methods

### Audio Processing
- `loadFile()` - Loads the audio file from the vault
- `processAudio(path)` - Processes audio data to generate waveform
- `loadCache()` - Loads cached waveform data from localStorage
- `saveCache()` - Saves waveform data to localStorage

### Playback Control
- `togglePlay()` - Toggles play/pause state
- `play()` - Starts audio playback
- `pause()` - Pauses audio playback
- `setPlayheadSecs(time)` - Sets the current playback position
- `globalPause()` - Dispatches global pause event
- `timeUpdateHandler()` - Handles time update events

### UI Interaction
- `barMouseDownHandler(i)` - Handles clicks on waveform bars
- `showCommentInput()` - Shows the comment input field
- `onResize()` - Handles resize events for responsive layout
- `setBtnIcon(icon)` - Updates play/pause button icons

### Comment Management
- `addComment()` - Adds a new comment at the current time
- `removeComment(i)` - Removes a comment by index
- `getComments()` - Retrieves comments from the markdown source

### Utility
- `getSectionInfo()` - Gets section information from context
- `getParentWidth()` - Gets the width of the parent element
- `isCurrent()` - Checks if this player is controlling the current audio

## Template Structure
The template consists of several key sections:

1. **Playback Controls** - Play/pause button and +/- 5 second skip buttons
2. **Waveform Visualization** - Interactive bars representing audio amplitude
3. **Timeline** - Current time and duration display
4. **Comment Input** - Form for adding new comments/bookmarks
5. **Comment List** - Display of existing comments/bookmarks

## Events
- `allpause` - Global pause event
- `allresume` - Global resume event
- `addcomment` - Global add comment event
- `resize` - Resize observation events

## Lifecycle Hooks
- `created` - Initializes file loading
- `mounted` - Sets up DOM references, event listeners, and observers
- `beforeDestroy` - Cleans up observers

## Responsive Behavior
The component adapts its layout based on container width:
- Full layout for widths >= 300px
- Compact layout for widths < 300px

## Storage
Waveform data and duration are cached in localStorage using the file path as the key to improve performance on subsequent loads.