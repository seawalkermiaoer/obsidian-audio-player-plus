# Segment Playback Feature

## Overview
The segment playback feature allows users to define time segments in audio files and play them with automatic start and stop functionality.

## How to Use

### Creating Segments
To create a segment, add a comment in the following format in your markdown file below the audio player:

```
00:00:04 --- 00:00:08 → s2
```

This format consists of:
- `00:00:04`: Start time of the segment
- `00:00:08`: End time of the segment
- `s2`: Label/content for the segment

### Playing Segments
To play a segment:
1. Click on the segment in the comment list
2. The player will automatically:
   - Seek to the start time
   - Begin playback
   - Pause automatically when reaching the end time

### Regular Comments
Regular comments without end times still work as before:

```
00:00:04 --- s2
```

Clicking these will simply seek to the time and play normally without automatic stopping.

## Technical Implementation

### Data Structure
The [AudioComment](file:///e:/best/obsidian-audio-player-plus/src/types.ts#L3-L8) type has been extended with optional fields:
- `endTimeNumber`: End time in seconds
- `endTimeString`: End time in formatted string

### Parsing Logic
The [getComments](file:///e:/best/obsidian-audio-player-plus/src/components/App.vue#L262-L278) method in [App.vue](file:///e:/best/obsidian-audio-player-plus/src/components/App.vue) now parses the new format:
1. Splits the line by ` --- `
2. Checks if the content part contains ` → ` which indicates a segment
3. If found, extracts the end time and content separately
4. Populates the extended [AudioComment](file:///e:/best/obsidian-audio-player-plus/src/types.ts#L3-L8) object

### Playback Control
The [playSegment](file:///e:/best/obsidian-audio-player-plus/src/components/App.vue#L282-L287) method in [App.vue](file:///e:/best/obsidian-audio-player-plus/src/components/App.vue):
1. Sets the `currentSegmentEnd` time
2. Seeks to the start time
3. Begins playback if not already playing

The [timeUpdateHandler](file:///e:/best/obsidian-audio-player-plus/src/components/App.vue#L226-L239) method:
1. Continuously monitors playback time
2. When `currentSegmentEnd` is set and current time >= end time, pauses playback
3. Clears the `currentSegmentEnd` value