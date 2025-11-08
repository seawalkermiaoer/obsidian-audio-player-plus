import { MarkdownPostProcessorContext } from "obsidian";

export type AudioComment = {
	content: string;
	startTimeNumber: number; // start time for segments
	startTimeString: string; // start time number for segmets
	endTimeNumber?: number; // end time for segments
	endTimeString?: string; // end time number for segmets
	index: number;
};

export type AudioPlayerRendererOptions = {
	ctx: MarkdownPostProcessorContext;
	player: HTMLAudioElement;
	filepath: string;
};