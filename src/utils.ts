export function secondsToString(num: number) {
	const h = String(Math.floor(num / 3600)).padStart(2, "0");
	const m = String(Math.floor((num % 3600) / 60)).padStart(2, "0");
	const s = String(Math.floor(num % 60)).padStart(2, "0");
	
	// Check if there are fractional seconds
	if (num % 1 !== 0) {
		// Round to one decimal place for display
		const fractional = Math.round((num % 1) * 10) / 10;
		const ms = fractional.toFixed(1).substring(2); // Get the decimal part
		return `${h}:${m}:${s}.${ms}`;
	} else {
		// No fractional seconds
		return `${h}:${m}:${s}`;
	}
}

export function secondsToNumber(stmp: string): number {
	// Check if timestamp includes milliseconds
	if (stmp.includes('.')) {
		const [timePart, msPart] = stmp.split('.');
		const nums = timePart.split(":").map((x) => Number.parseInt(x));
		const baseSeconds = nums[2] + nums[1] * 60 + nums[0] * 3600;
		const milliseconds = Number.parseFloat("0." + msPart);
		return baseSeconds + milliseconds;
	} else {
		// No milliseconds
		const nums = stmp.split(":").map((x) => Number.parseInt(x));
		return nums[2] + nums[1] * 60 + nums[0] * 3600;
	}
}